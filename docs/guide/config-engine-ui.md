

# Config Engine UI

<!--@include:  ../.vitepress/snippet/start-ui.md -->

## Topology view

The topology view should show up immediately.

## Labels

You can create layers of labels.

## Inspect Variables

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

## Execute Commands

You can execute "commit", "compare" and "send" commands directly from the UI - you use exactly the same syntax as from the commandline.

Config Engine related flags used on the commandline to serve the frontend

| Flag               |      |     | Description                              |
| :----------------- | ---- | --- | ---------------------------------------- |
| `--topo`           | `-t` | ✔   | the topology file                        |
| `--template-paths` | `-p` | ✔   | paths to search for templates (in order) |

Flags available from within the UI to execute config commands

| Flag              |      |     | Description              |
| :---------------- | ---- | --- | ------------------------ |
| `--template-list` | `-l` | ✔   | template names to render |
| `--filter`        | `-f` |     | nodes to include         |

### Examples

```
compare -l bgp -f R1
```

will compare the template `bgp_<role>.tmpl` ONLY to node R1


```
commit -l bgp
```

will commit the template `bgp_<role>.tmpl` to all nodes in the topology


```
send -l show-route-table -f R1,R2
```

will send the template `show-route-table_<role>.tmpl` to node R1 and R2 only


