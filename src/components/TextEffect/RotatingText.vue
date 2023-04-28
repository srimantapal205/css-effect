<template>
    <h2 class="rotating-text">Failure is not the opposite of success: it’s part of success</h2>
</template>

<script>
    export default {
        name:"RotatingText",
    }
</script>

<style lang="scss" scoped>
.rotating-text {
  animation: rotate 4s linear infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>