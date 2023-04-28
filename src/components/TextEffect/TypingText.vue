<template>
    <h2 class="typing-text ">Failure is not the opposite of success: it’s part of success</h2>
</template>

<script>
    export default {
        name:"TypingText",
    }
</script>

<style lang="scss" scoped>
.typing-text {
  overflow: hidden;
  animation: typing 5s steps(30, end) infinite;
  @keyframes typing {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
}
</style>