<template>
  <div :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-xl'">
    <h3 class="text-bold text-center" style="margin: 0">Foire aux questions</h3>
    <div class="flex flex-center">
      <q-img
        class="q-mt-xl"
        src="https://drive.google.com/thumbnail?id=11FGTylnx29E16sHxkOul__CJxHCnrWUa&sz=w1000"
        style="max-width: 35rem"
      />
    </div>
    <div v-for="question in Questions" :key="question" class="q-pt-xl">
      <p class="text-bold">{{ question.title }}</p>
      <p>{{ question.content }}</p>
      <div v-if="question.subContent !== null">
        <div v-for="content in question.subContent" :key="content">
          <p>{{ content }}</p>
        </div>
      </div>
    </div>
    <h4 class="text-secondary text-center">
      Une autre question sur la Sophrologie ?
    </h4>
    <div class="flex flex-center q-pa-xl">
      <RouterLink to="/contact"
        ><q-btn
          flat
          label="Contact"
          class="q-px-md q-py-sm bg-secondary btn-custom"
          color="white"
          style="font-size: 20px"
      /></RouterLink>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "FrequentlyAskedQuestions",
});

const Questions = [
  {
    title: "Quelle est la différence entre sophrologie et hypnose ?",
    content:
      "Là où l’hypnose ne mobilise que l’esprit, la sophrologie donne aux sensations corporelles une place prépondérante dans ses techniques.Contrairement à l’hypnose, la sophrologie amène la personne qui la pratique à rester pleinement consciente. Guidée par le sophrologue pendant la séance ou en totale autonomie entre les séances, elle est actrice de ses expériences et du changement qui en résulte.",
    subContent: null,
  },
  {
    title: "Quelle est la différence entre sophrologie et relaxation ?",
    content:
      "Les méthodes de relaxation sont complémentaires des techniques sophrologiques. Elles facilitent la détente, le relâchement musculaire et mental. Les exercices de relaxation vous offrent :",
    subContent: [
      "• Un rééquilibrage entre le corps et l’esprit",
      "• Une plage de calme et de sérénité",
      "• Un moment de paix intérieure sans stress toxique",
      "• Une pause totale de détente, de plaisir et de bien-être",
    ],
  },
  {
    title: "Combien de temps dure une séance ?",
    content:
      "Les séances durent environ 1 heure en consultation individuelle, et entre 45mn et 1h15 pour les séances de groupe. La première consultation individuelle dure environ  1h30. Celle-ci est essentielle pour faire connaissance. Elle me permet d’identifier vos attentes, vos besoins, et vos antécédents, d’analyser l’impact de votre problématique sur votre vie, de fixer des objectifs et de construire votre plan d’accompagnement personnalisé (nombre de séances, durée, exercices et techniques). Nous nous engageons alors ensemble sur un parcours commun fondé sur le dialogue et sur la confiance.",
    subContent: null,
  },
  {
    title: "Faut-il une tenue particulière pour pratiquer la sophrologie ?",
    content:
      "Vous pouvez pratiquer la sophrologie sur votre lieu de travail. Il suffit de retirer ceinture et chaussures pour trouver la posture la plus confortable pour pratiquer les exercices de sophrologie et de relaxation. Je conseille de prévoir des chaussons de sport ou des chaussures souples, ainsi qu’un plaid pour se réchauffer lors de certaines techniques. Un tapis de yoga est nécessaire pour la pratique en groupe des techniques de relaxation et de certaines techniques sophroniques.",
    subContent: null,
  },
  {
    title: "Comment se déroule une séance ?",
    content:
      "Elle repose avant tout sur l’écoute active et sur la bienveillance du thérapeute.",
    subContent: [
      "1. Chaque séance débute par une phase d’échange et de dialogue.",
      "2. Elle est suivie par des techniques de relaxation, de sophro-relaxation énergétique visant, selon les besoins, à travailler le relâchement corporel et mental, ou la dynamisation, et par des techniques sophroniques : en état de conscience modifié, entre veille et sommeil (niveau sophroliminal), je vous guide dans des exercices adaptés à votre situation et au plan d’accompagnement défini lors de la première séance",
      "3. Phase de dialogue et d’échange pour exprimer vos ressentis",
    ],
  },
  {
    title: "Ai-je besoin de beaucoup de séances ?",
    content:
      "Chaque cas est unique. Selon les besoins, il faut généralement compter entre 6 et 10 séances. Pour une préparation mentale (examen, compétition sportive…), pour l’arrêt du tabac ou une thérapie, un travail d’accompagnement sur le plus long terme est nécessaire.",
    subContent: null,
  },
  {
    title: "Dans quelle position se déroule une séance ?",
    content:
      "Selon les techniques de relaxation ou sophroniques, vous pouvez pratiquer debout, assis(e) ou couché(e).",
    subContent: null,
  },
  {
    title: "La sophrologie peut-elle se substituer à un traitement médical ?",
    content:
      "En aucun cas, la sophrologie peut remplacer l’avis et la prescription d’un médecin. Elle vient en complément de toute pratique médicale. Le rôle du sophrologue, s’il en ressent la nécessité, est de vous orienter vers un professionnel de la médecine adapté à votre problématique. Il dirige également le client sur un thérapeute compétent et dûment qualifié qui nécessite une aide qui ne relève pas de ses compétences. Il assure avec discrétion et compétence son rôle d’auxiliaire de la santé avec les autres professionnels. Le sophrologue s’engage à respecter les cadres et limites de ses compétences, à informer et justifier de celles-ci auprès de ses clients. Il ne concurrence pas les professionnels de la santé. Il ne pose pas de diagnostic médical, n’influence pas les choix thérapeutiques de ses clients et n’interfère pas dans les traitements en cours.",
    subContent: null,
  },
  {
    title: "Y a-t-il des contre-indications à la sophrologie ?",
    content:
      "Il n’y a pas de contre-indications à la pratique des techniques sophrologiques. En fonction de la personne consultante, j’adapte mes pratiques, si besoin.",
    subContent: null,
  },
  {
    title: "La sophrologie est-elle remboursée par ma mutuelle ?",
    content:
      "A l’heure actuelle, de nombreux organismes, telles que la Chambre syndicale de la Sophrologie et la Société française de Sophrologie, œuvrent pour faire reconnaitre cette méthode et favoriser son développement et son insertion dans les différents secteurs de la santé. De nombreuses mutuelles ont bien compris que proposer le remboursement de la sophrologie était un argument commercial fort. Certaines d’entre elles proposent un remboursement partiel des séances avec un plafond annuel ou un remboursement total d’un nombre de séances limité comme c’est déjà pratiqué pour les séances d’ostéopathie. A l’issue de la séance, à votre demande, j’édite une facture que vous transmettrez ensuite à votre mutuelle pour remboursement. Le nombre de mutuelles intégrant la sophrologie dans leurs garanties évoluant sans cesse, je vous invite à vous renseigner auprès de votre mutuelle et à consulter régulièrement la liste des mutuelles communiquée par les organismes et syndicats professionnels de sophrologie : \nhttps://www.chambre-syndicale-sophrologie.fr/la-sophrologie/mutuelle-sophrologie-sophrologue/",
    subContent: null,
  },
  {
    title: "Le sophrologue est-il tenu au secret professionnel ?",
    content:
      "Le sophrologue est tenu au respect absolu du secret professionnel envers ses clients, de manière à assurer la protection du cadre d’exercice professionnel.",
    subContent: null,
  },
];
</script>
