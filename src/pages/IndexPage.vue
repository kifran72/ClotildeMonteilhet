<template>
  <PresentationIntro />
  <CategoriesIntro />
  <WhySophrologie />
  <BreatheTime />
  <ArticlesIntro />
</template>

<script setup>
import PresentationIntro from "../components/Sections/Home/PresentationIntro.vue";
import CategoriesIntro from "../components/Sections/Home/CategoriesIntro.vue";
import WhySophrologie from "../components/Sections/WhySophrologie.vue";
import BreatheTime from "../components/Sections/Home/BreatheTime.vue";
import ArticlesIntro from "../components/Sections/Home/ArticlesIntro.vue";

defineOptions({
  name: "IndexPage",
});
</script>
