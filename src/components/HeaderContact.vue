<template>
  <div v-if="!$q.screen.lt.sm" class="flex justify-end separation-contact">
    <div
      class="text-black flex flex-center q-pr-md"
      v-for="info in ContactInfos"
      :key="info.id"
    >
      <q-avatar :icon="info.icon" /> {{ info.text }}
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
    text: "+33 6 00 00 00 00",
    icon: "phone_enabled",
  },
  {
    id: 2,
    text: "info@exemple.fr",
    icon: "mail_outline",
  },
  {
    id: 3,
    text: "Lun - Ven : 9:00 - 18:30",
    icon: "schedule",
  },
];
</script>
