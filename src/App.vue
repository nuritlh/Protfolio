<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scope>
body,
html {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
