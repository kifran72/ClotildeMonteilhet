<template>
  <q-layout view="hhh lpR fff">
    <q-header>
      <HeaderContact />
      <q-toolbar :class="$q.screen.lt.md ? '' : 'wrapper-2'">
        <q-toolbar-title
          class="bg-primary"
          v-if="$q.screen.lt.sm || $q.screen.lt.md"
        >
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
        <div class="flex justify-start">
          <RoutesTab v-if="!$q.screen.lt.md" />
        </div>
        <SocialLinks v-if="!$q.screen.lt.md" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
      <RoutesTab />
    </q-drawer>

    <q-page-container class="bg-accent">
      <q-page class="q-px-xl">
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
      <q-toolbar>
        <q-toolbar-title>
          <div>footer</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import RoutesTab from "../components/RoutesTab/RoutesTab.vue";
import SocialLinks from "../components/SocialLinks.vue";
import HeaderContact from "../components/HeaderContact.vue";

const rightDrawerOpen = ref(false);
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>
