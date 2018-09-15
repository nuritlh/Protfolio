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
  height: 300%;
  background-color: #5e896e;
  background: linear-gradient(rgb(93, 140, 126), rgb(47, 91, 62), #5c886f);
  scroll-behavior: smooth;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
}
</style>
