<template>
  <div
    :class="$q.screen.lt.md ? 'wrapper q-pa-md' : 'wrapper-2 q-pa-xl'"
    style="grid-gap: 2rem"
  >
    <q-img
      src="https://drive.google.com/thumbnail?id=1Mn7wzaG8RZkRyqoQwv62TiJLWnEmx0Ku&sz=w1000"
    />
    <div>
      <h3 style="margin: 0">Déroulé</h3>
      <p class="text-italic">d’une séance collective en visio</p>
      <p>Séance non personnalisée, avec un thème.</p>
      <p>
        Celle ci se déroulera avec plusieurs participants, y sera intégrée
        quelques relaxations dynamiques et une sophronisation adaptée au thème
        choisi.
      </p>
      <div class="flex flex-center">
        <RouterLink to="/contact"
          ><q-btn
            flat
            label="Prendre Rendez vous"
            class="q-px-md q-py-sm bg-secondary btn-custom"
            color="white"
        /></RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "SessionCourse",
});
</script>
