# Examples

There are some exmaples avialable in the Containerlab repo [overview here](./clab) or a specific Labctl-example repository on Github

## Getting the Labctl-examples

Clone the [labctl-examples](https://github.com/labctl/labctl-examples) github repo

It is always advised to first Fork the github repo under your own name and then clone your fork. This will allow you to save your changes and even contribute back to the examples.

- Fork it [here](https://github.com/labctl/labctl-examples/fork)

- Clone your fork (from your Github account)

    <div class="highlight highlight-source-shell notranslate position-relative overflow-auto" dir="auto"><pre>git clone git@github.com:<span style="background-color: #550;">account</span>/labctl-examples.git</pre></div>

## Navigating the labctl-examples repo

Each example contains a `README.md` file that gives you a brief overview of the lab, together with instructions on how to deploy the topology and start the web server.

In most cases deplying the lab is as simple as running `containerlab deploy` in the lab's directory. Contianerlab can auto-detect the topology file, as long as you have a single topology file per folder.

To start the server could be as simple as `labctl serve`, which will then use the same topology file, but most of the time you want to at least specific one or more **paths** where the server should look for templates. Add paths with the `-p` or `--paths` flag.

## Examples

- SR Linux 3 node lab - [here](https://github.com/labctl/labctl-examples/tree/main/sr-linux/srl)

- SR OS 3 node example - [here](https://github.com/labctl/labctl-examples/tree/main/sr-os/seamless-bfd)

> SR Linux does not require any licenses to deploy the lab and perform configuration

## Example Templates

You can find lab specific templates (*.tmpl) in either the shared [template folder](https://github.com/labctl/labctl-examples/tree/main/templates) or in the individual lab folders.