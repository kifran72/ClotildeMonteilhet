<template>
  <div :class="$q.screen.lt.md ? 'wrapper q-pa-md' : 'wrapper-2 q-pa-xl'">
    <div class="flex flex-center">
      <q-img
        src="https://drive.google.com/thumbnail?id=1axc571KrtfHqqcBdIO22gGIZCtmXqIMc&sz=w1000"
        style="max-width: 30rem"
      />
    </div>
    <div class="flex flex-center">
      <div class="text-center">
        <h3 class="text-bold text-secondary">
          Clotilde Monteilhet, Sophrologue certifiée
        </h3>
        <p class="text-italic" style="margin: 0; font-size: 25px">
          -TITRE RNCP-
        </p>
        <p class="text-black" style="margin: 0; font-size: 25px">En cour</p>
      </div>
      <div class="text-center">
        <p
          class="text-black"
          style="margin: 0; font-size: 35px; font-weight: 400"
        >
          Au service de votre bien-être
        </p>
        <p class="text-italic" style="margin: 0; font-size: 25px">
          Formation en sophrologie et validation du tirtre RNCP en cour de
          validation
        </p>
      </div>
      <q-img
        class="q-mt-xl"
        src="https://drive.google.com/thumbnail?id=1pfUegtR-eOJ0qyT6KQHA167ODc4cDpyU&sz=w1000"
        style="width: 10rem"
      />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "AboutIntro",
});
</script>

<style></style>
