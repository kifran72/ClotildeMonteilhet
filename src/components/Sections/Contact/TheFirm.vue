<template>
  <div
    class="flex flex-center"
    :class="$q.screen.lt.md ? ' q-pa-md' : ' q-pa-xl'"
  >
    <h3 class="text-special" :style="$q.screen.lt.md ? 'font-size: 5rem' : ''">
      Le Cabinet
    </h3>
    <q-img
      src="https://drive.google.com/thumbnail?id=1CRBbx4_2SXUDKdB8_PWe96kpCWSlA0Q7&sz=w1000"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: "TheFirm",
});
</script>
