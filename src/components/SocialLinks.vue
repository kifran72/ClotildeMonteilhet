<template>
  <q-btn
    class="socialLinkcolor"
    v-for="feed in socialfeed"
    :key="feed.id"
    round
    outline
    flat
    text-color="black"
    color="secondary"
    :icon="feed.icon"
    :class="!$q.screen.lt.md ? 'q-mr-md' : ''"
    :size="!$q.screen.lt.md ? 'sm' : 'md'"
  />
</template>

<script setup>
const socialfeed = [
  { id: 2, icon: "fab fa-facebook-f" },
  { id: 1, icon: "fab fa-instagram" },
  { id: 1, icon: "fab fa-linkedin" },
  { id: 3, icon: "fab fa-youtube" },
];

defineOptions({
  name: "SocialLinks",
});
</script>

<style>
.socialLinkcolor {
  color: white !important;
}
</style>
