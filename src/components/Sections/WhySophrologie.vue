<template>
  <div :class="$q.screen.lt.md ? 'q-pa-lg' : 'q-pa-xl'">
    <div v-if="$q.screen.lt.md" class="q-pb-xl">
      <q-img
        class="full-height"
        src="https://drive.google.com/thumbnail?id=15voY400Kd0t6JQROzuvzUz1N-EJnQUAj&sz=w1000"
      />
    </div>

    <div :class="$q.screen.lt.md ? '' : 'wrapper-2 specialGridGap-3'">
      <div :class="$q.screen.lt.md ? 'flex flex-center' : 'text-right'">
        <div
          :class="
            $q.screen.lt.md
              ? 'flex flex-center text-center'
              : 'column justify-end'
          "
        >
          <h4 style="margin-top: 0">Pourquoi la Sophrologie?</h4>
          <p class="text-italic">
            La sophrologie aide à se recentrer sur sois et ses émotions, elle
            permets d'apprendre à écouter son corps et ses ressentis. Sa
            pratique régulière vous aide à vous reconnecter avec vous même, à
            vivre pleinement le présent sereinement. Elle vous permets d'évacuer
            les tensions négatives et de faire le ménage avec vos blocages.
          </p>
          <div>
            <p v-for="Rule in Rules" :key="Rule" class="text-bold">
              {{ Rule }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="!$q.screen.lt.md">
        <q-img
          class="full-height"
          src="https://drive.google.com/thumbnail?id=15voY400Kd0t6JQROzuvzUz1N-EJnQUAj&sz=w1000"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "WhySophrologie",
});

const Rules = [
  "Vous etes fatigué, vous manquez d'énergie ?",
  "Vous souhaitez mieux dormir ?",
  "Vous voulez vous libérer de la dépendance ?",
  "Votre enfant est agité ou rencontre des problèmes de concentration ?",
  "Vous etes enceinte ?",
  "Vous préparez un examen ou une compétition ?",
  "Vous vous sentez anxieux ?",
  "Vous avez perdu confiance en vous ? vous souffrez de douleurs ?",
];
</script>

<style>
.large-flex {
  flex-direction: column-reverse;
}
</style>
