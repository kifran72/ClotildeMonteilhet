<template>
  <div
    class="flex flex-center"
    :class="$q.screen.lt.md ? ' q-pa-md' : ' q-pa-xl'"
  >
    <h3
      class="text-special"
      :style="$q.screen.lt.md ? 'font-size: 5rem' : ''"
      :class="$q.screen.lt.md ? '' : 'q-pb-xl'"
    >
      Le Cabinet
    </h3>
    <q-img
      class="q-mt-xl"
      src="https://drive.google.com/thumbnail?id=1gJ6HW2LuzCdv_FOyS9dMvaOer-SNsGb7&sz=w1000"
      style="height: 35rem"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: "TheFirm",
});
</script>
