<template>
  <TheSophrology />
  <SophrologyTools />
  <WhySophrologie />
</template>

<script setup>
import TheSophrology from "src/components/Sections/Sophrology/TheSophrology.vue";
import SophrologyTools from "src/components/Sections/Sophrology/SophrologyTools.vue";
import WhySophrologie from "src/components/Sections/WhySophrologie.vue";

defineOptions({
  name: "SophrologyPage",
});
</script>
