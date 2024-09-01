<template>
  <PresentationIntro />
  <CategoriesIntro />
  <WhySophrologie />
  <BreatheTime />
  <ArticlesIntro />
</template>

<script setup>
import PresentationIntro from "../components/Sections/PresentationIntro.vue";
import CategoriesIntro from "../components/Sections/CategoriesIntro.vue";
import WhySophrologie from "../components/Sections/WhySophrologie.vue";
import BreatheTime from "../components/Sections/BreatheTime.vue";
import ArticlesIntro from "../components/Sections/ArticlesIntro.vue";

defineOptions({
  name: "IndexPage",
});
</script>
