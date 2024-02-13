<script setup lang="ts">
import { defineProps, onMounted, reactive, ref } from 'vue';

interface Props {
  emailDescription: string;
  donationGoal: string;
  donationAmount: string;
  url: string;
}

interface Styles {
  transform?: string;
}

const props = defineProps<Props>();
const styleObject: Styles = reactive({});
let mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

const viewProgress = () => {
  if (props.donationAmount > 500) {
    styleObject.transform = `skew(-12deg) translateX(calc(-${100 - (props.donationAmount / props.donationGoal * 100)}% - 3px))`;
  }
};

function wrapWords(text: string, words: number, wrap: string, wrapEachWord = false) {
  if (!text) return '';

  let contentArr = text.split(' ');

  if (wrapEachWord) {
    for (let i = 0; i < words; i++) {
      contentArr[i] = `<${wrap}>${contentArr[i]}</${wrap}>`;
    }
  } else {
    contentArr[0] = `<${wrap}>${contentArr[0]}`;
    contentArr[words - 1] = `${contentArr[words - 1]}</${wrap}>`;
  }

  return contentArr.join(' ');
}
</script>

<template>
  <div class="featured-product">
    <div class="progress"><span :style="styleObject"></span></div>
    <Transition @after-enter="viewProgress">
      <div class="inner" v-if="mounted">
        <div class="goal-amount">
          <p><span>&euro;{{ props.donationAmount }}</span> van &euro;{{ props.donationGoal }}</p>
        </div>
        <p class="description" v-html="wrapWords(props.emailDescription, 1, 'span')"></p>
        <a class="cta" :href="props.url">Speel mee vanaf 2.-</a>
      </div>
    </Transition>
    <a class="link" :href="props.url" target="_blank"></a>
  </div>
</template>

<style scoped lang="scss">
$purple: #8A27B3;
$yellow-green: #C9FF45;

.v-enter-active,
.v-leave-active {
  transition: opacity .6s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.featured-product {
  position: relative;
  display: flex;
  flex-direction: column;
  aspect-ratio: 498 / 580;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

  &:hover {
    .description {
      transform: translateY(-50px);
    }

    .cta {
      transform: translateY(0);
    }
  }

  .link {
    position: absolute;
    inset: 0;
  }

  .inner {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../assets/images/crowdfunding-bg.jpg') center / cover no-repeat;
  }

  .progress {
    pointer-events: none;
    overflow: hidden;
    position: absolute;
    transform: translateY(-16px);
    height: 20px;
    width: 100%;
    z-index: 1;

    span {
      position: absolute;
      transform: skew(-12deg) translateX(calc(-100% - 3px));
      height: 100%;
      width: 100%;
      background-color: $yellow-green;
      transition: transform .6s;
    }

    @media (min-width: 768px) {
      height: 28px;
    }
  }

  .goal-amount {
    margin: 16px 0 0 16px;
    font-size: 1.5rem;
    color: white;
    text-transform: uppercase;

    span {
      color: $yellow-green;
    }
  }

  .description {
    align-self: flex-end;
    text-align: center;
    padding: 0 12px;
    margin: auto 0 24px 0;
    color: white;
    font-size: 2rem;
    line-height: 32.8px;
    text-transform: uppercase;
    transition: transform .3s;

    :deep(span) {
      color: $yellow-green;
    }
  }

  .cta {
    padding: 16px;
    font-size: 1rem;
    line-height: 1rem;
    color: $purple;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    background-color: $yellow-green;
    transition: transform .3s;

    @media (min-width: 768px) {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateY(100%);
    }
  }
}
</style>