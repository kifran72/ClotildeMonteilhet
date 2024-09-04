<template>
  <q-page class="flex">
    <q-img style="max-height: 30rem" :src="ContentArticle.img" />
    <div class="q-pa-xl">
      <p class="text-bold">{{ ContentArticle.title }}</p>
      <p class="text-italic" v-if="ContentArticle.subtitle !== ''">
        {{ ContentArticle.subtitle }}
      </p>
      <p>{{ ContentArticle.text }}</p>
      <div v-for="content in ContentArticle.content" :key="content">
        <p class="text-bold">{{ content.title }}</p>
        <p>{{ content.text }}</p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";
import Articles from "../../Articles.json";

const Router = useRouter();
const NameArticle = Router.currentRoute.value.params.nameArticle.replaceAll(
  "-",
  " "
);
const ContentArticle = Articles.find((value) => value.title === NameArticle);

defineOptions({
  name: "BlogPage",
});
</script>
