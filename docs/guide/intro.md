# What is Labctl?

Labctl is a collection of helper tools for network engineers, while configuring and experimenting with their own network labs.

Labctl stands on the shoulders of giants and can be used as a companion to [containerlab](https://containerlab.dev). Containerlab allows us to represent network topologies in a simple text format (Infrastructure as code). These are referred to as topology definition files, or topo files, defining network nodes & links between these nodes in an easy to understand yaml text file.

While labctl uses the containerlab topology file format (`.clab.yml`) to represent the network topology, the tools can be used with labs on EVE-NG, GNS3 or even using physical network equipment.

## Features

- Web frontend - `labctl serve`

  Visualize your network topology. Dynamically add information from the lab topology definition, variables defined in the topo file, magic variables created by the Config Engine and state of your network elements*

  Save your network layout and visualize each step of the Config Engine (variables, templates, compare & commit or arbitrary execution of show commands)

- Config Engine - `labctl config`

  Using variables defined in your lab topology you can render configuration snippets using the go template language.

  The config engine in labctl tries to be as close as possibe to the containerlab Config Engine  `containerlab config`, with some extentions to extend this to multiple topo files and non-containerlab labs.

- Single template language

  Wheter you are on a Linux terminal or in your favorite browser, Labctl ensures you only have to know a single template language

- Add some color to your CLI - `labctl color`

  Add custom color to IP addresses, protocol states or any other text you would like to visually enhance. Labctl uses your standard SSH/telnet tools, but only adds the relevant color locally.
