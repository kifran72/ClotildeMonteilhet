<template>
  <PresentationIntro />
  <CategoriesIntro />
</template>

<script setup>
import PresentationIntro from "../components/Sections/PresentationIntro.vue";
import CategoriesIntro from "../components/Sections/CategoriesIntro.vue";

defineOptions({
  name: "IndexPage",
});
</script>
