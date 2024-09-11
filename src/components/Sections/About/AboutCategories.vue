<template>
  <div
    :class="$q.screen.lt.md ? 'wrapper' : 'wrapper-3 q-py-xl'"
    style="grid-gap: 2rem"
    :style="$q.screen.lt.md ? 'padding: 1rem' : 'padding: 5rem'"
  >
    <q-card class="bg-secondary" :class="$q.screen.lt.md ? '' : 'q-py-xl'">
      <q-card-section class="text-center">
        <h3 class="text-bold text-black" style="margin: 0">Formation</h3>
        <h4 class="text-italic text-black">Formaquiétude</h4>
      </q-card-section>
    </q-card>
    <q-card class="bg-primary" :class="$q.screen.lt.md ? '' : 'q-py-xl'">
      <q-card-section class="text-center">
        <h3 class="text-bold text-black" style="margin: 0">Titre</h3>
        <h4 class="text-black">En cour</h4>
        <h4 class="text-italic text-black" style="margin: 0">RNCP</h4>
      </q-card-section>
    </q-card>
    <q-card class="bg-secondary" :class="$q.screen.lt.md ? '' : 'q-py-xl'">
      <q-card-section class="text-center">
        <h3 class="text-bold text-black" style="margin: 0">Spécilisations</h3>
        <h4 class="text-black text-italic">-Entreprise-</h4>
        <h4 class="text-black text-italic" style="margin: 0">
          -Gestion du stress-
        </h4>
        <h4 class="text-black text-italic" style="margin: 0">
          -Gestion des émotions-
        </h4>
        <h4 class="text-black text-italic" style="margin: 0">
          -Petite enfance-
        </h4>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
defineOptions({
  name: "AboutCategories",
});
</script>

<style></style>
