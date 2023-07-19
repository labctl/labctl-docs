# Getting Started

## Installation

Labctl is distributed as a single executable for Linux based distros

<div class="getting-started-command">

```bash
bash -c "$(curl -sL https://labctl.net/get.sh)"
```

</div>

## Run a console command

labctl includes console commands, al list of these commands can be seen when you run the command without parameters, or using the  `--help` flag with any of the sub-commands. The command reference includes details on each command

::: details labctl --help

```bash
Usage: labctl <command>

Control your network lab.

Flags:
  -h, --help    Show context-sensitive help.

Global Flags
  -d, --debug=INT          Enable debug mode.
      --settings=STRING    Settings yaml file.

Commands:
  color                  Add some color to any Linux command (i.e. ssh).
  config commit          Commit configuration on the node.
  config compare         Compare rendered templates to the node's config.
  config send            Send commands to the node (i.e. show)
  config template        Show rendered templates.
  config vars            Show variable inputs.
  serve                  Serve the web UI.
  install-completions    install shell completions
  version                show the labctl version

Run "labctl <command> --help" for more information on a command.
```

:::

<!--@include:  ../.vitepress/snippet/start-ui.md -->

The [labctl serve reference](/reference/serve) contains detail on available flags for the web server.
