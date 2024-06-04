<template>
  <q-tabs
    v-model="tab"
    class="bg-primary text-black full-height"
    active-color="accent"
    indicator-color="black"
  >
    <RoutesTab />
  </q-tabs>

  <div class="flex justify-end">
    <q-btn
      v-for="feed in socialfeed"
      :key="feed.id"
      flat
      round
      text-color="black"
      color="secondary"
      :icon="feed.icon"
      class="q-mr-md"
      size="sm"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import RoutesTab from "./RoutesTab.vue";

const tab = ref("");

const socialfeed = [
  { id: 1, icon: "fab fa-instagram" },
  { id: 2, icon: "fab fa-facebook-f" },
  { id: 3, icon: "fab fa-youtube" },
];

defineOptions({
  name: "CategoriesLinks",
});
</script>
