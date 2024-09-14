<template>
  <div
    class="full-width q-pa-xl"
    v-if="$q.screen.lt.md || $q.screen.lt.sm || $q.screen.lt.xs"
  >
    <h2 class="text-special text-secondary flex flex-center">S’offrir</h2>
    <div class="text-center">
      <h4 class="q-pt-md">Une séance de sophrologie</h4>
      <p>Rien que pour vous</p>
    </div>
  </div>
  <q-img
    src="https://drive.google.com/thumbnail?id=1sHDLfq-yZITAHjE1rmfSabXg9M6RlE2B&sz=w1000"
    style="max-height: 35rem"
  >
    <div
      v-if="!$q.screen.lt.md"
      class="absolute-full text-subtitle2 flex flex-center"
    >
      <div class="content-center text-white">
        <h2 class="text-special text-white">S’offrir</h2>
        <h4 class="q-pt-md text-white">Une séance de sophrologie</h4>
        <p>Rien que pour vous</p>
      </div>
    </div>
  </q-img>
  <div class="text-center bg-secondary q-pa-xl">
    <p class="text-italic text-white" style="margin: 0; font-size: 25px">
      Premier contact de découverte de 15 minutes
      <span class="text-bold">gratuit</span> (voyons ensemble vos besoins)
    </p>
    <div class="flex flex-center q-pt-xl">
      <RouterLink to=""
        ><q-btn
          no-caps
          outline
          label="Prendre rendez vous"
          class="q-px-md q-py-sm bg-secondary btn-custom"
          color="white"
          style="font-size: 25px"
      /></RouterLink>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "PricesIntro",
});
</script>

<style>
.btn-custom {
  border-radius: 5px 5px 5px 5px;
}
</style>
