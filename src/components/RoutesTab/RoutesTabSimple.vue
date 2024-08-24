<template>
  <q-route-tab
    exact
    :key="Tab.data.id"
    :to="Tab.data.route"
    :label="Tab.data.label"
  />
</template>

<script setup>
defineOptions({
  name: "RoutesTabSimple",
});

const Tab = defineProps(["data"]);
</script>
