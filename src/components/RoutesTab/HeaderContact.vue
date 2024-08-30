<template>
  <div
    v-if="!$q.screen.lt.md"
    :class="$q.screen.lt.md ? '' : 'flex flex-center q-pr-md'"
  >
    <div
      v-for="info in ContactInfos"
      :key="info.id"
      class="flex flex-center q-pr-md text-black"
    >
      <q-icon :name="info.name" class="q-pr-sm" />
      {{ info.text }}
    </div>
  </div>
  <div
    :class="
      $q.screen.lt.md ? 'flex flex-center q-pa-sm' : 'flex flex-center q-pr-md'
    "
  ></div>
</template>

<script setup>
defineOptions({
  name: "HeaderContact",
});
const ContactInfos = [
  {
    id: 1,
    name: "fa fa-phone",
    text: "+33 6 00 00 00 00",
  },
  {
    id: 2,
    name: "far fa-envelope",
    text: "info@exemple.fr",
  },
  {
    id: 3,
    name: "far fa-clock",
    text: "Lun - Ven : 9:00 - 18:30",
  },
];
</script>
