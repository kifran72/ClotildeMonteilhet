<template>
  <div class="text-center q-pb-xl">
    <h3 class="text-bold" style="margin: 0">Ses bienfaits, sa pratique</h3>
    <h3 class="text-italic" style="margin: 0">Méthode spycho-corporelle</h3>
  </div>
  <div class="bg-primary customLayout">
    <h3 class="text-center q-pb-xl" style="margin: 0">Ses outils</h3>
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
.customLayout {
  padding: 3rem;
}

.customGridGap {
  gap: 5rem;
}

.buttonSize {
  height: 8rem;
  width: 15rem;
}
</style>
