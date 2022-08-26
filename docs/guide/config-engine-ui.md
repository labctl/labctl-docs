# Config Engine User Interface

The web user interface allows you to visualize your topology, inspect magic variables and transmit commands direclty from your favorite web browser.

<!--@include:  ../.vitepress/snippet/start-ui.md -->

## Labctl companion file

When you serve a topology, all the frontend settings, lab layout, label templates and more wil be saved in the same folder as the topology file.  The companion file  will be created automatically when required and a running server will constantly write this file if there are changes in the frontend.


| Topology filename | Companion filename |
| ----------------- | ------------------ |
| `<name>`.clab.yml | `<name>`.clab.yml  |


 ::: warning
You should not change the  companion file when the server is running, since a running server may overwrite your changes.

Always shut down the server before editing the companion file.
 :::

Today only suggested commands `options`>`commands` cannot be edited from the frontend.

## Topology view

The topology view should show up immediately.

## Labels

You can create layers of labels.

## Inspect variables

The Config Engine UI can show you the magic variables that will be used to render a template.
From here you can test these variables on templates.

<script setup>
    import MagicVars from '../.vitepress/components/magic_vars_ui.vue';
</script>

<magic-vars>

```yaml
 nodes:
  R4:
    kind: vr-sros
    config:
      vars:
        clab_system_ip: 192.0.2.4/32
        ipv4_sid_label: 14004
        isis_iid:
          - 1
```

</magic-vars>

## Execute commands

You can execute "commit", "compare" and "send" commands directly from the UI - you use exactly the same syntax as from the commandline.

Config Engine related flags used on the commandline to serve the frontend

| Flag               |      | Required | Description                              |
| :----------------- | ---- | -------- | ---------------------------------------- |
| `--topo`           | `-t` | ✔        | the topology file                        |
| `--template-paths` | `-p` | ✔        | paths to search for templates (in order) |

Flags available from within the UI to execute config commands

| Flag              |      |     | Description              |
| :---------------- | ---- | --- | ------------------------ |
| `--template-list` | `-l` | ✔   | template names to render |
| `--filter`        | `-f` |     | nodes to include         |

### Examples

```
compare -l bgp -f R1
```

will compare the template named `bgp__<role>.tmpl` ONLY to node R1


```
commit -l bgp
```

will commit the template named `bgp__<role>.tmpl` to all nodes in the topology


```
send -l show-route-table -f R1,R2
```

will send the template `show-route-table_<role>.tmpl` to node R1 and R2 only

## Suggested commands

You can add suggested commands to the frontend. They will be displayed on the Config Engine :house: home screen.

Today this is done manually in the companion lab file (it should be done while the server is NOT running!)

An exmaple of suggested commands in the labctl companion file:

```yaml
options:
    commands:
        - compare -l ports -f R1
        - commit -l delete -f R1
        - commit -l ports
        - send -l show-lldp
        - commit -l delete,ports,isis,adjsid,c7,bgp
        - send -l show-route-table
```