## Start the web server

The Config Engine UI can be started with the [`labctl serve`](/reference/serve) command.

Once the server is started you should be able to open the suggested URLs with your browser

```
$ labctl serve -t topo.clab.yaml -p ./ --addr :8080
INFO[0000] Parsing & checking topology file: topo.clab.yaml
INFO[0000] Access the web server on http://localhost:8080 or http://10.10.56.51:8080
```