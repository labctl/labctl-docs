<template>
  <p>
    The Config Engine will use the following variables to render the template
    for R4.
    <a @click="combined = !combined">{{ combined ? "Split" : "Combine" }}</a>
  </p>
  <div v-if="combined">
    <json-viewer
      style="margin-left: 20px"
      :value="v_all"
      copyable
      :expand-depth="2"
      theme="dark"
    />
  </div>
  <div v-else>
    <p>The topo file contained the following variables</p>
    <json-viewer
      style="margin-left: 20px"
      :value="v_topov"
      copyable
      :expand-depth="4"
      theme="dark"
    />
    <p>Variables added by the Config Engine</p>
    <json-viewer
      style="margin-left: 20px"
      :value="v_ce"
      copyable
      :expand-depth="2"
      theme="dark"
    />
  </div>
</template>

<script setup lang="ts">
//import yaml from "js-yaml";
import { ref } from "vue";
const combined = ref(true);

const v_topo = {
  nodes: {
    R4: {
      kind: "vr-sros",
      config: { vars: {} },
    },
  },
};

const v_topov = {
  clab_system_ip: "192.0.2.4/32",
  ipv4_sid_label: 14004,
  isis_iid: [1],
};

v_topo.nodes.R4.config.vars = v_topov;

const v_ce = {
  clab_kind: "vr-sros",
  clab_management_ipv4: "",
  clab_management_ipv6: "",
  clab_node: "R4",
  clab_role: "vr-sros",
  clab_links: [
    {
      clab_far: {
        clab_link_ip: "192.168.1.9/30",
        clab_link_name: "to_R4",
        clab_node: "CE4",
        is_ce: true,
        port: "1/1/c1/1",
      },
      clab_link_ip: "192.168.1.10/30",
      clab_link_name: "to_CE4",
      is_ce: true,
      port: "1/1/c3/1",
    },
    {
      clab_far: {
        clab_link_ip: "192.168.0.21/30",
        clab_link_name: "to_R4",
        clab_node: "R5",
        isis_iid: 1,
        port: "1/1/c1/1",
      },
      clab_link_ip: "192.168.0.22/30",
      clab_link_name: "to_R5",
      isis_iid: 1,
      port: "1/1/c2/1",
    },
    {
      clab_far: {
        clab_link_ip: "192.168.0.10/30",
        clab_link_name: "to_R4",
        clab_node: "R1",
        isis_iid: 1,
        port: "1/1/c2/1",
      },
      clab_link_ip: "192.168.0.9/30",
      clab_link_name: "to_R1",
      isis_iid: 1,
      port: "1/1/c1/1",
    },
  ],
  clab_nodes: {
    CE1: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.2/30",
            clab_link_name: "to_CE1",
            clab_node: "R1",
            is_ce: true,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.1.1/30",
          clab_link_name: "to_R1",
          is_ce: true,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "CE1",
      clab_role: "ce",
      clab_system_ip: "192.0.31.1/32",
      isis_iid: [1],
      network: "172.31.1.0/24",
    },
    CE3: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.6/30",
            clab_link_name: "to_CE3",
            clab_node: "R3",
            is_ce: true,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.1.5/30",
          clab_link_name: "to_R3",
          is_ce: true,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "CE3",
      clab_role: "ce",
      clab_system_ip: "192.0.31.3/32",
      isis_iid: [1],
      network: "172.31.3.0/24",
    },
    CE4: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.10/30",
            clab_link_name: "to_CE4",
            clab_node: "R4",
            is_ce: true,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.1.9/30",
          clab_link_name: "to_R4",
          is_ce: true,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "CE4",
      clab_role: "ce",
      clab_system_ip: "192.0.31.4/32",
      isis_iid: [1],
      network: "172.31.4.0/24",
    },
    CE6: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.18/30",
            clab_link_name: "to_CE6",
            clab_node: "R6",
            is_ce: true,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.1.17/30",
          clab_link_name: "to_R6",
          is_ce: true,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "CE6",
      clab_role: "ce",
      clab_system_ip: "192.0.31.6/32",
      isis_iid: [1],
      network: "172.31.6.0/24",
    },
    R1: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.0.2/30",
            clab_link_name: "to_R1",
            clab_node: "R2",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.1/30",
          clab_link_name: "to_R2",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.9/30",
            clab_link_name: "to_R1",
            clab_node: "R4",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.10/30",
          clab_link_name: "to_R4",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.1.1/30",
            clab_link_name: "to_R1",
            clab_node: "CE1",
            is_ce: true,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.1.2/30",
          clab_link_name: "to_CE1",
          is_ce: true,
          port: "1/1/c3/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R1",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.1/32",
      ipv4_sid_label: 14001,
      isis_iid: [1],
      ssh: "172.20.20.7:22",
    },
    R2: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.0.14/30",
            clab_link_name: "to_R2",
            clab_node: "R5",
            isis_iid: 1,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.0.13/30",
          clab_link_name: "to_R5",
          isis_iid: 1,
          port: "1/1/c3/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.1/30",
            clab_link_name: "to_R2",
            clab_node: "R1",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.2/30",
          clab_link_name: "to_R1",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.6/30",
            clab_link_name: "to_R2",
            clab_node: "R3",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.5/30",
          clab_link_name: "to_R3",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R2",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.2/32",
      ipv4_sid_label: 14002,
      isis_iid: [1],
    },
    R3: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.5/30",
            clab_link_name: "to_R3",
            clab_node: "CE3",
            is_ce: true,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.1.6/30",
          clab_link_name: "to_CE3",
          is_ce: true,
          port: "1/1/c3/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.5/30",
            clab_link_name: "to_R3",
            clab_node: "R2",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.6/30",
          clab_link_name: "to_R2",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.18/30",
            clab_link_name: "to_R3",
            clab_node: "R6",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.17/30",
          clab_link_name: "to_R6",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R3",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.3/32",
      ipv4_sid_label: 14003,
      isis_iid: [1],
    },
    R4: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.9/30",
            clab_link_name: "to_R4",
            clab_node: "CE4",
            is_ce: true,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.1.10/30",
          clab_link_name: "to_CE4",
          is_ce: true,
          port: "1/1/c3/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.21/30",
            clab_link_name: "to_R4",
            clab_node: "R5",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.22/30",
          clab_link_name: "to_R5",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.10/30",
            clab_link_name: "to_R4",
            clab_node: "R1",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.9/30",
          clab_link_name: "to_R1",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R4",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.4/32",
      ipv4_sid_label: 14004,
      isis_iid: [1],
    },
    R5: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.0.25/30",
            clab_link_name: "to_R5",
            clab_node: "R6",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.26/30",
          clab_link_name: "to_R6",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.13/30",
            clab_link_name: "to_R5",
            clab_node: "R2",
            isis_iid: 1,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.0.14/30",
          clab_link_name: "to_R2",
          isis_iid: 1,
          port: "1/1/c3/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.29/30",
            clab_link_name: "to_R5",
            clab_node: "RR",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.30/30",
          clab_link_name: "to_RR",
          isis_iid: 1,
          port: "1/1/c4/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.22/30",
            clab_link_name: "to_R5",
            clab_node: "R4",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.21/30",
          clab_link_name: "to_R4",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R5",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.5/32",
      ipv4_sid_label: 14005,
      isis_iid: [1],
    },
    R6: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.0.26/30",
            clab_link_name: "to_R6",
            clab_node: "R5",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.25/30",
          clab_link_name: "to_R5",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.1.17/30",
            clab_link_name: "to_R6",
            clab_node: "CE6",
            is_ce: true,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.1.18/30",
          clab_link_name: "to_CE6",
          is_ce: true,
          port: "1/1/c3/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.17/30",
            clab_link_name: "to_R6",
            clab_node: "R3",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.18/30",
          clab_link_name: "to_R3",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.33/30",
            clab_link_name: "to_R6",
            clab_node: "RR",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.34/30",
          clab_link_name: "to_RR",
          isis_iid: 1,
          port: "1/1/c4/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R6",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.6/32",
      ipv4_sid_label: 14006,
      isis_iid: [1],
    },
    RR: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.0.30/30",
            clab_link_name: "to_RR",
            clab_node: "R5",
            isis_iid: 1,
            port: "1/1/c4/1",
          },
          clab_link_ip: "192.168.0.29/30",
          clab_link_name: "to_R5",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.34/30",
            clab_link_name: "to_RR",
            clab_node: "R6",
            isis_iid: 1,
            port: "1/1/c4/1",
          },
          clab_link_ip: "192.168.0.33/30",
          clab_link_name: "to_R6",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "RR",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.10/32",
      ipv4_sid_label: 14010,
      isis_iid: [1],
    },
  },
};

