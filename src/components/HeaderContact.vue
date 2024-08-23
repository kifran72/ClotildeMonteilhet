<template>
  <div
    v-if="!$q.screen.lt.sm"
    class="flex separation-contact bg-secondary"
    :class="$q.screen.lt.md ? ' justify-end' : ' justify-between'"
  >
    <RouterLink
      v-if="!$q.screen.lt.md"
      to="/"
      class="name-sophrologue text-black q-ml-md"
      >Clotilde Montheillet</RouterLink
    >
    <div class="flex">
      <div
        class="flex flex-center q-pr-md"
        v-for="info in ContactInfos"
        :key="info.id"
      >
        <q-btn outline :label="info.label" class="q-my-md" />
      </div>
    </div>
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
  },
  {
    id: 2,
    label: "Contact",
  },
  {
    id: 3,
    label: "Rendez-vous",
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
