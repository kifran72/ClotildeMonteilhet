<template>
  <h1>CategoriesIntro</h1>

  <section class="q-pb-lg">
    <q-btn
      v-for="pokemon in data"
      :key="pokemon.id"
      text-color="black"
      color="secondary"
      :label="pokemon.name"
    />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const data = ref(null);

function loadData() {
  api
    .get("/pokemon")
    .then((response) => {
      data.value = response.data.results;
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        position: "top",
        message: "Loading failed",
        icon: "report_problem",
      });
    });
}

onMounted(() => {
  loadData();
});

defineOptions({
  name: "CategoriesIntro",
});
</script>
