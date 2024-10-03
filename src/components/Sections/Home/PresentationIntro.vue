<template>
  <q-img
    src="https://drive.google.com/thumbnail?id=1FSQXucvIuqOer23aDX04R171tGVrKUy-&sz=w1000"
  >
    <div
      v-if="!$q.screen.lt.md"
      class="absolute-full bg-transparent text-subtitle2 flex flex-center"
    >
      <div class="content-center text-white">
        <h2 class="text-special text-white">Bienvenue!</h2>
        <h4 class="q-pt-md text-white">
          Je suis Clotilde Monteilhet, Sophrologue à Coutras
        </h4>
        <p>
          À votre écoute pour vous accompagner dans votre bien-être personnel.
        </p>
        <div class="flex flex-center q-pt-xl">
          <RouterLink to="/about">
            <q-btn
              flat
              label="En savoir + sur moi"
              class="q-px-md q-py-sm bg-secondary btn-custom"
              color="white"
            />
          </RouterLink>
        </div>
      </div>
    </div>
    <div
      v-else
      class="absolute-full bg-transparent text-subtitle2 flex flex-center"
    >
      <h2 class="text-special text-white">Bienvenue!</h2>
    </div>
  </q-img>
  <div class="full-width q-pa-xl" v-if="$q.screen.lt.md">
    <div class="text-center">
      <h4 :class="$q.screen.lt.md ? 'no-pt-mobile' : 'q-pt-md'">
        Je suis Clotilde Monteilhet, Sophrologue à Coutras
      </h4>
      <p>
        À votre écoute pour vous accompagner dans votre bien-être personnel.
      </p>
    </div>
    <div class="flex flex-center q-pt-xl">
      <RouterLink to="/about">
        <q-btn
          flat
          label="En savoir + sur moi"
          class="q-px-md q-py-sm bg-secondary btn-custom"
          color="white"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";

defineOptions({
  name: "PresentationIntro",
});

const $q = useQuasar();
</script>

<style>
.btn-custom {
  border-radius: 5px 5px 5px 5px;
}

.no-pt-mobile {
  margin-top: 0 !important;
}
</style>
