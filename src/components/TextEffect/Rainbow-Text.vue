<template>
    <h2 class="rainbow-text">Failure is not the opposite of success: it’s part of success</h2>
</template>

<script>
    export default {
        name:"Rainbow-Text",
    }
</script>

<style lang="scss" scoped>
@keyframes rainbow {
  0% {
    color: red;
  }
  25% {
    color: orange;
  }
  50% {
    color: yellow;
  }
  75% {
    color: green;
  }
  100% {
    color: blue;
  }
}
.rainbow-text {
  animation: rainbow 2s ease-in-out infinite;
}

</style>