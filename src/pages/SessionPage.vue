<template>
  <SessionStep1 />
  <SessionStep2 />
  <SessionStep3 />
  <SessionStart />
  <SessionCourse />
</template>

<script setup>
import SessionStep1 from "src/components/Sections/Session/SessionStep1.vue";
import SessionStep2 from "src/components/Sections/Session/SessionStep2.vue";
import SessionStep3 from "src/components/Sections/Session/SessionStep3.vue";
import SessionStart from "src/components/Sections/Session/SessionStart.vue";
import SessionCourse from "src/components/Sections/Session/SessionCourse.vue";

defineOptions({
  name: "SessionPage",
});
</script>
