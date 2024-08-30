<template>
  <PresentationIntro />
  <CategoriesIntro />
  <WhySophrologie />
</template>

<script setup>
import PresentationIntro from "../components/Sections/PresentationIntro.vue";
import CategoriesIntro from "../components/Sections/CategoriesIntro.vue";
import WhySophrologie from "../components/Sections/WhySophrologie.vue";

defineOptions({
  name: "IndexPage",
});
</script>
