<template>
  <div :class="$q.screen.lt.md ? '' : 'flex flex-center row reverse'">
    <div class="col flex flex-center q-pa-xl">
      <q-img
        src="https://drive.google.com/thumbnail?id=1UDlDxPpDaSIlZSKKZtDhbcb0pFgYYS9k&sz=w1000"
      />
    </div>
    <div
      :class="$q.screen.lt.md ? 'flex flex-center' : 'col q-pa-xl text-right'"
    >
      <div
        :class="
          $q.screen.lt.md
            ? 'flex flex-center q-px-xl text-center'
            : 'flex justify-end'
        "
      >
        <h4>Pourquoi la Sophrologie?</h4>
        <p class="specialItalic">
          La sophrologie aide à se recentrer sur sois et ses émotions, elle
          permets d'apprendre à écouter son corps et ses ressentis. Sa pratique
          régulière vous aide à vous reconnecter avec vous même, à vivre
          pleinement le présent sereinement. Elle vous permets d'évacuer les
          tensions négatives et de faire le ménage avec vos blocages.
        </p>
        <div>
          <p v-for="Rule in Rules" :key="Rule" class="specialBold">
            {{ Rule }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "WhySophrologie",
});

const Rules = [
  "Vous etes fatigué, vous manquez d'énergie.",
  "Vous souhaitez mieux dormir.",
  "Vous voulez vous libérer de la dépendance.",
  "Votre enfant est agité ou rencontre des problèmes de concentration.",
  "Vous etes enceinte.",
  "Vous préparez un examen ou une compétition",
  "Vous vous sentez anxieux.",
  "Vous avez perdu confiance en vous. vous souffrez de douleurs.",
];
</script>

<style>
.large-flex {
  flex-direction: column-reverse;
}

.small-flex {
}
</style>
