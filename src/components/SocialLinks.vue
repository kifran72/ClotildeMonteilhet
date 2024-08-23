<template>
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
const socialfeed = [
  { id: 1, icon: "fab fa-instagram" },
  { id: 2, icon: "fab fa-facebook-f" },
  { id: 3, icon: "fab fa-youtube" },
];

defineOptions({
  name: "SocialLinks",
});
</script>
