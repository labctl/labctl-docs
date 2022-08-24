<template>
  Select your example:
  <a
    v-for="(nme, idx) in examples"
    :key="idx"
    @click="active = nme"
    :style="{
      'margin-left': '4px',
      padding: '6px',
      'background-color':
        active == nme ? 'var(--vp-c-brand)' : 'var(--vp-c-bg)',
      color: active !== nme ? 'var(--vp-c-brand)' : 'var(--vp-c-bg)',
    }"
  >
    {{ nme.replace("e", "# ") }}
  </a>

  <slot :name="active" />

  <table>
    <td v-for="itm in nodes" key="itm.clab_node">
      <p>Variables for node {{ itm.clab_node }}</p>
      <json-viewer :value="itm" copyable :expand-depth="3" theme="dark" />
    </td>
  </table>

  <!-- <p>
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
  </div> -->
</template>

<script setup lang="ts">
//import yaml from "js-yaml";
import { JsonViewer } from "vue3-json-viewer";
import { ref, computed, useSlots } from "vue";
import * as example_data from "./magic_vars_examples";

export interface PropDef {
  example?: string;
}
const props = defineProps<PropDef>();

const active = ref("e1");

const nodes = computed((): Array<Record<string, any>> => {
  if (!(active.value in example_data)) {
    return [];
  }
  let d = example_data[active.value];
  if (!Array.isArray(d)) {
    d = [d];
  }
  return d.map((i) => {
    try {
      i["clab_nodes"] = "{...}";
      return i;
    } catch {
      return {};
    }
  });
});

const combined = ref(true);

const v_topo = {
  nodes: {
    R4: {
      kind: "vr-sros",
      config: { vars: {} },
    },
  },
};

const slots = useSlots();
const examples = computed(() => Object.keys(slots));
</script>

<style>
.jv-container .jv-code {
  padding: 10px 10px;
}
.jv-container .jv-code.open {
  padding-bottom: 20px;
}
</style>
