# Labctl User Documentation

This repository contains the user documentation for the `labctl` utility

It is hosted at `https://labctl.net`

## Contributions

Contributions are welcome. Simply fork the repository & edit your copy. VS Code is recommended, but you can work on small changes directly in Github.

When you are happy with the changes, simply create a Pull Request (PR)!

## Overview

The documentation is written using [Markdown in VitePress](https://vitepress.vuejs.org/guide/markdown).

The three main folders correspond with the main navigation links:
- [./docs/guide](./docs/guide)
- [./docs/reference](./docs/reference)
- [./docs/examples](./docs/examples)

VitePress site settings can be found in [config.ts](./docs/.vitepress/config.ts)

As part of the Github CI/CD pipeline VitePress will compile the static site and publish it to the **gh-pages** branch, from where it is served.

## Local testing

Required: Node.js & git

1. Clone the repo (ideally your fork) & change to the folder.
2. Install all required packages
    ```bash
    npm install
    ```
3. Run a local VitePress docs server. **--port** optional
    ```bash
    npm run docs:dev
    ```
