<template>
  <div :class="$q.screen.lt.md ? 'wrapper q-pa-md' : 'wrapper-2 q-pa-xl'">
    <h3
      v-if="$q.screen.lt.md"
      class="text-special text-center"
      :style="
        $q.screen.lt.md
          ? 'font-size:4rem;padding-bottom: 2rem;padding-top: 2rem'
          : 'padding-bottom: 5rem'
      "
    >
      On Commence ?
    </h3>
    <q-img
      v-if="$q.screen.lt.md"
      src="https://drive.google.com/thumbnail?id=1Mn7wzaG8RZkRyqoQwv62TiJLWnEmx0Ku&sz=w1000"
      :style="$q.screen.lt.md ? '' : 'max-height: 40rem; height: 40rem'"
    />
    <div class="column flex-center">
      <h3
        v-if="!$q.screen.lt.md"
        class="text-special"
        :style="
          $q.screen.lt.md
            ? 'font-size:4rem;padding-bottom: 2rem;padding-top: 2rem'
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
          :class="$q.screen.lt.md ? 'q-mt-md' : ''"
          color="white"
      /></RouterLink>
    </div>
    <q-img
      v-if="!$q.screen.lt.md"
      src="https://drive.google.com/thumbnail?id=1Mn7wzaG8RZkRyqoQwv62TiJLWnEmx0Ku&sz=w1000"
      :style="$q.screen.lt.md ? '' : 'max-height: 40rem; height: 40rem'"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: "SessionStart",
});
</script>
