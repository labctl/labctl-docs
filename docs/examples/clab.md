# Containerlab examples

## Get the example files

The containerlab github repo includes two topologies & templates with variables

- [topo files](https://github.com/srl-labs/containerlab/tree/main/lab-examples/vr05)
- [templates](https://github.com/srl-labs/containerlab/tree/main/templates)

## Run the lab - sros4.clab.yml

1. Deploy the topology (required if you want to commit/compare/send)

   `containerlab deploy -t sros4.clab.yml`
2. Compare base config:

   `labctl config compare -p ./templates -l base -t sros4.clab.yml`
3. Deploy the base config:

   `labctl config commit -p ./templates -l base -t sros4.clab.yml`

Today the base config include Ports & ISIS.

You can also start the Web Server on this topology

```
labctl serve -p ./templates -t sros4.clab.yml
```

And now you can execute the following from the UI:
- `compare -l base`
- `commit -l base`


## vr01.clab.yml

You can perform the exact same on this topology and simply replace the topology with `vr01.clab.yml`