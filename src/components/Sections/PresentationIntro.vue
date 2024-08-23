<template>
  <div :class="$q.screen.lt.sm ? '' : 'wrapper-2'">
    <div class="flex flex-center">
      <img
        alt="Quasar logo"
        src="https://drive.google.com/thumbnail?id=1Hn8rdJ-ejrzlZsQCuLiV8eFp4cNxdiJW&sz=w1000"
        style="width: 80%; height: auto"
      />
    </div>

    <div class="content-center">
      <h2 class="text-special text-secondary">Bienvenue !</h2>
      <h4>Je suis Clotilde Montheillet, Sophrologue à Coutras</h4>
      <p>
        À votre écoute pour vous accompagner dans votre bien-être personnel.
      </p>
      <div class="flex flex-center">
        <RouterLink v-if="!$q.screen.lt.sm" to="/about"
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
