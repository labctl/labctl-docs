export const e1 = [
  {
    clab_kind: "vr-sros",
    clab_management_ipv4: "",
    clab_management_ipv6: "",
    clab_node: "pe1",
    clab_role: "vr-sros",
    clab_system_ip: "10.0.0.1/32",
    clab_links: [
      {
        clab_far: {
          clab_link_ip: "1.1.2.1/31",
          clab_link_name: "to_pe1",
          clab_node: "pe2",
        },
        clab_link_ip: "1.1.2.0/31",
        clab_link_name: "to_pe2",
      },
    ],
    clab_nodes: {
      pe1: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "1.1.2.1/31",
              clab_link_name: "to_pe1",
              clab_node: "pe2",
            },
            clab_link_ip: "1.1.2.0/31",
            clab_link_name: "to_pe2",
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe1",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.1/32",
      },
      pe2: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "1.1.2.0/31",
              clab_link_name: "to_pe2",
              clab_node: "pe1",
            },
            clab_link_ip: "1.1.2.1/31",
            clab_link_name: "to_pe1",
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe2",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.2/32",
      },
    },
  },
  {
    clab_kind: "vr-sros",
    clab_management_ipv4: "",
    clab_management_ipv6: "",
    clab_node: "pe2",
    clab_role: "vr-sros",
    clab_system_ip: "10.0.0.2/32",
    clab_links: [
      {
        clab_far: {
          clab_link_ip: "1.1.2.0/31",
          clab_link_name: "to_pe2",
          clab_node: "pe1",
        },
        clab_link_ip: "1.1.2.1/31",
        clab_link_name: "to_pe1",
      },
    ],
    clab_nodes: {
      pe1: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "1.1.2.1/31",
              clab_link_name: "to_pe1",
              clab_node: "pe2",
            },
            clab_link_ip: "1.1.2.0/31",
            clab_link_name: "to_pe2",
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe1",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.1/32",
      },
      pe2: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "1.1.2.0/31",
              clab_link_name: "to_pe2",
              clab_node: "pe1",
            },
            clab_link_ip: "1.1.2.1/31",
            clab_link_name: "to_pe1",
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe2",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.2/32",
      },
    },
  },
];

export const e2 = [
  {
    clab_kind: "vr-sros",
    clab_management_ipv4: "",
    clab_management_ipv6: "",
    clab_node: "pe1",
    clab_role: "vr-sros",
    clab_system_ip: "10.0.0.1/32",
    clab_links: [
      {
        clab_far: {
          clab_link_ip: "192.168.0.0/31",
          clab_link_name: "to_pe1",
          clab_node: "pe2",
        },
        clab_link_ip: "192.168.0.1/31",
        clab_link_name: "to_pe2",
      },
    ],
    clab_nodes: {
      pe1: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "192.168.0.0/31",
              clab_link_name: "to_pe1",
              clab_node: "pe2",
            },
            clab_link_ip: "192.168.0.1/31",
            clab_link_name: "to_pe2",
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe1",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.1/32",
      },
      pe2: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "192.168.0.1/31",
              clab_link_name: "to_pe2",
              clab_node: "pe1",
            },
            clab_link_ip: "192.168.0.0/31",
            clab_link_name: "to_pe1",
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe2",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.2/32",
      },
    },
  },
  {
    clab_kind: "vr-sros",
    clab_management_ipv4: "",
    clab_management_ipv6: "",
    clab_node: "pe2",
    clab_role: "vr-sros",
    clab_system_ip: "10.0.0.2/32",
    clab_links: [
      {
        clab_far: {
          clab_link_ip: "192.168.0.1/31",
          clab_link_name: "to_pe2",
          clab_node: "pe1",
        },
        clab_link_ip: "192.168.0.0/31",
        clab_link_name: "to_pe1",
      },
    ],
    clab_nodes: {
      pe1: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "192.168.0.0/31",
              clab_link_name: "to_pe1",
              clab_node: "pe2",
            },
            clab_link_ip: "192.168.0.1/31",
            clab_link_name: "to_pe2",
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe1",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.1/32",
      },
      pe2: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "192.168.0.1/31",
              clab_link_name: "to_pe2",
              clab_node: "pe1",
            },
            clab_link_ip: "192.168.0.0/31",
            clab_link_name: "to_pe1",
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe2",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.2/32",
      },
    },
  },
];

