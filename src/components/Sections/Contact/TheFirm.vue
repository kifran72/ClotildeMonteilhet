<template>
  <div
    class="flex flex-center"
    :class="$q.screen.lt.md ? ' q-pa-md' : ' q-pa-xl'"
  >
    <h3
      class="text-special"
      :style="$q.screen.lt.md ? 'font-size: 5rem; padding-bottom: 4rem' : ''"
    >
      Le Cabinet
    </h3>
    <q-img
      src="https://drive.google.com/thumbnail?id=1CRBbx4_2SXUDKdB8_PWe96kpCWSlA0Q7&sz=w1000"
      :style="$q.screen.lt.md ? 'transform: scale(1.4);' : ''"
    />
  </div>

  <div
    v-if="$q.screen.lt.md"
    class="bg-secondary q-mx-lg"
    style="height: 2rem; margin-top: 3rem"
  ></div>
</template>

<script setup>
defineOptions({
  name: "TheFirm",
});
</script>
