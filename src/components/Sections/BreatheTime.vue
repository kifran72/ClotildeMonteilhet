<template>
  <div
    class="bg-secondary column flex-center text-white"
    :class="$q.screen.lt.md ? 'q-pa-xl' : 'customLayout-3'"
  >
    <h2 class="text-special text-white">Respirez</h2>
    <p style="margin-top: 5rem">
      Vous etes sur le point de prendre du temps pour vous
    </p>
  </div>
</template>

<script setup>
defineOptions({
  name: "BreatheTime",
});
</script>

<style></style>