export const e3 = [
  {
    clab_kind: "vr-sros",
    clab_management_ipv4: "",
    clab_management_ipv6: "",
    clab_node: "pe1",
    clab_role: "vr-sros",
    clab_system_ip: "10.0.0.1/32",
    clab_links: [
      {
        clab_far: {
          clab_link_ip: "1.1.2.5/31",
          clab_link_name: "to_pe1_2",
          clab_link_num: 2,
          clab_node: "pe2",
        },
        clab_link_ip: "1.1.2.4/31",
        clab_link_name: "to_pe2_2",
        clab_link_num: 2,
      },
      {
        clab_far: {
          clab_link_ip: "192.168.0.0/31",
          clab_link_name: "to_pe1",
          clab_node: "pe2",
        },
        clab_link_ip: "192.168.0.1/31",
        clab_link_name: "to_pe2",
      },
      {
        clab_far: {
          clab_link_ip: "1.1.2.3/31",
          clab_link_name: "to_pe1_1",
          clab_link_num: 1,
          clab_node: "pe2",
        },
        clab_link_ip: "1.1.2.2/31",
        clab_link_name: "to_pe2_1",
        clab_link_num: 1,
      },
    ],
    clab_nodes: {
      pe1: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "1.1.2.5/31",
              clab_link_name: "to_pe1_2",
              clab_link_num: 2,
              clab_node: "pe2",
            },
            clab_link_ip: "1.1.2.4/31",
            clab_link_name: "to_pe2_2",
            clab_link_num: 2,
          },
          {
            clab_far: {
              clab_link_ip: "192.168.0.0/31",
              clab_link_name: "to_pe1",
              clab_node: "pe2",
            },
            clab_link_ip: "192.168.0.1/31",
            clab_link_name: "to_pe2",
          },
          {
            clab_far: {
              clab_link_ip: "1.1.2.3/31",
              clab_link_name: "to_pe1_1",
              clab_link_num: 1,
              clab_node: "pe2",
            },
            clab_link_ip: "1.1.2.2/31",
            clab_link_name: "to_pe2_1",
            clab_link_num: 1,
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe1",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.1/32",
      },
      pe2: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "1.1.2.4/31",
              clab_link_name: "to_pe2_2",
              clab_link_num: 2,
              clab_node: "pe1",
            },
            clab_link_ip: "1.1.2.5/31",
            clab_link_name: "to_pe1_2",
            clab_link_num: 2,
          },
          {
            clab_far: {
              clab_link_ip: "192.168.0.1/31",
              clab_link_name: "to_pe2",
              clab_node: "pe1",
            },
            clab_link_ip: "192.168.0.0/31",
            clab_link_name: "to_pe1",
          },
          {
            clab_far: {
              clab_link_ip: "1.1.2.2/31",
              clab_link_name: "to_pe2_1",
              clab_link_num: 1,
              clab_node: "pe1",
            },
            clab_link_ip: "1.1.2.3/31",
            clab_link_name: "to_pe1_1",
            clab_link_num: 1,
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe2",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.2/32",
      },
    },
  },
  {
    clab_kind: "vr-sros",
    clab_management_ipv4: "",
    clab_management_ipv6: "",
    clab_node: "pe2",
    clab_role: "vr-sros",
    clab_system_ip: "10.0.0.2/32",
    clab_links: [
      {
        clab_far: {
          clab_link_ip: "1.1.2.4/31",
          clab_link_name: "to_pe2_2",
          clab_link_num: 2,
          clab_node: "pe1",
        },
        clab_link_ip: "1.1.2.5/31",
        clab_link_name: "to_pe1_2",
        clab_link_num: 2,
      },
      {
        clab_far: {
          clab_link_ip: "192.168.0.1/31",
          clab_link_name: "to_pe2",
          clab_node: "pe1",
        },
        clab_link_ip: "192.168.0.0/31",
        clab_link_name: "to_pe1",
      },
      {
        clab_far: {
          clab_link_ip: "1.1.2.2/31",
          clab_link_name: "to_pe2_1",
          clab_link_num: 1,
          clab_node: "pe1",
        },
        clab_link_ip: "1.1.2.3/31",
        clab_link_name: "to_pe1_1",
        clab_link_num: 1,
      },
    ],
    clab_nodes: {
      pe1: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "1.1.2.5/31",
              clab_link_name: "to_pe1_2",
              clab_link_num: 2,
              clab_node: "pe2",
            },
            clab_link_ip: "1.1.2.4/31",
            clab_link_name: "to_pe2_2",
            clab_link_num: 2,
          },
          {
            clab_far: {
              clab_link_ip: "192.168.0.0/31",
              clab_link_name: "to_pe1",
              clab_node: "pe2",
            },
            clab_link_ip: "192.168.0.1/31",
            clab_link_name: "to_pe2",
          },
          {
            clab_far: {
              clab_link_ip: "1.1.2.3/31",
              clab_link_name: "to_pe1_1",
              clab_link_num: 1,
              clab_node: "pe2",
            },
            clab_link_ip: "1.1.2.2/31",
            clab_link_name: "to_pe2_1",
            clab_link_num: 1,
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe1",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.1/32",
      },
      pe2: {
        clab_kind: "vr-sros",
        clab_links: [
          {
            clab_far: {
              clab_link_ip: "1.1.2.4/31",
              clab_link_name: "to_pe2_2",
              clab_link_num: 2,
              clab_node: "pe1",
            },
            clab_link_ip: "1.1.2.5/31",
            clab_link_name: "to_pe1_2",
            clab_link_num: 2,
          },
          {
            clab_far: {
              clab_link_ip: "192.168.0.1/31",
              clab_link_name: "to_pe2",
              clab_node: "pe1",
            },
            clab_link_ip: "192.168.0.0/31",
            clab_link_name: "to_pe1",
          },
          {
            clab_far: {
              clab_link_ip: "1.1.2.2/31",
              clab_link_name: "to_pe2_1",
              clab_link_num: 1,
              clab_node: "pe1",
            },
            clab_link_ip: "1.1.2.3/31",
            clab_link_name: "to_pe1_1",
            clab_link_num: 1,
          },
        ],
        clab_management_ipv4: "",
        clab_management_ipv6: "",
        clab_node: "pe2",
        clab_role: "vr-sros",
        clab_system_ip: "10.0.0.2/32",
      },
    },
  },
];
