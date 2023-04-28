<template>
    <h2 class="wavy-text">Failure is not the opposite of success: it’s part of success</h2>
</template>

<script>
    export default {
        name:"WavyText",
    }
</script>

<style lang="scss" scoped>
.wavy-text {
  position: relative;
  display: inline-block;
  animation: wavy 2s ease-in-out infinite;
  @keyframes wavy {
    0% {
      transform: translateX(0) translateY(0) rotate(0);
    }
    10% {
      transform: translateX(-5%) translateY(-20%) rotate(-10deg);
    }
    20% {
      transform: translateX(-15%) translateY(-10%) rotate(-20deg);
    }
    30% {
      transform: translateX(-25%) translateY(-20%) rotate(-30deg);
    }
    40% {
      transform: translateX(-35%) translateY(-10%) rotate(-20deg);
    }
    50% {
      transform: translateX(-45%) translateY(-20%) rotate(-10deg);
    }
    60% {
      transform: translateX(-55%) translateY(-10%) rotate(0);
    }
    70% {
      transform: translateX(-65%) translateY(-20%) rotate(10deg);
    }
    80% {
      transform: translateX(-75%) translateY(-10%) rotate(20deg);
    }
    90% {
      transform: translateX(-85%) translateY(-20%) rotate(30deg);
    }
    100% {
      transform: translateX(-95%) translateY(-10%) rotate(20deg);
    }
  }
}

</style>