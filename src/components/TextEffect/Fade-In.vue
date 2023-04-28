<template>
    <h2 class="fade-in-text">Failure is not the opposite of success: it’s part of success</h2>
</template>

<script>
    export default {
        name:"Fade-In",
    }
</script>

<style lang="scss" scoped>
.fade-in-text {
  opacity: 0;
  animation: fade-in 2s forwards;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>