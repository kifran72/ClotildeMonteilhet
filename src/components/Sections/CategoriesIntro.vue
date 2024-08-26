<template>
  <div
    class="bg-secondary"
    :class="
      $q.screen.lt.md
        ? 'wrapper customLayout'
        : 'wrapper-3 customLayout-3 customGridGap'
    "
  >
    <q-btn
      v-for="button in buttons"
      :key="button.id"
      color="primary"
      text-color="white"
      :label="button.label"
      :to="button.link"
      class="buttonSize text-special-2"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: "CategoriesIntro",
});

const buttons = [
  { id: 1, label: "Séances", link: "" },
  { id: 2, label: "Cabinet", link: "" },
  { id: 3, label: "Tarifs", link: "/prices" },
];
</script>

<style>
.customLayout-3 {
  padding: 5rem;
}
.customLayout {
  padding: 3rem;
}

.customGridGap {
  gap: 5rem;
}

.buttonSize {
  height: 10rem;
}
</style>
