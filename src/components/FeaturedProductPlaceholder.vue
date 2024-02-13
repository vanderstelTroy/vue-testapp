<template>
  <div class="placeholder">
    <div class="inner">
      <div class="bar goal-amount"></div>
      <div class="description">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div class="cta"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.placeholder {
  aspect-ratio: 498 / 580;
  background: rgba(0, 0, 0, .2);
  animation: fadeIn .3s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .inner {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .bar {
    height: 32px;
    background: rgba(0, 0, 0, .2);
  }

  .goal-amount {
    margin: 20px 16px 16px 16px;
    width: 270px;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: auto 16px 24px 16px;

    .bar {
      height: 28px;

      &:nth-of-type(1) {
        width: 80%;
        margin: 0 auto;
      }

      &:nth-of-type(2) {
        width: 92%;
        margin: 0 auto;
      }

      &:nth-of-type(3) {
        width: 60%;
        margin: 0 auto;
      }
    }
  }

  .cta {
    background: rgba(0, 0, 0, .2);
    height: 48px;
    width: 100%;

    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>