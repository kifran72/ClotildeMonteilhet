<template>
  <q-list separator bordered class="bg-accent">
    <q-item v-for="Tab in Tabs.data" :key="Tab.id" dense>
      <q-item-section>
        <q-route-tab
          exact
          :to="Tab.route"
          :label="Tab.label"
          :disable="Tab.disable"
        />
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
