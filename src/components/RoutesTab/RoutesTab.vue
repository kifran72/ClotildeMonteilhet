<template>
  <q-tabs
    class="bg-primary text-black"
    active-color="accent"
    indicator-color="black"
    stretch
    :vertical="$q.screen.lt.md"
    :animated="$q.screen.lt.md"
  >
    <template v-for="tab in tabs" :key="tab.id">
      <RoutesTabSimple v-if="tab.dropdown === null" :data="tab" />
      <RoutesTabDropdown v-else :data="tab" />
    </template>
  </q-tabs>
</template>

<script setup>
import RoutesTabSimple from "./RoutesTabSimple.vue";
import RoutesTabDropdown from "./RoutesTabDropdown.vue";

defineOptions({
  name: "RoutesTab",
});

const tabs = [
  {
    id: 1,
    route: "/",
    label: "Accueil",
    dropdown: null,
  },
  {
    id: 2,
    route: "/about",
    label: "Clotilde",
    dropdown: null,
  },
  {
    id: 3,
    route: "/method",
    label: "La méthode",
    dropdown: [
      { id: 1, route: "", label: "La Sophrologie" },
      { id: 2, route: "", label: "Les Séances" },
      { id: 3, route: "", label: "Codes Déontologiques" },
    ],
  },
  {
    id: 4,
    route: "/prices",
    label: "Tarifs",
    dropdown: null,
  },
  {
    id: 5,
    route: null,
    label: "Autres pages",
    dropdown: [
      { id: 1, route: "", label: "Foire Aux Questions" },
      { id: 1, route: "/blog", label: "Blog" },
    ],
  },
];
</script>
