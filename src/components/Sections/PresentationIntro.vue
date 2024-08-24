<template>
  <div :class="$q.screen.lt.sm ? '' : 'wrapper-2'">
    <div class="flex flex-center">
      <img
        alt="Quasar logo"
        src="https://drive.google.com/thumbnail?id=1Hn8rdJ-ejrzlZsQCuLiV8eFp4cNxdiJW&sz=w1000"
        style="width: 100%; height: auto; max-width: 47rem"
      />
    </div>
    <div class="content-center" style="max-width: 45rem">
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
