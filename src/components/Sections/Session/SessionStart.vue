<template>
  <div :class="$q.screen.lt.md ? 'wrapper q-pa-md' : 'wrapper-2 q-pa-xl'">
    <div class="column flex-center">
      <h3
        class="text-special"
        :style="
          $q.screen.lt.md
            ? 'font-size:4rem;padding-bottom: 2rem'
            : 'padding-bottom: 5rem'
        "
      >
        On Commence ?
      </h3>
      <RouterLink to="/contact"
        ><q-btn
          flat
          label="Contact"
          class="q-px-md q-py-sm bg-secondary btn-custom"
          color="white"
      /></RouterLink>
    </div>
    <q-img
      src="https://drive.google.com/thumbnail?id=1Mn7wzaG8RZkRyqoQwv62TiJLWnEmx0Ku&sz=w1000"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: "SessionStart",
});
</script>
