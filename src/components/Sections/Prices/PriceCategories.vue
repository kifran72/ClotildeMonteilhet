<template>
  <div class="bg-primary" :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-xl'">
    <h2 class="text-center q-py-md text-secondary" style="margin: 0">Tarifs</h2>
    <div
      class="q-py-xl"
      :class="$q.screen.lt.md ? 'wrapper' : 'wrapper-3'"
      style="grid-gap: 2rem"
    >
      <div v-for="price in Prices" :key="price">
        <q-card :class="$q.screen.lt.md ? 'mobile-card' : ''">
          <q-card-section class="bg-secondary text-center">
            <h4 class="text-white text-italic" style="margin: 0">
              {{ price.title }}
            </h4>
            <h4 class="text-white text-bold" style="margin: 0">
              {{ price.subTitle }}
            </h4>
          </q-card-section>
          <q-card-section class="text-center">
            <h3 class="q-pa-lg" style="margin: 0">{{ price.price }} euros</h3>
            <p class="q-pa-lg" style="margin: 0">Durée {{ price.time }}</p>
            <q-separator />
            <p class="q-pa-lg" style="margin: 0">Au cabinet</p>
            <q-separator />
            <p class="q-pa-lg" style="margin: 0">En téléconsultation</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div
      class="flex flex-center"
      :class="$q.screen.lt.md ? 'q-pb-lg' : 'q-py-lg'"
    >
      <RouterLink to="/contact"
        ><q-btn
          flat
          label="Prendre rendez vous"
          class="q-px-md q-py-sm bg-secondary btn-custom"
          color="white"
          style="font-size: 20px"
      /></RouterLink>
    </div>
  </div>
  <div class="q-pa-xl text-center">
    <h3 class="text-secondary" style="margin: 0">A noter</h3>
    <p class="text-italic">
      Sachez que certaines mutuelles prévoient le remboursement des séances de
      sophrologie, n’hésitez pas à vous renseigner
    </p>
  </div>
</template>

<script setup>
defineOptions({
  name: "PriceCategories",
});

const Prices = [
  {
    title: "Séance individuelle",
    subTitle: "Enfant/Adolescent",
    price: 40,
    time: "45 minutes",
  },
  {
    title: "Séance individuelle",
    subTitle: "Adulte",
    price: 50,
    time: "1 heure",
  },
  {
    title: "Séance collective",
    subTitle: "4 ou 5 pers",
    price: 15,
    time: "1 heure",
  },
];
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
