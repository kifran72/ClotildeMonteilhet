<template>
  <div
    :class="
      ($q.screen.lt.lg || $q.screen.lt.xl
        ? ''
        : 'full-width row no-wrap justify-center content-center') ||
      ($q.screen.lt.md || $q.screen.lt.sm ? '' : 'wrapper-2')
    "
  >
    <img
      alt="Quasar logo"
      src="https://drive.google.com/thumbnail?id=1Hn8rdJ-ejrzlZsQCuLiV8eFp4cNxdiJW&sz=w1000"
      :class="!$q.screen.lt.xl ? '' : 'q-pa-xl'"
      style="width: 100%; height: auto"
      :style="$q.screen.lt.lg || $q.screen.lt.xl ? '' : 'max-width: 50rem'"
    />
    <div
      class="content-center"
      :class="!$q.screen.lt.xl ? 'column justify-center' : 'q-pa-xl'"
    >
      <h2 class="text-special text-secondary">Bienvenue !</h2>
      <h4>Je suis Clotilde Monteilhet, Sophrologue à Coutras</h4>
      <p>
        À votre écoute pour vous accompagner dans votre bien-être personnel.
      </p>
      <div class="flex flex-center">
        <RouterLink to="/about"
          ><q-btn
            dense
            flat
            label="EN SAVOIR + SUR MOI"
            class="q-pl-md q-pr-md q-ma-lg bg-secondary"
            color="white"
        /></RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "PresentationIntro",
});
</script>
