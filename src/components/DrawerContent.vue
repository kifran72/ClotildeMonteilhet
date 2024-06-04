<template>
  <q-tabs
    v-model="tab"
    class="bg-primary text-grey-7"
    active-color="secondary"
    indicator-color="primary"
    vertical
    animated
  >
    <RoutesTab />
  </q-tabs>
</template>

<script setup>
import { ref } from "vue";
import RoutesTab from "./RoutesTab.vue";

const tab = ref("");

defineOptions({
  name: "DrawerContent",
});
</script>