const v_all = {
  clab_kind: "vr-sros",
  clab_management_ipv4: "",
  clab_management_ipv6: "",
  clab_node: "R4",
  clab_role: "vr-sros",
  clab_system_ip: "192.0.2.4/32",
  ipv4_sid_label: 14004,
  isis_iid: [1],
  clab_links: [
    {
      clab_far: {
        clab_link_ip: "192.168.1.9/30",
        clab_link_name: "to_R4",
        clab_node: "CE4",
        is_ce: true,
        port: "1/1/c1/1",
      },
      clab_link_ip: "192.168.1.10/30",
      clab_link_name: "to_CE4",
      is_ce: true,
      port: "1/1/c3/1",
    },
    {
      clab_far: {
        clab_link_ip: "192.168.0.21/30",
        clab_link_name: "to_R4",
        clab_node: "R5",
        isis_iid: 1,
        port: "1/1/c1/1",
      },
      clab_link_ip: "192.168.0.22/30",
      clab_link_name: "to_R5",
      isis_iid: 1,
      port: "1/1/c2/1",
    },
    {
      clab_far: {
        clab_link_ip: "192.168.0.10/30",
        clab_link_name: "to_R4",
        clab_node: "R1",
        isis_iid: 1,
        port: "1/1/c2/1",
      },
      clab_link_ip: "192.168.0.9/30",
      clab_link_name: "to_R1",
      isis_iid: 1,
      port: "1/1/c1/1",
    },
  ],
  clab_nodes: {
    CE1: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.2/30",
            clab_link_name: "to_CE1",
            clab_node: "R1",
            is_ce: true,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.1.1/30",
          clab_link_name: "to_R1",
          is_ce: true,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "CE1",
      clab_role: "ce",
      clab_system_ip: "192.0.31.1/32",
      isis_iid: [1],
      network: "172.31.1.0/24",
    },
    CE3: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.6/30",
            clab_link_name: "to_CE3",
            clab_node: "R3",
            is_ce: true,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.1.5/30",
          clab_link_name: "to_R3",
          is_ce: true,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "CE3",
      clab_role: "ce",
      clab_system_ip: "192.0.31.3/32",
      isis_iid: [1],
      network: "172.31.3.0/24",
    },
    CE4: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.10/30",
            clab_link_name: "to_CE4",
            clab_node: "R4",
            is_ce: true,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.1.9/30",
          clab_link_name: "to_R4",
          is_ce: true,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "CE4",
      clab_role: "ce",
      clab_system_ip: "192.0.31.4/32",
      isis_iid: [1],
      network: "172.31.4.0/24",
    },
    CE6: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.18/30",
            clab_link_name: "to_CE6",
            clab_node: "R6",
            is_ce: true,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.1.17/30",
          clab_link_name: "to_R6",
          is_ce: true,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "CE6",
      clab_role: "ce",
      clab_system_ip: "192.0.31.6/32",
      isis_iid: [1],
      network: "172.31.6.0/24",
    },
    R1: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.0.2/30",
            clab_link_name: "to_R1",
            clab_node: "R2",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.1/30",
          clab_link_name: "to_R2",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.9/30",
            clab_link_name: "to_R1",
            clab_node: "R4",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.10/30",
          clab_link_name: "to_R4",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.1.1/30",
            clab_link_name: "to_R1",
            clab_node: "CE1",
            is_ce: true,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.1.2/30",
          clab_link_name: "to_CE1",
          is_ce: true,
          port: "1/1/c3/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R1",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.1/32",
      ipv4_sid_label: 14001,
      isis_iid: [1],
      ssh: "172.20.20.7:22",
    },
    R2: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.0.14/30",
            clab_link_name: "to_R2",
            clab_node: "R5",
            isis_iid: 1,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.0.13/30",
          clab_link_name: "to_R5",
          isis_iid: 1,
          port: "1/1/c3/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.1/30",
            clab_link_name: "to_R2",
            clab_node: "R1",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.2/30",
          clab_link_name: "to_R1",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.6/30",
            clab_link_name: "to_R2",
            clab_node: "R3",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.5/30",
          clab_link_name: "to_R3",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R2",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.2/32",
      ipv4_sid_label: 14002,
      isis_iid: [1],
    },
    R3: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.5/30",
            clab_link_name: "to_R3",
            clab_node: "CE3",
            is_ce: true,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.1.6/30",
          clab_link_name: "to_CE3",
          is_ce: true,
          port: "1/1/c3/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.5/30",
            clab_link_name: "to_R3",
            clab_node: "R2",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.6/30",
          clab_link_name: "to_R2",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.18/30",
            clab_link_name: "to_R3",
            clab_node: "R6",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.17/30",
          clab_link_name: "to_R6",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R3",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.3/32",
      ipv4_sid_label: 14003,
      isis_iid: [1],
    },
    R4: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.1.9/30",
            clab_link_name: "to_R4",
            clab_node: "CE4",
            is_ce: true,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.1.10/30",
          clab_link_name: "to_CE4",
          is_ce: true,
          port: "1/1/c3/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.21/30",
            clab_link_name: "to_R4",
            clab_node: "R5",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.22/30",
          clab_link_name: "to_R5",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.10/30",
            clab_link_name: "to_R4",
            clab_node: "R1",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.9/30",
          clab_link_name: "to_R1",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R4",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.4/32",
      ipv4_sid_label: 14004,
      isis_iid: [1],
    },
    R5: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.0.25/30",
            clab_link_name: "to_R5",
            clab_node: "R6",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.26/30",
          clab_link_name: "to_R6",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.13/30",
            clab_link_name: "to_R5",
            clab_node: "R2",
            isis_iid: 1,
            port: "1/1/c3/1",
          },
          clab_link_ip: "192.168.0.14/30",
          clab_link_name: "to_R2",
          isis_iid: 1,
          port: "1/1/c3/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.29/30",
            clab_link_name: "to_R5",
            clab_node: "RR",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.30/30",
          clab_link_name: "to_RR",
          isis_iid: 1,
          port: "1/1/c4/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.22/30",
            clab_link_name: "to_R5",
            clab_node: "R4",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.21/30",
          clab_link_name: "to_R4",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R5",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.5/32",
      ipv4_sid_label: 14005,
      isis_iid: [1],
    },
    R6: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.0.26/30",
            clab_link_name: "to_R6",
            clab_node: "R5",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.25/30",
          clab_link_name: "to_R5",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.1.17/30",
            clab_link_name: "to_R6",
            clab_node: "CE6",
            is_ce: true,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.1.18/30",
          clab_link_name: "to_CE6",
          is_ce: true,
          port: "1/1/c3/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.17/30",
            clab_link_name: "to_R6",
            clab_node: "R3",
            isis_iid: 1,
            port: "1/1/c1/1",
          },
          clab_link_ip: "192.168.0.18/30",
          clab_link_name: "to_R3",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.33/30",
            clab_link_name: "to_R6",
            clab_node: "RR",
            isis_iid: 1,
            port: "1/1/c2/1",
          },
          clab_link_ip: "192.168.0.34/30",
          clab_link_name: "to_RR",
          isis_iid: 1,
          port: "1/1/c4/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "R6",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.6/32",
      ipv4_sid_label: 14006,
      isis_iid: [1],
    },
    RR: {
      clab_kind: "vr-sros",
      clab_links: [
        {
          clab_far: {
            clab_link_ip: "192.168.0.30/30",
            clab_link_name: "to_RR",
            clab_node: "R5",
            isis_iid: 1,
            port: "1/1/c4/1",
          },
          clab_link_ip: "192.168.0.29/30",
          clab_link_name: "to_R5",
          isis_iid: 1,
          port: "1/1/c1/1",
        },
        {
          clab_far: {
            clab_link_ip: "192.168.0.34/30",
            clab_link_name: "to_RR",
            clab_node: "R6",
            isis_iid: 1,
            port: "1/1/c4/1",
          },
          clab_link_ip: "192.168.0.33/30",
          clab_link_name: "to_R6",
          isis_iid: 1,
          port: "1/1/c2/1",
        },
      ],
      clab_management_ipv4: "",
      clab_management_ipv6: "",
      clab_node: "RR",
      clab_role: "vr-sros",
      clab_system_ip: "192.0.2.10/32",
      ipv4_sid_label: 14010,
      isis_iid: [1],
    },
  },
};
</script>

<style>
.jv-container .jv-code {
  padding: 10px 10px;
}
.jv-container .jv-code.open {
  padding-bottom: 20px;
}
</style>
