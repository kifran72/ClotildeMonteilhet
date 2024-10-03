<template>
  <div
    :class="$q.screen.lt.md ? 'wrapper' : 'wrapper-3 q-py-xl'"
    style="grid-gap: 2rem"
    :style="$q.screen.lt.md ? 'padding: 1rem' : 'padding: 5rem 5rem 0 5rem'"
  >
    <q-card
      class="bg-secondary"
      :class="[$q.screen.lt.md ? 'mobile-card' : 'q-py-xl']"
    >
      <q-card-section class="text-center">
        <q-img
          src="https://drive.google.com/thumbnail?id=10__6uIa2R25o6pGWVj4IEf1xgGcclHuc&sz=w1000"
          style="max-width: 10rem"
        />
        <h3 class="text-bold text-black" style="margin: 0">Formation</h3>
        <h4 class="text-italic text-black">Formaquiétude</h4>
      </q-card-section>
    </q-card>
    <q-card
      class="bg-primary"
      :class="[$q.screen.lt.md ? 'mobile-card' : 'q-py-xl']"
    >
      <q-card-section class="text-center">
        <q-img
          src="https://drive.google.com/thumbnail?id=1ueyLxf_hmi-uXNy_nJzSWp8dQYBGOuZe&sz=w1000"
          style="max-width: 10rem"
        />
        <h3 class="text-bold text-black" style="margin: 0">Titre</h3>
        <h4 class="text-black">En cour</h4>
        <h4 class="text-italic text-black" style="margin: 0">RNCP</h4>
      </q-card-section>
    </q-card>
    <q-card
      class="bg-secondary"
      :class="[$q.screen.lt.md ? 'mobile-card' : 'q-py-xl']"
    >
      <q-card-section class="text-center">
        <q-img
          src="https://drive.google.com/thumbnail?id=113EnqPFJQwrGTZDnGOp6ZMZvQpS-5A1m&sz=w1000"
          style="max-width: 10rem"
        />
        <h3
          class="text-bold text-black"
          style="margin: 0"
          :style="$q.screen.lt.sm ? 'font-size: 40px' : ''"
        >
          Spécialisations
        </h3>
        <h4 class="text-black text-italic q-pt-md" style="margin: 0">
          -Entreprise-
        </h4>
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
  <div class="q-pa-xl">
    <div class="bg-primary" style="padding: 1px">
      <div class="bg-secondary" style="margin: 5px">
        <p class="text-center text-white" style="font-size: 25px; margin: 0">
          Membre du Syndicat des Sophrologues
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "AboutCategories",
});

const categories = [];
</script>

<style scoped>
.btn-custom {
  border-radius: 5px 5px 5px 5px;
}

.mobile-card {
  width: 90%; /* Ajustez cette valeur selon vos besoins */
  margin: 0 auto;
}

.mobile-card .q-card__section {
  padding: 8px; /* Réduire le padding */
}

.mobile-card h4 {
  font-size: 1.5rem;
}

.mobile-card h3 {
  font-size: 1.9rem;
}

.mobile-card p {
  font-size: 1rem;
}

.mobile-card .q-pa-lg {
  padding: 8px; /* Réduire le padding */
}
</style>
