<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/text-design-effect">Text Design</router-link> |
    <router-link to="/anchor-Link-design-effect">Link Design</router-link> |
    <router-link to="/button-design-effect">Button Design</router-link> |
    <router-link to="/image-text-design">Image Text</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <section class="container">
    <router-view/>
  </section>
  
</template>

<style lang="scss">
.container{
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
