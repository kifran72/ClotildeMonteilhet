<template>
  <div
    class="q-pa-xl specialGridGap-2 fontSizeFooter"
    :class="!$q.screen.lt.md ? 'customWrapper' : 'wrapper-2'"
  >
    <img
      alt="Quasar logo"
      src="https://drive.google.com/thumbnail?id=1ebgsfR3mVpFKbffCUdr0uFNLMPpjC0h6&sz=w1000"
      style="width: 70%; height: auto"
    />
    <div class="column justify-between">
      <div>
        <p class="text-bold">Clotilde Monteilhet</p>
        <p class="text-italic">Sophrologue</p>
      </div>
      <div>
        <p>55 chemin de lauvirat</p>
        <p>33230 Coutras</p>
      </div>
    </div>
    <div>
      <p class="text-bold">LIENS</p>
      <RouterLink to="/"><p>Accueil</p></RouterLink>
      <p>Partenaires</p>
      <RouterLink to="/contact"><p>Contact</p></RouterLink>
    </div>
    <div>
      <p class="text-bold">A PROPOS</p>
      <RouterLink to="/about"><p>Qui je suis</p></RouterLink>
      <RouterLink to="/blog"><p>Blog</p></RouterLink>
      <p>Mentions légales</p>
    </div>
    <div>
      <p class="text-bold">RÉSEAUX</p>
      <SocialLinks />
    </div>
  </div>
</template>

<script setup>
import SocialLinks from "./SocialLinks.vue";
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

.fontSizeFooter p {
  font-size: small;
}
</style>
