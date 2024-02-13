<script setup>
import FeaturedProductList from '@/components/FeaturedProducts.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <h2>Meer crowdfundings</h2>
      <RouterLink to="/" class-active="active">Alles bekijken</RouterLink>
    </div>
    <FeaturedProductList></FeaturedProductList>
    <div class="pre-footer">
      <RouterLink to="/" class-active="active">Alles bekijken</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin: 62px 0 100px;

  @media (min-width: 768px) {
    margin: 88px 0;
  }
}

.header {
  text-align: center;
  margin: 0 40px 44px 40px;

  @media (min-width: 768px) {
    display: flex;
  }

  a {
    display: none;
    margin-left: auto;

    @media (min-width: 768px) {
      display: block;
    }
  }
}

h2 {
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: white;
  text-transform: uppercase;
}

a {
  overflow: hidden;
  position: relative;
  padding: 0 2px;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: white;
  text-transform: uppercase;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: white;
  }
}

.pre-footer {
  margin-top: 27px;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
}
</style>