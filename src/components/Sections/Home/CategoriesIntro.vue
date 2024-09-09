<template>
  <div
    class="bg-primary"
    :class="$q.screen.lt.md ? 'customLayout' : 'customLayout-3'"
  >
    <div :class="$q.screen.lt.md ? 'wrapper' : 'wrapper-3 customGridGap'">
      <div v-for="button in buttons" :key="button.id" class="flex flex-center">
        <q-btn
          :label="button.label"
          :to="button.link"
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
  name: "CategoriesIntro",
});

const buttons = [
  { id: 1, label: "Séances", link: "/session" },
  { id: 2, label: "Cabinet", link: "/contact" },
  { id: 3, label: "Tarifs", link: "/prices" },
];
</script>

<style>
.customLayout-3 {
  padding: 5rem;
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
