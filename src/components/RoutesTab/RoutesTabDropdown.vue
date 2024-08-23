<template>
  <q-btn-dropdown
    v-if="Tab.data.dropdown !== null"
    flat
    dense
    :stack="$q.screen.lt.md"
    :class="$q.screen.lt.md ? 'full-width q-pa-md' : ''"
    :content-class="$q.screen.lt.md ? 'no-box-shadow bg-primary' : ''"
    :label="Tab.data.label"
  >
    <RouteTabList :data="Tab.data.dropdown" />
  </q-btn-dropdown>
</template>

<script setup>
import RouteTabList from "./RouteTabList.vue";

defineOptions({
  name: "RoutesTabDropdown",
});

const Tab = defineProps(["data"]);
</script>
