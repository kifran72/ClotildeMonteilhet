<template>
  <div
    :class="$q.screen.lt.md ? 'wrapper q-pa-md' : 'wrapper-2 q-pa-xl'"
    style="grid-gap: 2rem"
  >
    <q-img
      src="https://drive.google.com/thumbnail?id=12V0TK50-nzRZAhY6CepoBECkrtMuIH-D&sz=w1000"
      :style="$q.screen.lt.md ? '' : 'max-height: 40rem; height: 40rem'"
    />
    <div>
      <div
        class="q-pb-xl wrapper-2"
        style="display: flex; align-items: baseline"
      >
        <h3 style="margin: 0; min-width: 9rem">Etape 3</h3>
        <p style="margin: 0">(dernière séance)</p>
      </div>
      <p>
        Cette étape est le dernier Echange et aussi le moment de faire le bilan
        sur l’accompagnement, de voir si l’objectif est atteint. Cette étape
        vous permet de prendre conscience de tout ce que vous avez mis en oeuvre
        pour atteindre votre objectif.
      </p>
      <p>
        Dans cette dernière séance vous aurez votre dernier entretien avec des
        relaxations dynamiques et une sophronisation de clôture pour consolider
        votre accompagnement.
      </p>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "SessionStep3",
});
</script>
