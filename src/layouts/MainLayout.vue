<template>
  <q-layout view="hhh lpR fff">
    <q-header>
      <HeaderContact />
      <q-toolbar :class="$q.screen.lt.md ? '' : 'wrapper-3'">
        <q-toolbar-title class="bg-primary q-ml-xs">
          <p class="name-sophrologue text-black">
            <RouterLink to="/">Clotilde Montheillet</RouterLink>
          </p>
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
        <CategoriesLinks v-if="!$q.screen.lt.md" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
      <DrawerContent />
    </q-drawer>

    <q-page-container class="bg-accent">
      <router-view />
      <!-- place QPageScroller at end of page -->
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="secondary" />
      </q-page-scroller>
    </q-page-container>

    <q-footer class="bg-primary text-white">
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
import CategoriesLinks from "../components/CategoriesLinks.vue";
import HeaderContact from "../components/HeaderContact.vue";
import DrawerContent from "src/components/DrawerContent.vue";

const rightDrawerOpen = ref(false);
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
</script>

<style>
.separation-contact {
  border-style: dotted;
  border-width: 0px 0px 1px 0px;
  border-color: #ffffff;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
}
</style>
