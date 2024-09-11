<template>
  <q-tabs
    class="bg-accent text-black"
    :class="$q.screen.lt.md ? 'q-pa-md' : ''"
    active-color="secondary"
    indicator-color="secondary"
    stretch
    :vertical="$q.screen.lt.md"
    :animated="$q.screen.lt.md"
  >
    <template v-for="tab in tabs" :key="tab.id">
      <RoutesTabSimple v-if="tab.dropdown === null" :data="{ ...tab }" />
      <RoutesTabDropdown v-else :data="tab" />
    </template>
  </q-tabs>
  <div
    v-if="$q.screen.lt.md"
    class="flex flex-center justify-between absolute-bottom q-pa-md"
  >
    <q-btn
      color="secondary"
      :dense="$q.screen.lt.md"
      to="/appointments"
      label="Rendez-vous"
      :size="$q.screen.lt.md ? '' : ''"
      :class="$q.screen.lt.md ? 'full-width q-pa-md' : 'q-my-md'"
      :unelevated="$q.screen.lt.md"
      disable
    />
  </div>
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
    disable: false,
  },
  {
    id: 2,
    route: "/about",
    label: "Clotilde",
    dropdown: null,
    disable: false,
  },
  {
    id: 3,
    route: "/method",
    label: "La méthode",
    dropdown: [
      { id: 1, route: "/sophrology", label: "La Sophrologie", disable: false },
      { id: 2, route: "/session", label: "Les Séances", disable: false },
      {
        id: 3,
        route: "/ethics",
        label: "Codes Déontologiques",
        disable: false,
      },
    ],
    disable: false,
  },
  {
    id: 4,
    route: "/prices",
    label: "Tarifs",
    dropdown: null,
    disable: false,
  },
  {
    id: 5,
    route: "/contact",
    label: "Contact",
    dropdown: null,
    disable: false,
  },
  {
    id: 6,
    route: null,
    label: "Autres pages",
    dropdown: [
      { id: 1, route: "", label: "Foire Aux Questions", disable: true },
      { id: 2, route: "/blog", label: "Blog", disable: false },
    ],
    disable: false,
  },
];
</script>
