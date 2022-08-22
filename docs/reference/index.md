## Reference

```
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

Run "labctl <command> --help" for more information on a command.

labctl: error: expected one of "color",  "config",  "serve",  "install-completions"
```