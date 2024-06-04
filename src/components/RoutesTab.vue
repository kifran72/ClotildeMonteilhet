<template>
  <q-route-tab
    v-for="Page in Pages"
    :key="Page.id"
    :to="Page.route"
    :label="Page.label"
  />
</template>

<script setup>
defineOptions({
  name: "RoutesTab",
});

const Pages = [
  {
    id: 1,
    route: "/",
    label: "Accueil",
  },
  {
    id: 2,
    route: "/method",
    label: "La méthode",
  },
  {
    id: 3,
    route: "/contact",
    label: "Contact",
  },
];
</script>
