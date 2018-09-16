<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scope>
* {
  box-sizing: border-box;
}

@font-face {
  font-family: 'Maven Pro';
  src: url('./assets/fonts/mavenPro/MavenPro-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/montserrat/Montserrat-Regular.ttf')
    format('truetype');
}

@font-face {
  font-family: 'Montserrat-bold';
  src: url('./assets/fonts/montserrat/Montserrat-Bold.ttf') format('truetype');
}

body,
html {
  margin: 0;
  padding: 0;
  height: 300%;
  background-color: #5e896e;
  background: linear-gradient(rgb(93, 140, 126), rgb(47, 91, 62), #5c886f);
  scroll-behavior: smooth;
  font-family: Montserrat, cursive;
}

#app {
  text-align: center;
  color: #ffffff;
}
</style>
