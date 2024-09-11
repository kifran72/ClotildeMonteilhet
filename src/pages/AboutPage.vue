<template>
  <AboutIntro />
  <AboutCategories />
  <AboutTravel />
</template>

<script setup>
import AboutIntro from "src/components/Sections/About/AboutIntro.vue";
import AboutCategories from "src/components/Sections/About/AboutCategories.vue";
import AboutTravel from "src/components/Sections/About/AboutTravel.vue";

defineOptions({
  name: "AboutPage",
});
</script>
