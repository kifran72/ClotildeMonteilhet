<template>
  <div
    class="column flex-center"
    :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-xl'"
  >
    <h2 class="text-secondary" style="margin: 0">Articles</h2>
    <div class="q-pt-xl" :class="$q.screen.lt.md ? 'wrapper' : 'wrapper-3'">
      <q-btn
        v-for="Article in Articles"
        :key="Article"
        flat
        no-caps
        :to="'/blog/' + Article.title.replaceAll(' ', '-')"
        class="q-pa-md"
        style="display: block"
      >
        <q-img style="height: 15rem" :src="Article.img" />
        <div class="text-left q-mt-md">
          <p class="text-bold">{{ Article.title }}</p>
          <p class="text-italic" v-if="Article.subtitle !== ''">
            {{ Article.subtitle }}
          </p>
          <p>{{ Article.text + "..." }}</p>
        </div>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import Articles from "../../../../Articles.json";
defineOptions({
  name: "ArticlesIntro",
});
</script>

<style></style>
