<template>
  <div class="bg-primary" :class="$q.screen.lt.md ? 'wrapper' : 'wrapper-2'">
    <div :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-xl'">
      <h3 class="text-black">Mon parcours</h3>
      <p>
        Ayant eu une formation dans les arts plastiques et graphiques , j'ai mis
        toute ma creativité au service de la petite enfance pendant 15 ans. Le
        contact avec les tous petits m'a fait prendre conscience de l'importance
        du respect et de la bien veillance, de l'impact que ces methodes avaient
        sur notre corps et notre esprit. c'est pour cela que je me suis
        intéressée aux neuros sciences et à la discipline positive d'où la
        verbalisation non violente et le respect ainsi que l'écoute. Apres un
        bilan de compétence, il est ressorti les métiers du bien être et de là,
        j'ai décidé de m'interresser à la
        <RouterLink to="/sophrology"
          ><span class="text-bold text-underline specialLink">sophrologie</span>
        </RouterLink>
        et d'entreprendre une formation pour valider le titre RNCP afin de
        pouvoir continuer à aider les enfants et les adultes qui ont besoin de
        trouver des solutions pour mieux vivre et gérer leur quotidien. Mais
        aussi, tout simplement pour ceux qui ressentent le besoin d'être aidé à
        traverser une epreuve ou passer un moment compliqué de leur vie. J'aime
        aider mon prochain et ce métier de sophrologue me permet d'y parvenir.
      </p>
      <p>Clotilde</p>
    </div>
    <div :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-xl'">
      <q-img
        src="https://drive.google.com/thumbnail?id=1pedi_BbMjwWUPJ0m1o0E7heWwlgCjigf&sz=w1000"
        style="height: 92%; width: 100%"
      />
    </div>
  </div>
  <div class="text-center" style="padding: 8rem 0 8rem 0">
    <h3
      class="text-secondary"
      style="margin: 0"
      :style="$q.screen.lt.md ? 'font-size: 2rem' : ''"
    >
      Pour vous accompagner
    </h3>
    <h4 class="text-italic" style="margin: 0">“Dans le mieux être”</h4>
  </div>
</template>

<script setup>
defineOptions({
  name: "AboutTravel",
});
</script>

<style>
.specialLink {
  text-decoration: none;
  border-bottom: 1px dotted currentColor;
  outline: 0;
  transition: color 0.28s ease-in-out;
}
</style>
