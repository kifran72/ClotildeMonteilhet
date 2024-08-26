<template>
  <div
    :class="$q.screen.lt.md ? '' : 'flex flex-center q-pr-md'"
    v-for="info in ContactInfos"
    :key="info.id"
  >
    <q-btn
      outline
      color="white"
      :dense="$q.screen.lt.md"
      :to="info.link"
      :label="info.label"
      :size="$q.screen.lt.md ? '' : ''"
      :class="$q.screen.lt.md ? '' : 'q-my-md'"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: "HeaderContact",
});
const ContactInfos = [
  {
    id: 1,
    label: "Mon compte",
    link: "/account",
  },
  {
    id: 2,
    label: "Contact",
    link: "/contact",
  },
  {
    id: 3,
    label: "Rendez-vous",
    link: "/appointments",
  },
];
</script>

<style>
.separation-contact {
  border-style: initial;
  border-width: 0px 0px 1px 0px;
  border-color: #ffffff;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
}
</style>
