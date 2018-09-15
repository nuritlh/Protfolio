<template>
  <div class="home">

    <div class="cover-pic screen" id="home">
          <div class="nav">
            <a href="#">home</a> | 
            <a href="#professional">professional</a> | 
            <a href="#experience">experience</a> | 
            <a href="#protfolio">protfolio</a> | 
            <a href="#contact">contact</a>
          </div>
          <p class="title">I'm</p>
          <p class="title">nurit</p>
          <p class="title">Levi</p>
          <p class="title job">Full Stack Developer</p>
    </div>
      <div id="professional" class="page">professional
        <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
      </div>
      <div id="experience" class="page">experience
        <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
      </div>
      <div id="protfolio" class="page">protfolio
        <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
      </div>
      <div id="contact" class="page">contact
        <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
      </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},
  methods: {
    scrollUp() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scope>
.screen {
  position: relative;
}
.screen::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3),
    rgba(27, 77, 12, 0.75)
  );
}
.cover-pic {
  background-image: url('../assets/img/nurit.jpg');
  width: 100%;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 1s ease;
  background-position: center, center;
  z-index: 3;
}
.nav {
  color: #ffffff;
  position: absolute;
  top: 0;
  width: 100%;
}
.nav a {
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.8em;
  text-decoration: none;
  padding: 0 10px;
}
.title {
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 4em;
  margin: 10px 10px 10px 100px;
  text-align: left;
}
.job {
  font-size: 1.5em;
  font-weight: normal;
}

.page {
  height: calc(100vh);
}
</style>