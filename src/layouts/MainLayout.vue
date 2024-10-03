<template>
  <q-layout view="hhh lpR fff">
    <q-header class="bg-accent">
      <q-toolbar :class="$q.screen.lt.md ? '' : 'wrapper-3 '">
        <q-toolbar-title class="bg-accent">
          <RouterLink
            to="/"
            class="text-black"
            :class="
              $q.screen.lt.sm ? 'name-sophrologue-phone' : 'name-sophrologue'
            "
            >Clotilde Monteilhet
          </RouterLink>
        </q-toolbar-title>
        <q-btn
          v-if="$q.screen.lt.md"
          size="lg"
          dense
          flat
          round
          icon="menu"
          color="secondary"
          @click="toggleRightDrawer"
        />
        <div class="flex justify-bettween full-height" v-if="!$q.screen.lt.md">
          <RoutesTab />
        </div>
        <div class="flex justify-end" v-if="!$q.screen.lt.md">
          <q-btn
            color="secondary"
            :dense="$q.screen.lt.md"
            to="/contact"
            label="Rendez-vous"
            :size="$q.screen.lt.md ? '' : ''"
            :class="$q.screen.lt.md ? 'full-width q-pa-md' : 'q-my-md'"
            :unelevated="$q.screen.lt.md"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay>
      <!-- drawer content -->
      <RoutesTab />
    </q-drawer>

    <q-page-container
      class="bg-accent"
      :style="
        $q.screen.lt.xl
          ? ''
          : 'display: flex; justify-content: center; flex-direction: row'
      "
    >
      <q-page :style="$q.screen.lt.xl ? '' : 'max-width: 1500px'">
        <router-view />
      </q-page>
      <!-- place QPageScroller at end of page -->
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="secondary" />
      </q-page-scroller>
    </q-page-container>

    <q-footer class="bg-black text-white">
      <FooterInfos />
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import RoutesTab from "../components/RoutesTab/RoutesTab.vue";
import FooterInfos from "../components/FooterInfos.vue";

const rightDrawerOpen = ref(false);
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>
