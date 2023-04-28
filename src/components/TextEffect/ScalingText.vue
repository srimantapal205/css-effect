<template>
    <h2 class="scaling-text">Failure is not the opposite of success: it’s part of success</h2>
</template>

<script>
    export default {
        name:"ScalingText",
    }
</script>

<style lang="scss" scoped>
.scaling-text {
  animation: scale 2s ease-in-out infinite;
  @keyframes scale {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
}
</style>