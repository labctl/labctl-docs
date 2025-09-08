

## Labctl settings

### `~/.labctl.yml`

You can provide your own color settings by creating `~/.labctl.yml` and adding regex/color pairs under the colorize key

Labctl includes default settings, they are kept [here](https://github.com/labctl/labctl/blob/main/helpers/settings.yml) in case you want to propose updates, below an extract from settings.

```yaml
colorize:
  - regex: '\d+\.\d+\.\d+\.\d+(/\d+)?'
    color: magenta
  - regex: "(?i)\b(true|valid|used)\b"
    color: hiwhite,bold
  - regex: "(?i)(false|none)"
    color: hired
  - regex: shutdown
    color: yellow
  - regex: '(?i)\b(error|down)\b'
    color: red
  - regex: '(?i)(\benabled?|\bup\b)'
    color: green
  - regex: "(?i)\bdisabled?"
    color: yellow
```

The setting are displayed when you run `labctl color --test` or when you add the debug flag `labctl -d color ...`

## Command line args

### `.labctl.json`

You can specify commonly used command line arguments in a file. Command line args will be loaded in the following order:

1. A json file in the home directory - `~/.labctl.json`
2. A json file in the current directory (next to the topology) - `./.labctl.json`
3. Command line arguments

This could be especially helpful for template folders. The following config allows you to use `labctl serve` without any additional arguments.

```json
{
	"template_paths": ["../shared_templates", "./templates"],
	"addr": ":8004",
	"url": "/my_url"
}
```
