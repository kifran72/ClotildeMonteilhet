<template>
  <q-list class="bg-primary">
    <q-item v-for="Tab in Tabs.data" :key="Tab.id" clickable>
      <q-item-section>
        <q-route-tab exact :to="Tab.route" :label="Tab.label" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
defineOptions({
  name: "RouteTabList",
});

const Tabs = defineProps(["data"]);
</script>
