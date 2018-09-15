<template>
  <div class="home">

    <div class="cover-pic screen" id="home">
          <div class="nav">
            <a href="#">home</a> | 
            <a href="#professional">professional</a> | 
            <a href="#protfolio">protfolio</a> | 
            <a href="#experience">experience</a> | 
            <a href="#contact">contact</a>
          </div>
          <div class="name">
            <p class="title">I'm</p>
            <p class="title">nurit</p>
            <p class="title">Levi</p>
            <p class="title job">Full Stack Developer</p>
          </div>
          <div class="about">
            <p>Full Stack Developer, Passionate about technology, Striving to be the best, Independent in my doing & thinking.</p>
            <p>Created advanced single page applications using Vue.js, Vuex state management, components, routing, node.js and
              more.
            </p>
            <p>Have a degree in Industrial Engineering, Major in Information Systems, Graduate Full Stack, Web application boot-camp
              at Coding-Academy.
            </p>
            <p>Outgoing and detail-oriented, I am proficient at building and maintaining professional relationships.</p>
          </div>
    </div>
    <div class="page-container">
        <div id="professional" class="page">
          <div class="page-title">
            professional
            <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
          </div>
          <div class="content">
            <div>
              <img class="img-logo" src="../assets/img/ES6LOGO.svg">
              <img  class="img-logo" src="../assets/img/html.svg">
              <img  class="img-logo" src="../assets/img/CSS.3.svg.png">
              <img  class="img-logo" src="../assets/img/sassydc-logo.svg">
            </div>
            <div>
              <img  class="img-logo" src="../assets/img/Boostrap_logo.svg">
              <img  class="img-logo" src="../assets/img/jquery.gif">
            </div>
            <div>
              <img  class="img-logo" src="../assets/img/vuejs.svg">
              <img  class="img-logo" src="../assets/img/ReactJS.png">
              <img  class="img-logo" src="../assets/img/nodejs.svg">
            </div>
            <div>
              <img  class="img-logo" src="../assets/img/mysql.svg">
              <img  class="img-logo mongo" src="../assets/img/mongodb.svg">
            </div>
          </div>
        </div>
        <div id="protfolio" class="page">
          <div class="page-title">
            protfolio
            <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
          </div>
          <div class="card">
            <div class="project-cover">
              <img class="img-project" src="../assets/img/trvales.png">
            <a href="https://travelmaker18.herokuapp.com/#/" target="_blank">
              <div>
                <div>Travel Maker App
                <hr>
                <span class="project-cover-span"> Vue.js</span>
                </div>
              </div>
            </a>
            </div>
            <div class="project-cover">
              <img class="img-project" src="../assets/img/email.png">
            <a href="https://nuritlh.github.io/Appsus/#/" target="_blank">
              <div>
                <div>Emails & Kepper App
                <hr>
                <span class="project-cover-span"> Vue.js</span>
               </div>
              </div>
            </a>
            </div>
            <div class="project-cover">
              <img class="img-project" src="../assets/img/imgGal.png">
            <a href="https://nuritlh.gitlab.io/promote-gallery-exam/" target="_blank">
                <div>
                <div>Image Gallery App
                <hr>
                <span class="project-cover-span">react</span>
                </div>
              </div>   
            </a>
            </div>
            </div>
          </div>
        <div id="experience" class="page">
          <div class="page-title">
            experience
            <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
          </div>
        </div>
        <div id="contact" class="page">
          <div class="page-title">
            contact
            <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
            <div class="contact">
            <form>
                <input type="email" class="form-control" id="subject-mail" aria-describedby="emailHelp" placeholder="SUBJECT">
                <textarea class="form-control contact-me-body" id="mail-massage-body" rows="3" placeholder="WRITE ME HERE..."></textarea>
              <button type="button" class="send-btn" @click="onFormContactClicked">SEND</button>
            </form>
          </div>
          </div>
        </div>
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
    },
    onFormContactClicked() {
      // ev.preventDefault();
      var contactSubject = document.querySelector('#subject-mail').value;
      var contactbody = document.querySelector('#mail-massage-body').value;
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=nuritlh@gmail.com&su=${contactSubject}&body=${contactbody}`,
        '_blank'
      );
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
    rgba(0, 0, 0, 0.24),
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
  top: 10px;
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
.name {
  margin: 90px 0 0 0;
}
.page-container {
  position: relative;
  top: 135px;
}
.page {
  /* height: calc(100vh); */
  text-transform: uppercase;
  padding: 20px;
  font-size: 2em;
}
.page-title {
  margin: 100px auto;
}
.about {
  width: 80%;
  margin: 10px auto;
  text-align: left;
  background-color: #25321ddb;
  padding: 20px;
  position: relative;
  top: 135px;
}
.about p {
  margin: 5px;
}
.content {
  background-image: url('../assets/img/feather-clipart-bunch-5.png');
  background-repeat: no-repeat;
  background-size: contain;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
  background-position: left;
  animation-name: background-image;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  opacity: 1;
}
@keyframes background-image {
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
}
.img-logo {
  height: 120px;
  padding: 10px 40px;
}
.img-logo:hover {
  transition: transform 2s;
  transform-style: preserve-3d;
  transform: rotateY(720deg);
  /* transform: rotateX(180deg); */
}
.mongo {
  width: 200px;
}
.card {
  margin: 0 auto;
}
.card a {
  color: #ffffff;
  text-transform: uppercase;
  font-size: 0.8em;
  text-decoration: none;
}
.project-cover {
  display: inline-flex;
  margin: 10px;
  height: 150px;
  width: 300px;
  position: relative;
  overflow: hidden;
  transition: all 1s ease;
}
.img-project {
  width: 100%;
  box-shadow: 0 0 0px #00000063;
  transition: all 0.3s;
  cursor: pointer;
}

.project-cover:hover .img-project {
  transform: scale(1.08);
}

.project-cover > a > div {
  visibility: hidden;
  background: rgba(0, 0, 0, 0.71);
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: #fff;
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
  /* white-space: pre; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-cover:hover > a > div {
  visibility: visible;
  animation-name: project-ani;
  animation-duration: 1s;
  animation-timing-function: ease;
}
.project-cover-span {
  font-size: 0.6em;
}
@keyframes project-ani {
  0% {
    height: 50%;
  }
  100% {
    height: 100%;
  }
}

.contact {
  width: 80%;
  margin: 10px auto;
  text-align: left;
  background-color: #25321ddb;
  padding: 20px;
  position: relative;
  top: 135px;
}
.contact > form > input {
  width: 96%;
  padding: 10px;
  font-family: fantasy;
}
.contact > form > textarea {
  width: 96%;
  margin: 10px auto;
  padding: 10px;
  height: 200px;
  font-family: inherit;
}
.send-btn {
  border: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #af9b08;
  font-weight: bold;
  cursor: pointer;
}
@media screen and (max-width: 510px) {
  .cover-pic {
    background-position: right;
  }
  .title {
    font-size: 2em;
    margin: 0 0 0 20px;
  }
  .job {
    font-size: 1em;
  }
  .page-container {
    top: 300px;
  }
  .page {
    font-size: 1.5em;
  }
  .about {
    top: 300px;
    margin: 0px auto;
  }
  .content {
    background-repeat: space;
  }
  .img-logo {
    padding: 10px 20px;
    height: 70px;
  }
  .mongo {
    width: 100px;
  }
  .project-cover {
    margin: 0;
  }
}
@media screen and (max-width: 360px) {
  .project-cover {
    margin: 0 auto;
    width: 260px;
  }
}
</style>