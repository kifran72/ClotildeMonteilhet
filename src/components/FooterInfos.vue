<template>
  <div
    class="q-pa-xl specialGridGap"
    :class="!$q.screen.lt.md ? 'customWrapper' : 'wrapper-2'"
  >
    <img
      alt="Quasar logo"
      src="https://drive.google.com/thumbnail?id=1UQvo9pqOWyhhHzeWuvnTOJQuLc25xar4&sz=w1000"
      style="width: 100%; height: auto"
    />
    <div class="column justify-between">
      <div>
        <p>Clotilde Monteilhet</p>
        <p>Sophrologue</p>
      </div>
      <div>
        <p>55 chemin de lauvirat</p>
        <p>33230 Coutras</p>
      </div>
    </div>
    <div>
      <p class="specialBold">LIENS</p>
      <p>Accueil</p>
      <p>Partenaires</p>
      <p>Contact</p>
    </div>
    <div>
      <p class="specialBold">A PROPOS</p>
      <p>Qui je suis</p>
      <p>Blog</p>
      <p>Mentions légales</p>
    </div>
    <div class="socialLinkcolor">
      <p class="specialBold">RÉSEAUX</p>
      <SocialLinks />
    </div>
  </div>
</template>

<script setup>
import SocialLinks from "./RoutesTab/SocialLinks.vue";
defineOptions({
  name: "FooterInfos",
});
</script>

<style>
.customWrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

.socialLinkcolor button {
  color: white !important;
}

.fontSizeFooter p {
  font-size: medium;
}

.specialGridGap {
  grid-gap: 2rem;
}

.specialBold {
  font-weight: bold;
}
</style>
