import{d as k,r as R,o as e,c as _,b as h,e as a,t as v,f as n,u as s,F as g,g as l,s as c,w as y,a as p}from"./app.82bd6b9b.js";const u=a("p",null,"Consider the following topo file extract",-1),f=l(" The Config Engine will use the following variables to render the template for R4. "),C={key:0},D={key:1},A=a("p",null,"The topo file contained the following variables",-1),E=a("p",null,"Variables added by the Config Engine",-1),w=k({__name:"magic_vars_ui",setup(r){const i=R(!0),t={clab_system_ip:"192.0.2.4/32",ipv4_sid_label:14004,isis_iid:[1]},b={clab_kind:"vr-sros",clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R4",clab_role:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.9/30",clab_link_name:"to_R4",clab_node:"CE4",is_ce:!0,port:"1/1/c1/1"},clab_link_ip:"192.168.1.10/30",clab_link_name:"to_CE4",is_ce:!0,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.21/30",clab_link_name:"to_R4",clab_node:"R5",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.22/30",clab_link_name:"to_R5",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.10/30",clab_link_name:"to_R4",clab_node:"R1",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.9/30",clab_link_name:"to_R1",isis_iid:1,port:"1/1/c1/1"}],clab_nodes:{CE1:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.2/30",clab_link_name:"to_CE1",clab_node:"R1",is_ce:!0,port:"1/1/c3/1"},clab_link_ip:"192.168.1.1/30",clab_link_name:"to_R1",is_ce:!0,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"CE1",clab_role:"ce",clab_system_ip:"192.0.31.1/32",isis_iid:[1],network:"172.31.1.0/24"},CE3:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.6/30",clab_link_name:"to_CE3",clab_node:"R3",is_ce:!0,port:"1/1/c3/1"},clab_link_ip:"192.168.1.5/30",clab_link_name:"to_R3",is_ce:!0,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"CE3",clab_role:"ce",clab_system_ip:"192.0.31.3/32",isis_iid:[1],network:"172.31.3.0/24"},CE4:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.10/30",clab_link_name:"to_CE4",clab_node:"R4",is_ce:!0,port:"1/1/c3/1"},clab_link_ip:"192.168.1.9/30",clab_link_name:"to_R4",is_ce:!0,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"CE4",clab_role:"ce",clab_system_ip:"192.0.31.4/32",isis_iid:[1],network:"172.31.4.0/24"},CE6:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.18/30",clab_link_name:"to_CE6",clab_node:"R6",is_ce:!0,port:"1/1/c3/1"},clab_link_ip:"192.168.1.17/30",clab_link_name:"to_R6",is_ce:!0,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"CE6",clab_role:"ce",clab_system_ip:"192.0.31.6/32",isis_iid:[1],network:"172.31.6.0/24"},R1:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.0.2/30",clab_link_name:"to_R1",clab_node:"R2",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.1/30",clab_link_name:"to_R2",isis_iid:1,port:"1/1/c1/1"},{clab_far:{clab_link_ip:"192.168.0.9/30",clab_link_name:"to_R1",clab_node:"R4",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.10/30",clab_link_name:"to_R4",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.1.1/30",clab_link_name:"to_R1",clab_node:"CE1",is_ce:!0,port:"1/1/c1/1"},clab_link_ip:"192.168.1.2/30",clab_link_name:"to_CE1",is_ce:!0,port:"1/1/c3/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R1",clab_role:"vr-sros",clab_system_ip:"192.0.2.1/32",ipv4_sid_label:14001,isis_iid:[1],ssh:"172.20.20.7:22"},R2:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.0.14/30",clab_link_name:"to_R2",clab_node:"R5",isis_iid:1,port:"1/1/c3/1"},clab_link_ip:"192.168.0.13/30",clab_link_name:"to_R5",isis_iid:1,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.1/30",clab_link_name:"to_R2",clab_node:"R1",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.2/30",clab_link_name:"to_R1",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.6/30",clab_link_name:"to_R2",clab_node:"R3",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.5/30",clab_link_name:"to_R3",isis_iid:1,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R2",clab_role:"vr-sros",clab_system_ip:"192.0.2.2/32",ipv4_sid_label:14002,isis_iid:[1]},R3:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.5/30",clab_link_name:"to_R3",clab_node:"CE3",is_ce:!0,port:"1/1/c1/1"},clab_link_ip:"192.168.1.6/30",clab_link_name:"to_CE3",is_ce:!0,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.5/30",clab_link_name:"to_R3",clab_node:"R2",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.6/30",clab_link_name:"to_R2",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.18/30",clab_link_name:"to_R3",clab_node:"R6",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.17/30",clab_link_name:"to_R6",isis_iid:1,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R3",clab_role:"vr-sros",clab_system_ip:"192.0.2.3/32",ipv4_sid_label:14003,isis_iid:[1]},R4:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.9/30",clab_link_name:"to_R4",clab_node:"CE4",is_ce:!0,port:"1/1/c1/1"},clab_link_ip:"192.168.1.10/30",clab_link_name:"to_CE4",is_ce:!0,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.21/30",clab_link_name:"to_R4",clab_node:"R5",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.22/30",clab_link_name:"to_R5",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.10/30",clab_link_name:"to_R4",clab_node:"R1",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.9/30",clab_link_name:"to_R1",isis_iid:1,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R4",clab_role:"vr-sros",clab_system_ip:"192.0.2.4/32",ipv4_sid_label:14004,isis_iid:[1]},R5:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.0.25/30",clab_link_name:"to_R5",clab_node:"R6",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.26/30",clab_link_name:"to_R6",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.13/30",clab_link_name:"to_R5",clab_node:"R2",isis_iid:1,port:"1/1/c3/1"},clab_link_ip:"192.168.0.14/30",clab_link_name:"to_R2",isis_iid:1,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.29/30",clab_link_name:"to_R5",clab_node:"RR",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.30/30",clab_link_name:"to_RR",isis_iid:1,port:"1/1/c4/1"},{clab_far:{clab_link_ip:"192.168.0.22/30",clab_link_name:"to_R5",clab_node:"R4",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.21/30",clab_link_name:"to_R4",isis_iid:1,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R5",clab_role:"vr-sros",clab_system_ip:"192.0.2.5/32",ipv4_sid_label:14005,isis_iid:[1]},R6:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.0.26/30",clab_link_name:"to_R6",clab_node:"R5",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.25/30",clab_link_name:"to_R5",isis_iid:1,port:"1/1/c1/1"},{clab_far:{clab_link_ip:"192.168.1.17/30",clab_link_name:"to_R6",clab_node:"CE6",is_ce:!0,port:"1/1/c1/1"},clab_link_ip:"192.168.1.18/30",clab_link_name:"to_CE6",is_ce:!0,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.17/30",clab_link_name:"to_R6",clab_node:"R3",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.18/30",clab_link_name:"to_R3",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.33/30",clab_link_name:"to_R6",clab_node:"RR",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.34/30",clab_link_name:"to_RR",isis_iid:1,port:"1/1/c4/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R6",clab_role:"vr-sros",clab_system_ip:"192.0.2.6/32",ipv4_sid_label:14006,isis_iid:[1]},RR:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.0.30/30",clab_link_name:"to_RR",clab_node:"R5",isis_iid:1,port:"1/1/c4/1"},clab_link_ip:"192.168.0.29/30",clab_link_name:"to_R5",isis_iid:1,port:"1/1/c1/1"},{clab_far:{clab_link_ip:"192.168.0.34/30",clab_link_name:"to_RR",clab_node:"R6",isis_iid:1,port:"1/1/c4/1"},clab_link_ip:"192.168.0.33/30",clab_link_name:"to_R6",isis_iid:1,port:"1/1/c2/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"RR",clab_role:"vr-sros",clab_system_ip:"192.0.2.10/32",ipv4_sid_label:14010,isis_iid:[1]}}},d={clab_kind:"vr-sros",clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R4",clab_role:"vr-sros",clab_system_ip:"192.0.2.4/32",ipv4_sid_label:14004,isis_iid:[1],clab_links:[{clab_far:{clab_link_ip:"192.168.1.9/30",clab_link_name:"to_R4",clab_node:"CE4",is_ce:!0,port:"1/1/c1/1"},clab_link_ip:"192.168.1.10/30",clab_link_name:"to_CE4",is_ce:!0,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.21/30",clab_link_name:"to_R4",clab_node:"R5",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.22/30",clab_link_name:"to_R5",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.10/30",clab_link_name:"to_R4",clab_node:"R1",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.9/30",clab_link_name:"to_R1",isis_iid:1,port:"1/1/c1/1"}],clab_nodes:{CE1:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.2/30",clab_link_name:"to_CE1",clab_node:"R1",is_ce:!0,port:"1/1/c3/1"},clab_link_ip:"192.168.1.1/30",clab_link_name:"to_R1",is_ce:!0,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"CE1",clab_role:"ce",clab_system_ip:"192.0.31.1/32",isis_iid:[1],network:"172.31.1.0/24"},CE3:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.6/30",clab_link_name:"to_CE3",clab_node:"R3",is_ce:!0,port:"1/1/c3/1"},clab_link_ip:"192.168.1.5/30",clab_link_name:"to_R3",is_ce:!0,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"CE3",clab_role:"ce",clab_system_ip:"192.0.31.3/32",isis_iid:[1],network:"172.31.3.0/24"},CE4:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.10/30",clab_link_name:"to_CE4",clab_node:"R4",is_ce:!0,port:"1/1/c3/1"},clab_link_ip:"192.168.1.9/30",clab_link_name:"to_R4",is_ce:!0,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"CE4",clab_role:"ce",clab_system_ip:"192.0.31.4/32",isis_iid:[1],network:"172.31.4.0/24"},CE6:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.18/30",clab_link_name:"to_CE6",clab_node:"R6",is_ce:!0,port:"1/1/c3/1"},clab_link_ip:"192.168.1.17/30",clab_link_name:"to_R6",is_ce:!0,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"CE6",clab_role:"ce",clab_system_ip:"192.0.31.6/32",isis_iid:[1],network:"172.31.6.0/24"},R1:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.0.2/30",clab_link_name:"to_R1",clab_node:"R2",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.1/30",clab_link_name:"to_R2",isis_iid:1,port:"1/1/c1/1"},{clab_far:{clab_link_ip:"192.168.0.9/30",clab_link_name:"to_R1",clab_node:"R4",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.10/30",clab_link_name:"to_R4",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.1.1/30",clab_link_name:"to_R1",clab_node:"CE1",is_ce:!0,port:"1/1/c1/1"},clab_link_ip:"192.168.1.2/30",clab_link_name:"to_CE1",is_ce:!0,port:"1/1/c3/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R1",clab_role:"vr-sros",clab_system_ip:"192.0.2.1/32",ipv4_sid_label:14001,isis_iid:[1],ssh:"172.20.20.7:22"},R2:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.0.14/30",clab_link_name:"to_R2",clab_node:"R5",isis_iid:1,port:"1/1/c3/1"},clab_link_ip:"192.168.0.13/30",clab_link_name:"to_R5",isis_iid:1,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.1/30",clab_link_name:"to_R2",clab_node:"R1",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.2/30",clab_link_name:"to_R1",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.6/30",clab_link_name:"to_R2",clab_node:"R3",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.5/30",clab_link_name:"to_R3",isis_iid:1,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R2",clab_role:"vr-sros",clab_system_ip:"192.0.2.2/32",ipv4_sid_label:14002,isis_iid:[1]},R3:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.5/30",clab_link_name:"to_R3",clab_node:"CE3",is_ce:!0,port:"1/1/c1/1"},clab_link_ip:"192.168.1.6/30",clab_link_name:"to_CE3",is_ce:!0,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.5/30",clab_link_name:"to_R3",clab_node:"R2",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.6/30",clab_link_name:"to_R2",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.18/30",clab_link_name:"to_R3",clab_node:"R6",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.17/30",clab_link_name:"to_R6",isis_iid:1,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R3",clab_role:"vr-sros",clab_system_ip:"192.0.2.3/32",ipv4_sid_label:14003,isis_iid:[1]},R4:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.1.9/30",clab_link_name:"to_R4",clab_node:"CE4",is_ce:!0,port:"1/1/c1/1"},clab_link_ip:"192.168.1.10/30",clab_link_name:"to_CE4",is_ce:!0,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.21/30",clab_link_name:"to_R4",clab_node:"R5",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.22/30",clab_link_name:"to_R5",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.10/30",clab_link_name:"to_R4",clab_node:"R1",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.9/30",clab_link_name:"to_R1",isis_iid:1,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R4",clab_role:"vr-sros",clab_system_ip:"192.0.2.4/32",ipv4_sid_label:14004,isis_iid:[1]},R5:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.0.25/30",clab_link_name:"to_R5",clab_node:"R6",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.26/30",clab_link_name:"to_R6",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.13/30",clab_link_name:"to_R5",clab_node:"R2",isis_iid:1,port:"1/1/c3/1"},clab_link_ip:"192.168.0.14/30",clab_link_name:"to_R2",isis_iid:1,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.29/30",clab_link_name:"to_R5",clab_node:"RR",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.30/30",clab_link_name:"to_RR",isis_iid:1,port:"1/1/c4/1"},{clab_far:{clab_link_ip:"192.168.0.22/30",clab_link_name:"to_R5",clab_node:"R4",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.21/30",clab_link_name:"to_R4",isis_iid:1,port:"1/1/c1/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R5",clab_role:"vr-sros",clab_system_ip:"192.0.2.5/32",ipv4_sid_label:14005,isis_iid:[1]},R6:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.0.26/30",clab_link_name:"to_R6",clab_node:"R5",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.25/30",clab_link_name:"to_R5",isis_iid:1,port:"1/1/c1/1"},{clab_far:{clab_link_ip:"192.168.1.17/30",clab_link_name:"to_R6",clab_node:"CE6",is_ce:!0,port:"1/1/c1/1"},clab_link_ip:"192.168.1.18/30",clab_link_name:"to_CE6",is_ce:!0,port:"1/1/c3/1"},{clab_far:{clab_link_ip:"192.168.0.17/30",clab_link_name:"to_R6",clab_node:"R3",isis_iid:1,port:"1/1/c1/1"},clab_link_ip:"192.168.0.18/30",clab_link_name:"to_R3",isis_iid:1,port:"1/1/c2/1"},{clab_far:{clab_link_ip:"192.168.0.33/30",clab_link_name:"to_R6",clab_node:"RR",isis_iid:1,port:"1/1/c2/1"},clab_link_ip:"192.168.0.34/30",clab_link_name:"to_RR",isis_iid:1,port:"1/1/c4/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"R6",clab_role:"vr-sros",clab_system_ip:"192.0.2.6/32",ipv4_sid_label:14006,isis_iid:[1]},RR:{clab_kind:"vr-sros",clab_links:[{clab_far:{clab_link_ip:"192.168.0.30/30",clab_link_name:"to_RR",clab_node:"R5",isis_iid:1,port:"1/1/c4/1"},clab_link_ip:"192.168.0.29/30",clab_link_name:"to_R5",isis_iid:1,port:"1/1/c1/1"},{clab_far:{clab_link_ip:"192.168.0.34/30",clab_link_name:"to_RR",clab_node:"R6",isis_iid:1,port:"1/1/c4/1"},clab_link_ip:"192.168.0.33/30",clab_link_name:"to_R6",isis_iid:1,port:"1/1/c2/1"}],clab_management_ipv4:"",clab_management_ipv6:"",clab_node:"RR",clab_role:"vr-sros",clab_system_ip:"192.0.2.10/32",ipv4_sid_label:14010,isis_iid:[1]}}};return(m,o)=>(e(),_(g,null,[u,h(m.$slots,"default"),a("p",null,[f,a("a",{onClick:o[0]||(o[0]=S=>i.value=!i.value)},v(i.value?"Split":"Combine"),1)]),i.value?(e(),_("div",C,[n(s(c),{style:{"margin-left":"20px"},value:d,copyable:"","expand-depth":2,theme:"dark"})])):(e(),_("div",D,[A,n(s(c),{style:{"margin-left":"20px"},value:t,copyable:"","expand-depth":4,theme:"dark"}),E,n(s(c),{style:{"margin-left":"20px"},value:b,copyable:"","expand-depth":2,theme:"dark"})]))],64))}});const F=p(`<h1 id="config-engine-user-interface" tabindex="-1">Config Engine User Interface <a class="header-anchor" href="#config-engine-user-interface" aria-hidden="true">#</a></h1><p>The web user interface allows you to visualize your topology, inspect magic variables and transmit commands direclty from your favorite web browser.</p><h2 id="start-the-web-server" tabindex="-1">Start the web server <a class="header-anchor" href="#start-the-web-server" aria-hidden="true">#</a></h2><p>The Config Engine UI can be started with the <a href="/reference/serve"><code>labctl serve</code></a> command.</p><p>Once the server is started you should be able to open the suggested URLs with your browser</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ labctl serve -t topo.clab.yaml -p ./ --addr :8080</span></span>
<span class="line"><span style="color:#A6ACCD;">INFO[0000] Parsing &amp; checking topology file: topo.clab.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">INFO[0000] Access the web server on http://localhost:8080 or http://10.10.56.51:8080</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="labctl-companion-file" tabindex="-1">Labctl companion file <a class="header-anchor" href="#labctl-companion-file" aria-hidden="true">#</a></h2><p>When you serve a topology, all the frontend settings, lab layout, label templates and more wil be saved in the same folder as the topology file. The companion file will be created automatically when required and a running server will constantly write this file if there are changes in the frontend.</p><table><thead><tr><th>Topology filename</th><th>Companion filename</th></tr></thead><tbody><tr><td><code>&lt;name&gt;</code>.clab.yml</td><td><code>&lt;name&gt;</code>.clab.yml</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You should not change the companion file when the server is running, since a running server may overwrite your changes.</p><p>Always shut down the server before editing the companion file.</p></div><p>Today only suggested commands <code>options</code>&gt;<code>commands</code> cannot be edited from the frontend.</p><h2 id="topology-view" tabindex="-1">Topology view <a class="header-anchor" href="#topology-view" aria-hidden="true">#</a></h2><p>The topology view should show up immediately.</p><h2 id="labels" tabindex="-1">Labels <a class="header-anchor" href="#labels" aria-hidden="true">#</a></h2><p>You can create layers of labels.</p><h2 id="inspect-variables" tabindex="-1">Inspect variables <a class="header-anchor" href="#inspect-variables" aria-hidden="true">#</a></h2><p>The Config Engine UI can show you the magic variables that will be used to render a template. From here you can test these variables on templates.</p>`,17),x=a("div",{class:"language-yaml"},[a("button",{class:"copy"}),a("span",{class:"lang"},"yaml"),a("pre",null,[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F07178"}},"nodes"),a("span",{style:{color:"#89DDFF"}},":")]),l(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#F07178"}},"R4"),a("span",{style:{color:"#89DDFF"}},":")]),l(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#F07178"}},"kind"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#C3E88D"}},"vr-sros")]),l(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#F07178"}},"config"),a("span",{style:{color:"#89DDFF"}},":")]),l(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#F07178"}},"vars"),a("span",{style:{color:"#89DDFF"}},":")]),l(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"        "),a("span",{style:{color:"#F07178"}},"clab_system_ip"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#C3E88D"}},"192.0.2.4/32")]),l(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"        "),a("span",{style:{color:"#F07178"}},"ipv4_sid_label"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"14004")]),l(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"        "),a("span",{style:{color:"#F07178"}},"isis_iid"),a("span",{style:{color:"#89DDFF"}},":")]),l(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"          "),a("span",{style:{color:"#89DDFF"}},"-"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"1")]),l(`
`),a("span",{class:"line"})])])],-1),T=p(`<h2 id="execute-commands" tabindex="-1">Execute commands <a class="header-anchor" href="#execute-commands" aria-hidden="true">#</a></h2><p>You can execute &quot;commit&quot;, &quot;compare&quot; and &quot;send&quot; commands directly from the UI - you use exactly the same syntax as from the commandline.</p><p>Config Engine related flags used on the commandline to serve the frontend</p><table><thead><tr><th style="text-align:left;">Flag</th><th></th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>--topo</code></td><td><code>-t</code></td><td>\u2714</td><td>the topology file</td></tr><tr><td style="text-align:left;"><code>--template-paths</code></td><td><code>-p</code></td><td>\u2714</td><td>paths to search for templates (in order)</td></tr></tbody></table><p>Flags available from within the UI to execute config commands</p><table><thead><tr><th style="text-align:left;">Flag</th><th></th><th></th><th>Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>--template-list</code></td><td><code>-l</code></td><td>\u2714</td><td>template names to render</td></tr><tr><td style="text-align:left;"><code>--filter</code></td><td><code>-f</code></td><td></td><td>nodes to include</td></tr></tbody></table><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">compare -l bgp -f R1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>will compare the template named <code>bgp__&lt;role&gt;.tmpl</code> ONLY to node R1</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">commit -l bgp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>will commit the template named <code>bgp__&lt;role&gt;.tmpl</code> to all nodes in the topology</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">send -l show-route-table -f R1,R2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>will send the template <code>show-route-table_&lt;role&gt;.tmpl</code> to node R1 and R2 only</p><h2 id="suggested-commands" tabindex="-1">Suggested commands <a class="header-anchor" href="#suggested-commands" aria-hidden="true">#</a></h2><p>You can add suggested commands to the frontend. They will be displayed on the Config Engine \u{1F3E0} home screen.</p><p>Today this is done manually in the companion lab file (it should be done while the server is NOT running!)</p><p>An exmaple of suggested commands in the labctl companion file:</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">commands</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compare -l ports -f R1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit -l delete -f R1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit -l ports</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">send -l show-lldp</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit -l delete,ports,isis,adjsid,c7,bgp</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">send -l show-route-table</span></span>
<span class="line"></span></code></pre></div>`,18),V=JSON.parse('{"title":"Config Engine User Interface","description":"","frontmatter":{},"headers":[{"level":2,"title":"Start the web server","slug":"start-the-web-server","link":"#start-the-web-server","children":[]},{"level":2,"title":"Labctl companion file","slug":"labctl-companion-file","link":"#labctl-companion-file","children":[]},{"level":2,"title":"Topology view","slug":"topology-view","link":"#topology-view","children":[]},{"level":2,"title":"Labels","slug":"labels","link":"#labels","children":[]},{"level":2,"title":"Inspect variables","slug":"inspect-variables","link":"#inspect-variables","children":[]},{"level":2,"title":"Execute commands","slug":"execute-commands","link":"#execute-commands","children":[{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]},{"level":2,"title":"Suggested commands","slug":"suggested-commands","link":"#suggested-commands","children":[]}],"relativePath":"guide/config-engine-ui.md","lastUpdated":1661759821000}'),I={name:"guide/config-engine-ui.md"},q=Object.assign(I,{setup(r){return(i,t)=>(e(),_("div",null,[F,n(w,null,{default:y(()=>[x]),_:1}),T]))}});export{V as __pageData,q as default};