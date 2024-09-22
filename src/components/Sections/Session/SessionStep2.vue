<template>
  <div
    :class="$q.screen.lt.md ? 'wrapper q-pa-md' : 'wrapper-2 q-pa-xl'"
    style="grid-gap: 2rem"
  >
    <q-img
      v-if="$q.screen.lt.md"
      src="https://drive.google.com/thumbnail?id=1cHhrLUbsXAxAM1U_bnljiGuHsM7_haKd&sz=w1000"
      :style="$q.screen.lt.md ? '' : 'max-height: 40rem; height: 40rem'"
    />
    <div>
      <div
        :class="
          $q.screen.lt.md
            ? 'q-pb-xl  wrapper-2'
            : 'q-pb-xl row reverse wrapper-2'
        "
        style="display: flex; align-items: baseline"
      >
        <h3 style="margin: 0; min-width: 9rem">Etape 2</h3>
        <p style="margin: 0">(séance intermédiaire)</p>
      </div>
      <p>
        Pendant tout l’accompagnement, les séances seront constituées d’un
        échange afin de faire le point ainsi que d’exercices de relaxations
        dynamiques et d’une sophronisation définies dans le protocole.
      </p>
      <p>
        Celui-ci peut éventuellement évoluer en fonction de votre progression et
        de la mise en place du changement souhaité..
      </p>
    </div>
    <q-img
      v-if="!$q.screen.lt.md"
      src="https://drive.google.com/thumbnail?id=1cHhrLUbsXAxAM1U_bnljiGuHsM7_haKd&sz=w1000"
      :style="$q.screen.lt.md ? '' : 'max-height: 40rem; height: 40rem'"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: "SessionStep2",
});
</script>
