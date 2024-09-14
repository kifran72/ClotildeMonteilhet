<template>
  <TheSophrology />
  <SophrologyTools />
  <WhySophrologie />
  <SophrologySpecialties />
</template>

<script setup>
import TheSophrology from "src/components/Sections/Sophrology/TheSophrology.vue";
import SophrologyTools from "src/components/Sections/Sophrology/SophrologyTools.vue";
import WhySophrologie from "src/components/Sections/WhySophrologie.vue";
import SophrologySpecialties from "src/components/Sections/Sophrology/SophrologySpecialties.vue";

defineOptions({
  name: "SophrologyPage",
});
</script>
