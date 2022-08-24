---
cli: labctl
---

# labctl config reference

## CLI Commands

The CLI commands under `labctl config` allows you to interact with the [Config Engine](/guide/config-engine). It allows you to send commands to the router, render templates, or simply inspect one of the intermediate stages (variables & templates).

::: details `labctl config --help`
```
Usage: labctl config <command>

Render a template.

Flags:
  -h, --help                                 Show context-sensitive help.

  -t, --topo=STRING                          topology file
  -p, --template-paths=TEMPLATE-PATHS,...    paths to search for templates
  -l, --template-list=TEMPLATE-LIST,...      template names to render
  -f, --filter=FILTER,...                    nodes to include

Global Flags
  -d, --debug=INT          Enable debug mode.
      --settings=STRING    Settings yaml file.

Commands:
  config commit      Commit configuration on the node.
  config compare     Compare rendered templates to the node's config.
  config send        Send commands to the node (i.e. show)
  config template    Show rendered templates.
  config vars        Show variable inputs.
```
:::

The available commands include

### config vars

The `config vars` command will prepare all the  variables required for templating and display them on the console. This will not attempt to render any template

### config template

The `config template` command will render the templates and display the output on the terminal. This allows you to test your templates without sending anyting to the nodes

### config compare

The `config compare` command will render the template and send it to the node with a compare transaction. At the end of the transaction the changes will be discarded.
This allows you to see what changes the template in question will have on the node's configuration

Note: This relies on the capability of the target node to support transactions.

### config commit

The `config commit` command will render the templates and commit the configuration to the target node.

### config send

The `config send` command will render the templates and send the commands to the target node without any transactions. This allows you to do show commands on the target node.

## CLI Flags

The following flags are available for the config commands

| Flag               |      |     | Description                                   |
| :----------------- | ---- | --- | --------------------------------------------- |
| `--topo`           | `-t` | ✔   | the topology file                             |
| `--template-paths` | `-p` | ✔   | paths to search for templates (in order)      |
| `--template-list`  | `-l` | ✔   | template names to render                      |
| `--filter`         | `-f` |     | nodes to include                              |
| `--debug`          | `-d` |     | debug count, i.e. `-d`, `-ddd` or `--debug=3` |
| `--settings`       |      |     | Settings file                                 |

## Examples

```labctl config vars```

