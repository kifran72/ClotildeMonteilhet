<template>
  <PricesIntro />
  <PriceCategories />
  <PriceBusiness />
</template>

<script setup>
import PricesIntro from "src/components/Sections/Prices/PricesIntro.vue";
import PriceCategories from "src/components/Sections/Prices/PriceCategories.vue";
import PriceBusiness from "src/components/Sections/Prices/PriceBusiness.vue";

defineOptions({
  name: "PricePage",
});
</script>
