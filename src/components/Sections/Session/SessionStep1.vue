<template>
  <div class="text-center q-pa-xl">
    <h2 class="text-secondary" style="margin: 0">Les séances</h2>
    <p class="text-italic">“Une methode Complète, un suivi personnalisé”</p>
    <p class="text-bold">Déroulé des séances en Individuel</p>
  </div>
  <div
    :class="$q.screen.lt.md ? 'wrapper q-pa-md' : 'wrapper-2 q-pa-xl'"
    style="grid-gap: 2rem"
  >
    <q-img
      src="https://drive.google.com/thumbnail?id=1sABT9X5SkZ5h-ZZsy08fBtORz_uvNmqY&sz=w1000"
      :style="$q.screen.lt.md ? '' : 'max-height: 40rem; height: 40rem'"
    />
    <div>
      <div
        class="q-pb-xl wrapper-2"
        style="display: flex; align-items: baseline"
      >
        <h3 style="margin: 0; min-width: 9rem">Etape 1</h3>
        <p style="margin: 0">(première séance)</p>
      </div>
      <p>
        La première séance en sophrologie sert à prendre contact afin que le
        sophrologue et le patient se découvrent, elle permet aussi au
        sophrologue d'obtenir le maximun d'informations pour ajuster le parcours
        thérapeutique personnalisé qui doit être mis en place à travers des
        questions pendant une anamnèse (moment où le sophrologue et le patient
        définissent ensemble l’objectif de l’accompagnement et le contrat
        thérapeutique) qui sert à construire le protocole.
      </p>
      <p>
        Un état des lieux sera établi à travers des questions autour des envies,
        du vécu, et des besoins du sophronisé. Il évalue également vos priorités
        afin de clarifier votre demande. Elle permet de faire connaissance et
        d'établir une relation de confiance. elle vous permet de découvrir la
        sophrologie à travers une relaxation dynamique et une sophronisation qui
        vous permettrons de faire connaissance avec la sophrologie.
      </p>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "SessionStep1",
});
</script>
