<template>
  <div
    class="text-center"
    :class="$q.screen.lt.md ? 'q-pb-md q-px-md' : 'q-pb-xl q-px-xl'"
  >
    <h3
      class="text-bold text-secondary"
      style="margin: 0"
      :style="!$q.screen.lt.sm ? '' : 'font-size: 25px'"
    >
      Ses bienfaits, sa pratique
    </h3>
    <h3
      class="text-italic"
      style="margin: 0"
      :style="!$q.screen.lt.sm ? '' : 'font-size: 25px'"
    >
      Méthode psycho-corporelle
    </h3>
  </div>
  <div
    class="bg-primary"
    :class="$q.screen.lt.md ? 'customLayout' : 'customLayout-3'"
  >
    <h3 class="text-center q-pb-xl text-secondary" style="margin: 0">
      Ses outils
    </h3>
    <div :class="$q.screen.lt.md ? 'wrapper' : 'wrapper-3 customGridGap'">
      <div v-for="button in buttons" :key="button.id" class="flex flex-center">
        <q-btn
          :ripple="false"
          :label="button.label"
          color="secondary"
          text-color="white"
          class="buttonSize text-special-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "SophrologyTools",
});

const buttons = [
  { id: 1, label: "Respiration controlée" },
  { id: 2, label: "Détente Corporelle" },
  { id: 3, label: "Visualisation" },
];
</script>

<style>
.customLayout-3 {
  padding: 3rem;
}
.customLayout {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.customGridGap {
  gap: 5rem;
}

.buttonSize {
  height: 8rem;
  width: 15rem;
}
</style>
