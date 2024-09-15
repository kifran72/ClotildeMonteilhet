<template>
  <div class="bg-secondary" :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-xl'">
    <h2 style="margin: 0" class="text-center text-white text-italic">
      Le bien être en toutes circontances
    </h2>
  </div>
  <div>
    <div :class="$q.screen.lt.md ? 'wrapper' : 'wrapper-2'">
      <div :style="$q.screen.lt.md ? 'padding: 1rem' : 'padding: 5rem'">
        <q-img
          src="https://drive.google.com/thumbnail?id=1XokD5B-FNaGp-bfox9hI4TQ-UV6nbkTP&sz=w1000"
          style="height: 100%; width: 100%"
        />
      </div>
      <div
        :style="$q.screen.lt.md ? 'padding: 1rem' : 'padding: 5rem'"
        class="flex flex-center"
      >
        <q-card>
          <q-card-section class="bg-secondary text-center">
            <h4 class="text-white text-italic" style="margin: 0">
              Séance en entreprise,
            </h4>
            <h4 class="text-white text-italic" style="margin: 0">
              struture,association
            </h4>
          </q-card-section>
          <q-card-section class="text-center">
            <h3 class="q-pa-lg" style="margin: 0">Sur devis</h3>
            <div class="q-pa-lg">
              <p style="margin: 0">Nous construirons ensemble</p>
              <p style="margin: 0">
                Un atelier répondant à vos attentes et à vos objectifs
              </p>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
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

<style>
.btn-custom {
  border-radius: 5px 5px 5px 5px;
}
</style>
