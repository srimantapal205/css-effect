<template>
    <h2 class="bouncing-text">Failure is not the opposite of success: it’s part of success</h2>
</template>

<script>
    export default {
        name:"BouncingText",
    }
</script>

<style lang="scss" scoped>
.bouncing-text {
  animation: bounce 1s ease-in-out infinite;
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
}

</style>