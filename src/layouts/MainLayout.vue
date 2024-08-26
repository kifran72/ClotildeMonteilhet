<template>
  <q-layout view="hhh lpR fff">
    <q-header>
      <div
        v-if="!$q.screen.lt.md"
        class="bg-primary"
        :class="$q.screen.lt.md ? '' : 'flex justify-end separation-contact'"
      >
        <div class="flex">
          <HeaderContact />
        </div>
      </div>

      <q-toolbar :class="$q.screen.lt.md ? '' : 'wrapper-3'">
        <q-toolbar-title class="bg-primary">
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
        <div class="flex justify-bettween full-height">
          <RoutesTab v-if="!$q.screen.lt.md" />
        </div>
        <div class="flex justify-end no-wrap">
          <SocialLinks v-if="!$q.screen.lt.md" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay>
      <!-- drawer content -->
      <RoutesTab />
    </q-drawer>

    <q-page-container class="bg-accent">
      <q-page>
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
import SocialLinks from "../components/RoutesTab/SocialLinks.vue";
import HeaderContact from "../components/RoutesTab/HeaderContact.vue";
import FooterInfos from "../components/FooterInfos.vue";

const rightDrawerOpen = ref(false);
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>
