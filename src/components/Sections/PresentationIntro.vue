<template>
  <div
    :class="
      ($q.screen.lt.lg || $q.screen.lt.xl
        ? ''
        : 'full-width row no-wrap justify-center content-center') ||
      ($q.screen.lt.md || $q.screen.lt.sm ? '' : 'wrapper-2') ||
      (!$q.screen.lt.sm || !$q.screen.lt.xs ? 'q-pa-lg' : '')
    "
  >
    <img
      alt="Quasar logo"
      src="https://drive.google.com/thumbnail?id=1Hn8rdJ-ejrzlZsQCuLiV8eFp4cNxdiJW&sz=w1000"
      style="width: 100%; height: auto"
      :style="$q.screen.lt.lg || $q.screen.lt.xl ? '' : 'max-width: 50rem'"
    />
    <div class="content-center">
      <h2 class="text-special text-secondary">Bienvenue!</h2>
      <h4 class="q-pt-md">
        Je suis Clotilde Monteilhet, Sophrologue à Coutras
      </h4>
      <p>
        À votre écoute pour vous accompagner dans votre bien-être personnel.
      </p>
      <div class="flex flex-center q-pt-xl">
        <RouterLink to="/about"
          ><q-btn
            flat
            label="En savoir + sur moi"
            class="q-px-md q-py-sm bg-secondary btn-custom"
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

<style>
.btn-custom {
  border-radius: 5px 5px 5px 5px;
}
</style>
