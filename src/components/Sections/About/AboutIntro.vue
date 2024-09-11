<template>
  <div :class="$q.screen.lt.md ? 'wrapper q-pa-md' : 'wrapper-2 q-pa-xl'">
    <div class="flex flex-center">
      <q-img
        src="https://drive.google.com/thumbnail?id=1axc571KrtfHqqcBdIO22gGIZCtmXqIMc&sz=w1000"
        style="max-width: 40rem"
      />
    </div>
    <div class="flex flex-center">
      <div class="text-center">
        <h3 class="text-bold">Clotilde Monteilhet, Sophrologue certifiée</h3>
        <h3 class="text-bold" style="margin: 0">En cour</h3>
        <h3 class="text-italic" style="margin: 0">-TITRE RNCP-</h3>
      </div>
      <div class="text-center">
        <h3 class="text-italic text-bold">Au service de votre bien-être</h3>
        <h3 class="text-italic" style="margin: 0">
          Formation en sophrologie et validation du tirtre RNCP en cour de
          validation
        </h3>
      </div>
      <q-img
        class="q-mt-xl"
        src="https://drive.google.com/thumbnail?id=1Qx6KEVkgxNxKE0UyqjWrfy3BxPWDhbv5&sz=w1000"
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
