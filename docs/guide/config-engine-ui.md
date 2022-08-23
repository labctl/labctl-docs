

# Config Engine UI

<!--@include:  ../.vitepress/snippet/start-ui.md -->

## Topology view

The topology view should show up immediately.

## Labels

You can create layers of labels.

## Inspect Variables

The Config Engine UI can show you the magic variables that will be used to render a template.
From here you can test these variables on templates.

Consider the following topo file extract

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

<script setup>
    import MagicVars from '../.vitepress/components/magic_vars.vue';
</script>

<magic-vars />
