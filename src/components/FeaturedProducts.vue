<script setup>
import { useQuery } from '@vue/apollo-composable';
import { ALL_GAMES } from '@/graphql/queries.js';
import FeaturedProductPlaceholder from '@/components/FeaturedProductPlaceholder.vue';
import FeaturedProduct from '@/components/FeaturedProduct.vue';

const {result} = useQuery(ALL_GAMES);
</script>

<template>
  <div class="container">
    <template v-if="!result?.games">
      <FeaturedProductPlaceholder :key="1"></FeaturedProductPlaceholder>
      <FeaturedProductPlaceholder :key="2"></FeaturedProductPlaceholder>
      <FeaturedProductPlaceholder :key="3"></FeaturedProductPlaceholder>
    </template>
    <FeaturedProduct
        v-for="game of result?.games"
        :key="game.id"
        :url="game.url"
        :email-description="game.emailDescription"
        :donation-amount="game.donationAmount"
        :donation-goal="game.donationGoal">
    </FeaturedProduct>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  margin: 0 4px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>