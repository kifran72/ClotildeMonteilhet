<template>
  <div class="flex flex-center">
    <h2
      class="text-secondary q-pa-md"
      :style="$q.screen.lt.sm ? 'font-size: 50px' : ''"
    >
      Infos pratiques
    </h2>
  </div>
  <div
    :class="$q.screen.lt.md ? 'wrapper q-pa-md' : 'wrapper-2 q-pa-xl'"
    style="grid-gap: 2rem"
  >
    <div v-if="!$q.screen.lt.md">
      <p class="text-bold">Plan d'acces</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.9573597817907!2d-0.11029432341204175!3d45.025791062582755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48000259810d6619%3A0x32bcecf9f7587c20!2s55%20Chem.%20de%20Lauvirat%2C%2033230%20Coutras!5e0!3m2!1sfr!2sfr!4v1725391945729!5m2!1sfr!2sfr"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div :class="$q.screen.lt.md ? 'text-center' : ''">
      <p class="text-bold">Adresse :</p>

      <p>Clotilde Monteilhet</p>
      <p>55 chemin de Lauvirat, 33230 coutras</p>

      <div :class="$q.screen.lt.md ? 'flex flex-center' : 'flex flex-column'">
        <p class="text-bold">Tel</p>
        <p>:</p>
        <p class="q-pl-xs">0652505914</p>
      </div>

      <div :class="$q.screen.lt.md ? 'flex flex-center' : 'flex flex-column'">
        <p class="text-bold">mail</p>
        <p>:</p>
        <p class="q-pl-xs">monteilhetclotilde@gmail.com</p>
      </div>

      <p class="text-bold">Horaires :</p>

      <p>Lundi :</p>
      <p>Mardi :</p>
      <p>Mercredi :</p>
      <p>jeudi :</p>
      <p>Vendredi :</p>
    </div>
    <div v-if="$q.screen.lt.md">
      <p class="text-bold">Plan d'acces</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.9573597817907!2d-0.11029432341204175!3d45.025791062582755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48000259810d6619%3A0x32bcecf9f7587c20!2s55%20Chem.%20de%20Lauvirat%2C%2033230%20Coutras!5e0!3m2!1sfr!2sfr!4v1725391945729!5m2!1sfr!2sfr"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "IntroContact",
});
</script>
