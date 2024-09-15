<template>
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
    <div class="flex flex-center q-pa-xl">
      <RouterLink to="/blog"
        ><q-btn
          flat
          label="Page articles"
          class="q-px-md q-py-sm bg-secondary btn-custom"
          color="white"
          style="font-size: 20px"
      /></RouterLink>
    </div>
  </div>
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
