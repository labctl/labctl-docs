# Config Engine

::: info
The config engine is shared with containerlab and all your templates and even the command line flags can be used from either `labctl config` or `containerlab config`

Command line flag reference [config](/reference/config)
:::

## Overview

The Config Engine combines a powerful templating language with the knowledge of your network topology.

Templates allow us to render CLI snippets using variables, the real power behind Config Engine comes from the knowledge of your network. At a high level this allows us:
1. Declare logical variables as part of the topology. E.g add an IP address to a node/link.
2. Easily template network links and nodes. Variables are pre-processed to allow templates to simply use local and far-end variables.
3. Send commands to a router (we know the kind of router). This includes knowledge of how to log in and even enable configuration transactions when required. This is covered in the [next section](/guide/config-engine-tx)

The Config Engine uses Golang's Text Templates as the templating language. We'll cover the basics with many examples, but there are also great external resources covering the [Go template syntax](https://learn.hashicorp.com/tutorials/nomad/go-template-syntax).

## Variables

Variables provide custom input to the templates, and they are specified directly in your topology file. They can be placed under Nodes or Links.

Below you see variables defined for a node. It is located under the node's `config.vars` branch.

```yaml{4-8}
topology:
    nodes:
        pe_1:
            config:
                vars:
                    key: value
                    key_2: value_2
                    key_n: value_n
```

Similar to the rest of the topology file, defaults can be provided for variables on the `kind` of the node, or under `defaults`

::: details Values are inherited from `kinds` and `defaults`
```yaml
topology:
  kinds:
    vr-sros:
      image: ghcr.io/nokia/srlinux
      config:
          key: value
  nodes:
    pe_1:
      kind: vr-sros
    pe_2:
      kind: vr-sros
```
:::

## Variables on links

Links can also have variables. These are specified in the topology file next to the link endpoints.
Generally link variables are specified in pairs, where each entry is applicable to the endpoint at the same position.

In the example below, `1/1/c1/1` applies to endpoint `pe1:eth1` and `1/1/c2/1` applies to endpoint `pe2:eth2`

```yaml
topology:
    links:
      - endpoints: ["pe1:eth1", "pe2:eth2"]
        vars:
            port: ['1/1/c1/1', '1/1/c2/1']
            instance_id: 1
```

In some cases a value might be applicable to both endpoint, and then you only need to specify it as a single value (e.g. `instance_id` above).

Template files typically target nodes and not links, so link variables are added to each node as a list named `clab_links`.

## Node Role

The role of the node points to the template that needs to be deployed on that node. Examples of roles can be leaves, spines or PEs, or CEs. If you have no specific roles in your topology, the bare minimum might be that you have different templates for different types (or kinds) of nodes.


::: tip
The role is defined in the `clab_role` variable. It is optional, and by default this will be the node's `kind`.
:::

## Template files

Template files are located in the supplied [`--template-paths`](/reference/config)

The naming convention is shown below

| `<template-name>`__`<role>`.tmpl |
| -------------------------------- |

The template names are specific on the input using the `--template-names` / `-l` flags. The config engine supports deploying a list of templates.



## Magic variables

We've mentioned that link variables are included with the node variables, but there are also a lot of pre-processing of you variables. Typically when a a variable is used as input (or even generated as output) of this pre-processing step, it starts with `clab_`


::: tip
The [Config Engine UI](/guide/config-engine-ui) is a great tool to visualize these variables and will give you an output similar to what you see below
:::

Let's start with a summary of all known magic variables, or jump straight to the [examples](#magic-variable-examples)

The following variables indicate the basic structure and are mostly assembled directly from the topology file

| Node Variables         | Description                                                                                                                                      |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `clab_node`            | The node name. name.                                                                                                                             |
| `clab_kind`            | The node kind.                                                                                                                                   |
| `clab_management_ipv*` | When deployed you can get the management IPs. In `labctl` this is resolved from the node's long name. `containerlab` places this in `/etc/hosts` |
| `clab_role`            | The role that will be used to determine the template file. If not specified in the `vars:` it will default to the node's kind.                   |
| `clab_links`           | Populated with all the links connected to this node. The structure of the links can be seen below                                                |
| `clab_nodes`           | Populated with a dictionary of all the nodes in the topology                                                                                     |

On the nodes you can use the following input.

| variable         | Source    | Description                                                                      |
| ---------------- | --------- | -------------------------------------------------------------------------------- |
| `clab_system_ip` | ✨optional | The loopback address of the system. If present it will generate `clab_link_ip's` |


Each link in the  `clab_links` array will have the following structure:

| variable         | Source    | Description                                                                                |
| ---------------- | --------- | ------------------------------------------------------------------------------------------ |
| `clab_link_ip`   | ✨optional | The link IP address. Can be a subnet or an array of two addresses.                         |
| `clab_link_num`  | ✨optional | The link number, used if you have multiple links for the Link name and Link IP generation. |
| `clab_link_name` | ✨         | The link name. If not specified it will be in the format `to_<far-end-node>`               |
| `clab_far`       | ✨         | A dictionary with all the variables you find on a link, but for the far-end node           |
| key 1..n         | Topo      | All the variables defined in the topo file                                                 |


::: details Understanding auto-generated Link IPs

Once you've defined a loopback address on each node `clab_system_ip`, Config Engine can auto-generate links IPs in `clab_link_ip`. The convention uses follows the following logic. It might be opinionated, but it is quicket than defining them statically :wink: (which you are free to do - see example #4 below)

The last octet of the loopback address is taken from the nodes on either side of the link. Let's call them `<n1>` & `<n1>`. We ensure that `<n1>` is less than `<n2>`.

The link IP is constructed by using these octets in the link IP

| 10.`<n1>`.`<n2>`.`<side>`/31 |
| ---------------------------- |

where `<side>` indicates which node the link terminates on. The first IP in the link subnet will point to the node where we got n1 from, the second IP in this subnet will point to the node we go n2 from.
Usually this will be 0 or 1, where 0 will be used on the side of `<n1>` and 1 for `<n2>`.

When you have have mulitple links in a topology, we should not have duplicates IPs, so we use `clab_link_num` to determin unique IPs. by adding `2 x <clab_link_num>` to `<side> `. This is shown in example #4 below

:::

## Magic variable examples

<script setup>
    import MagicVarsCe from '../.vitepress/components/magic_vars_ce.vue';
</script>

<magic-vars-ce>

<template #e1>

In the most basic case, we can specify only a System IP as `clab_system_ip`. Config Engine generates three variables `clab_link_ip` and `clab_link_name` on each link.

```yaml
topology:
  nodes:
    pe1:
      config:
        vars:
          clab_system_ip: 10.0.0.1/32
    pe2:
      config:
        vars:
          clab_system_ip: 10.0.0.2/32

  links:
    - endpoints: ["pe1:eth1", "pe2:eth1"]
```

</template>

<template #e2>

You can easily specify your own subnet on a link - `clab_link_ip` and each side of the link will get a value assigned.

```yaml
topology:
  nodes:
    pe1:
      config:
        vars:
          clab_system_ip: 10.0.0.1/32
    pe2:
      config:
        vars:
          clab_system_ip: 10.0.0.2/32

  links:
    - endpoints: ["pe1:eth1", "pe2:eth1"]
      vars:
        clab_link_ip: 192.168.0.1/31
```

</template>

<template #e3>

You can have multiple links between two nodes. Adding a number to `clab_link_num` will ensure that the auto-generated `clab_link_name` and `clab_link_ip` variables are unique.

```yaml
topology:
  nodes:
    pe1:
      config:
        vars:
          clab_system_ip: 10.0.0.1/32
    pe2:
      config:
        vars:
          clab_system_ip: 10.0.0.2/32

  links:
    - endpoints: ["pe1:eth1", "pe2:eth1"]
      vars:
        clab_link_ip: 192.168.0.1/31
    - endpoints: ["pe1:eth2", "pe2:eth2"]
      vars:
        clab_link_num: 1
    - endpoints: ["pe1:eth3", "pe2:eth3"]
      vars:
        clab_link_num: 2
```

</template>

<template #e4>

Link variables should be defined in pairs (one for each end of the link). If both ends of the link require the same variable, you can specify a single value And this will be used on both sides. (note the how `port` in the yaml below is processed into the local & far ends of the link.

Magic variables can be defined by the user, which will override any auto-generation magic. See it in action below with `clab_link_ip` on link 1 and `clab_link_name` on link 2

```yaml
  nodes:
    pe1:
      config:
        vars:
          clab_system_ip: 10.0.0.1/32
    pe2:
      config:
        vars:
          clab_system_ip: 10.0.0.2/32

  links:
    - endpoints: ["pe1:eth1", "pe2:eth1"]
      vars:
        port: '1/1/c1/1'
        clab_link_ip: 192.168.0.101/30
    - endpoints: ["pe1:eth2", "pe2:eth2"]
      vars:
        port: ['1/1/c2/1', '1/1/c2/1']
        clab_link_name: ['to_pe2_and_beyond', 'toPE1']
```

</template>

</magic-vars-ce>




