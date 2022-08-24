---
layout: home

hero:
  image:
    src: /labctl-r.svg
    alt: Logo image
  text: labctl
  tagline: Take control of your lab
  actions:
    - theme: brand
      text: Getting Started
      link: /guide/getting-started
    - theme: alt
      text: Command reference
      link: /reference/config

features:
- icon: 🌐
  title: Web frontend
  details: |
    Visualize your network topology. Dynamically add information from the lab topology definition, variables defined in the topo file, magic variables created by the Config Engine (and the state of your network elements)*
- icon: "⚙️"
  title: Config Engine
  details: |
    Using variables defined in your lab topology you can render configuration snippets using the go template language. Send them to the node, or run compare/commit transactions.
- icon: "{{ }}"
  title: Single template language
  details: |
    Whether you are on a Linux terminal or in your favorite browser, Labctl ensures you only have to know a single template language
- icon: 🎨
  title: Add some color to your CLI
  details: |
    Add custom color to IP addresses, protocol states or any other text you would like to visually enhance. Labctl uses your standard SSH/telnet tools, but only adds the relevant color locally.


footer: Apache 2.0 Licensed | Copyright © 2022 Johann Kellerman
---
