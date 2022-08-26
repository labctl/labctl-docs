# Labctl serve reference

<!--@include:  ../.vitepress/snippet/start-ui.md -->

## CLI commands

::: details `labctl serve --help`
```
Usage: labctl serve

Serve the web UI.

Flags:
  -h, --help                                 Show context-sensitive help.

  -t, --topo=STRING                          Topology file
  -p, --template-paths=TEMPLATE-PATHS,...    Paths to search for templates
      --addr=":8080"                         Serve on addr.

Global Flags
  -d, --debug=INT          Enable debug mode.
      --settings=STRING    Settings yaml file.
```
:::


## CLI Flags

The following flags are available for the config commands

| Flag               |      |     | Description                                   |
| :----------------- | ---- | --- | --------------------------------------------- |
| `--topo`           | `-t` | ✔   | the topology file                             |
| `--template-paths` | `-p` | ✔   | paths to search for templates (in order)      |
| `--debug`          | `-d` |     | debug count, i.e. `-d`, `-ddd` or `--debug=3` |
| `--settings`       |      |     | Settings file                                 |