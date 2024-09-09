<template>
  <IntroContact />
  <TheFirm />
  <SessionStart />
</template>

<script setup>
import IntroContact from "src/components/Sections/Contact/IntroContact.vue";
import TheFirm from "src/components/Sections/Contact/TheFirm.vue";
import SessionStart from "src/components/Sections/Session/SessionStart.vue";

defineOptions({
  name: "ContactPage",
});
</script>
