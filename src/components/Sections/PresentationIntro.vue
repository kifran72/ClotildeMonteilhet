<template>
  <div :class="$q.screen.lt.sm ? '' : 'wrapper-2'">
    <div class="flex flex-center">
      <img
        alt="Quasar logo"
        src="https://gaia.artemize.fr/wp-content/uploads/2022/11/Template-1-Home-1-1.png"
        style="width: 100%; height: auto"
      />
    </div>
    <div class="q-pr-md q-pl-md content-center">
      <h2 class="text-special text-secondary">Bienvenue !</h2>
      <h4>Je suis Clotilde Montheillet, Sophrologue à Bordeaux</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim
        veniam.
      </p>
      <div class="flex flex-center">
        <q-btn
          dense
          flat
          label="EN SAVOIR + SUR MOI"
          class="q-pl-md q-pr-md q-ma-lg bg-secondary"
          color="white"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "PresentationIntro",
});
</script>
