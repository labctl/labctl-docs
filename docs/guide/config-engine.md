# Config engine

::: tip
The config engine is shared with containerlab and all your templates and even the command line flags can be used from either `labctl config` or `containerlab config`

Command line flag reference [config](/reference/config)
:::

## Overview

The Config Engine combines a powerful templating language with the knowledge of your network topology.

Templates allow us to render CLI snippets using variables, the real power behind Config Engine comes from the knowledge of your network. At a high level this allows us:
1. Declare logical variables as part of the topology. E.g add an IP address to a node/link.
2. Easily template network links and nodes. Variables are pre-processed to allow templates to simply use local and far-end variables.
3. Send commands to a router (we know the kind of router). This includes knowledge of how to log in and even enable configuration transactions when required.

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


::: important
The role is defined in the `clab_role` variable. It is optional, and by default this will be the node's `kind`.
:::

## Template files

Template files are located in the supplied [`--template-paths`](/reference/config)

The naming convention is shown below

| `<template-name>`__`<role>`.tmpl |
| -------------------------------- |

The template names are specific on the input using the `--template-names` / `-l` flags. The config engine supports deploying a list of templates.



## Magic Variables

We've mentioned that link variables are included with the node variables, but there are also a lot of pre-processing of you variables. Typically when a a variable is used as input (or even generated as output) of this pre-processing step, it starts with `clab_`


::: tip
The [Config Engine UI](/guide/config-engine-ui) is a great tool to visualize these variables and will give you an output similar to what you see below
:::

Let's start with a summary of all known magic variables, or jump straight to the [examples](#magic-variable-examples)

The following variables indicate the basic structure and are mostly assembled directly from the topology file

| Node Variables         | Description                                                                                                                    |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `clab_node`            | The node name. name.                                                                                                           |
| `clab_kind`            | The node kind.                                                                                                                 |
| `clab_management_ipv*` | When deployed you can get the management IPs. Currently only present in `containerlab` empty in `labctl`                       |
| `clab_role`            | The role that will be used to determine the template file. If not specified in the `vars:` it will default to the node's kind. |
| `clab_links`           | Populated with all the links connected to this node. The structure of the links can be seen below                              |
| `clab_nodes`           | Populated with a dictionary of all the nodes in the topology                                                                   |

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


## Magic Variable Examples

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

You can have multiple links.

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

</magic-vars-ce>




