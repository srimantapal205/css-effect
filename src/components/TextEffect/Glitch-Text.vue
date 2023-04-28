<template>
    <h2 class="glitch-text">Failure is not the opposite of success: it’s part of success</h2>
</template>

<script>
    export default {
        name:"Glitch-Text",
    }
</script>

<style lang="scss" scoped>
.glitch-text {
  animation: glitch 1s infinite;
}
@keyframes glitch {
  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f, 0 0 75px #00f;
  }
  20% {
    text-shadow: none;
  }
  40% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #f00, 0 0 30px #f00, 0 0 40px #f00, 0 0 50px #f00, 0 0 75px #f00;
  }
  60% {
    text-shadow: none;
  }
  80% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0f0, 0 0 30px #0f0, 0 0 40px #0f0, 0 0 50px #0f0, 0 0 75px #0f0;
  }
  100% {
    text-shadow: none;
  }
}

</style>