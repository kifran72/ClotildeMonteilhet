<template>
  <q-page class="q-px-xl">
    <PresentationIntro />
    <CategoriesIntro />
  </q-page>
</template>

<script setup>
import PresentationIntro from "../components/Sections/PresentationIntro.vue";
import CategoriesIntro from "../components/Sections/CategoriesIntro.vue";

defineOptions({
  name: "IndexPage",
});
</script>
