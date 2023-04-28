<template>
    <h2 class="shake-text">Failure is not the opposite of success: it’s part of success</h2>
</template>

<script>
    export default {
        name:"ShakeText",
    }
</script>

<style lang="scss" scoped>
.shake-text {
  animation: shake 0.5s linear infinite;
}

@keyframes shake {
  0% { transform: translateX(0); }
  10% { transform: translateX(-10px); }
  20% { transform: translateX(10px); }
  30% { transform: translateX(-10px); }
  40% { transform: translateX(10px); }
  50% { transform: translateX(-10px); }
  60% { transform: translateX(10px); }
  70% { transform: translateX(-10px); }
  80% { transform: translateX(10px); }
  90% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
}


</style>