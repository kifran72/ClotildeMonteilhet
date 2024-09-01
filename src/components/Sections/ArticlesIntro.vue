<template>
  <div class="column flex-center q-pa-xl">
    <h2 class="text-secondary" style="margin: 0">Articles</h2>
    <div
      class="q-pt-xl specialGridGap-2"
      :class="$q.screen.lt.md ? 'wrapper ' : 'wrapper-3'"
    >
      <div v-for="Article in Articles" :key="Article">
        <q-img style="height: 15rem" :src="Article.img" />
        <p class="text-bold">{{ Article.title }}</p>
        <p class="text-italic" v-if="Article.subtitle !== ''">
          {{ Article.subtitle }}
        </p>
        <p>{{ Article.text + "..." }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "ArticlesIntro",
});

const Articles = [
  {
    img: "https://drive.google.com/thumbnail?id=1E9Bv7ZjVyB5gnUuuNlLE3mV8hGTfNseY&sz=w1000",
    title: "Les Bienfaits de la Sophrologie",
    subtitle: "Un Chemin Vers l'Équilibre et le Bien-Être",
    text: "La sophrologie, méthode de relaxation dynamique créée par le neuropsychiatre Alfonso Caycedo dans les années 1960, est aujourd'hui largement reconnue pour ses nombreux bienfaits sur la santé mentale et physique. En combinant des techniques de respiration, de relaxation musculaire, et de visualisation positive, la sophrologie vise à harmoniser le corps et l'esprit. Cet article explore ce que la sophrologie peut apporter à ceux qui la pratiquent régulièrement.",
  },
  {
    img: "https://drive.google.com/thumbnail?id=1TXbs11bqJLZsDgH_baia9eEc4fyOpFld&sz=w1000",
    title: "Les Bienfaits de la Sophrologie pour les Enfants",
    subtitle: "",
    text: "La sophrologie, une discipline fondée par Alfonso Caycedo dans les années 1960, est souvent associée à la relaxation et à la gestion du stress chez les adultes. Cependant, ses bienfaits s'étendent également aux enfants. Dans un monde où les jeunes sont de plus en plus confrontés à des situations stressantes, la sophrologie apparaît comme un outil précieux pour les aider à mieux gérer leurs émotions, à développer leur concentration, et à favoriser leur bien-être global",
  },
  {
    img: "https://drive.google.com/thumbnail?id=1IgThk8DblvaWUu6mQB73hwm73_iE4PlQ&sz=w1000",
    title: "Les Bienfaits de la Sophrologie",
    subtitle: "Un Outil Doux pour un Développement Harmonieux",
    text: "La sophrologie, bien que souvent associée aux adultes et aux enfants plus âgés, peut également être adaptée pour les bébés. Cette méthode douce, qui combine des techniques de relaxation, de respiration, et de visualisation, peut offrir de nombreux bienfaits dès les premiers mois de vie. Cet article explore comment la sophrologie peut être un atout précieux pour le bien-être et le développement des bébés",
  },
];
</script>

<style></style>
