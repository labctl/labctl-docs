# Config Engine

## Transmit commands

Once you have rendered templates you can transmit them to the nodes via SSH. They can either be sent as plain commands, or you can use transactions if supported by your node.

These actions map to three commands:
- `config send` - Send generated text to the node. This will typically be used for show commands, no configuration session is started on the node.
- `config compare` - Start configuration priviledge level. Usually this is also the start of a transaction. Compare the results and discard any changes.
- `config commit` - Start configuration priviledge level. Execute a commit transaction.


### Template pre-processing

Generated templates are pre-processed before sending.
- Empty whitespace will be removed. This includes blank lines & leading and trailing whitespace
- If the node config supports comments, these will be removed

## Transport

Containerlab Kinds (from the topology file) will be mapped to Scrapligo's platforms, and these platforms contain the knowledge of how to authenticate to the node and how to do any required priviledge level changes for configuration etc. The labctl repo contains details about transactions.

Scrapligo platforms are available [here](https://github.com/scrapli/scrapligo/tree/main/assets/platforms)

The mapping of Kinds to platforms and other options (comment character, compare and commit commands per kind) can be found [here](https://github.com/labctl/labctl/blob/main/utils/tx/kindmap.go). Please feel free to submit PR's for any missing platforms!

## SSH settings

By default SSH uses the default username and password from containerlab and will target containerlab's long name as the SSH host and port 22. These long names names are used for DNS resolution and added to /etc/hosts when you deploy your lab. The format of the long name is shown below:

| clab-`<topo name>`-`<node name>` |
| -------------------------------- |

The prefix **clab** can be changed with `prefix` key in the topology file.

You can override the SSH settings by defining additional `vars` on the nodes.

| Variable name  | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| `ssh_host`     | The target SSH host name or IP. Defaults to the containerlab long name. |
| `ssh_port`     | The SSH port. Default 22                                                |
| `ssh_platform` | The scrapligo platform. Default s to the Kind map [more](#transport)    |
| `ssh_username` | The node's username. Defaults to the containerlab default username.     |
| `ssh_password` | The node's password. Defaults to the containerlab default password.     |

### Additional SSH settings

The SSH module will also read your SSH config file, located at `~/.ssh/config`

The example entry below applies to all hosts starting with `clab-`, sets the default username to admin and any other allowed SSH option.

```
Host clab-*
    User admin
    UserKnownHostsFile /dev/null
    StrictHostKeyChecking no
    HostkeyAlgorithms +ssh-rsa
```

#### StrictHostKeyChecking & UserKnownHostsFile

With StrictHostKeyChecking disabled, SSH will add any unknown host to the Known Hosts file, by default located at `~/.ssh/known_hosts`. If the host already exists in the Known Hosts and the host key is different, SSH will not connect to the host.

Everytime you re-deploy nodes with containerlab, the hosts keys will change and to ease operation you could set the known hosts file to `/dev/null`, so that SSH will always accept the host key.

#### HostkeyAlgorithms

Recent versions of OpenSSH removed some Hostkey Algorithms and you might have to allow these until such time as the Network Operating system supports the latest key algorithms. This is done with `HostkeyAlgorithms`

When you try to SSH to the node you should get a message similar to: <br>
`Unable to negotiate with x.x.x.x port 22: no matching host key type found. Their offer: ssh-rsa,ssh-dss`


## Target non-containerlab labs

Not all your labs might be deployed by containerlab, so when you have any other setup, you can use the ssh variables to target the correct nodes. The only thing you'll need is a valid topo file.

With `ssh_host` and `ssh_port` you can target physical nodes or even nodes deployed directly with `virsh` over one or mulitple hosts.
