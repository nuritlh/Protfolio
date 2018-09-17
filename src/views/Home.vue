<template>
  <div class="home">

    <div class="cover-pic screen" id="home">
          <div class="nav">
            <a href="#">home</a> | 
            <a href="#professional">skills</a> | 
            <a href="#protfolio">protfolio</a> | 
            <a href="#experience">experience</a> | 
            <a href="#contact">contact</a>
          </div>
          <div class="name">
            <p class="title">I<span class="span-color">'</span>m</p>
            <p class="title">nurit</p>
            <p class="title">Levi<span class="span-color">.</span></p>
            <p class="title job">Full Stack Developer <span class="span-color">.</span></p>
          </div>
          <div class="about">
            <p>Full Stack Developer, Passionate about technology, Striving to be the best, Independent in my doing & thinking.</p>
            <!-- <p>Created advanced single page applications using Vue.js, Vuex state management, components, routing, node.js and
              more.
            </p> -->
            <p>Have a degree in Industrial Engineering, Major in Information Systems, Graduate Full Stack, Web application boot-camp
              at Coding-Academy.
            </p>
            <p>Outgoing and detail-oriented, I am proficient at building and maintaining professional relationships.</p>
          </div>
    </div>
    <div class="page-container">
        <div id="professional" class="page content">
          <div class="page-title">
            skills
            <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
          </div>
          <div class="">
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
        <div id="protfolio" class="page screen-prot protfolio">
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
        <div id="experience" class="page screen-experience experience">
          <div class="page-title">
            experience
            <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
            <div class="experience-container">
              <div class="employment">
                <div class="experience-title">Employment</div>
                <div class="experience-details">
                  <p class="company-name"><img class="img-company" src="../assets/img/mellanox.png">Mellanox Technologies</p>
                  <p class="years">2015-2018</p>
                  <p class="job-title">Project Management</p>
                  <p class="years">2017-2018</p>
                  <p class="job-details">Information Project Management for all manufacturing operations units.
                    Improving processes, identifying problems, defining work methodology, tools and methods.
                    Set customer requirements, system selection (internal, external requirements of suppliers, customers, employees).
                    QA for internal & custom systems/tools.
                  </p>
                  <p class="job-title">Supply Chain Controller</p>
                    <p class="years">2015-2017</p>
                  <p class="job-details">Responsible for planning and controlling the supply chain from the moment the raw material leaves the factories until it reaches the customer.
                    Weekly reports of production group KPIs, inventories budgets and customer satisfaction to senior management (VP
                    Operations & Corporate Quality).
                  </p>
                  <p class="company-name"><img class="img-company" src="../assets/img/DolphinSoft.png">DolphinSoft</p>
                  <p class="years">2014</p>
                  <p class="job-details">Web Application Developer. End to end customer websites development.
                    Setting up site infrastructure, design and promoting websites. 
                    Customer services, Including support for new characterization requirements and changes.
                  </p>
                  <p></p>
                </div>
              </div>
              <div class="education">
                <div class="experience-title">Education</div>
                <div class="experience-details">
                  <p class="company-name"><img class="img-company" src="../assets/img/logo5.png">Coding-Academy</p>
                  <p class="years">2018</p>
                  <p class="job-details">An intensive coding boot-camp (540 hours) that qualifies Front-End developers</p>
                  <p class="company-name"><img class="img-company" src="../assets/img/Ruppin_Academic_Center_Logo.svg.png">Ruppin Academic Center</p>
                  <p class="years">2011-2015</p>
                  <p class="job-details">Bachelor of Science – BS, Industrial Engineering, Major in Information Systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" class="page content">
          <div class="page-title">
            contact
            <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
            <div class="my-contact-details">
                <p>+ 972 - 504995755</p>
                <p>nuritlh@gmail.com</p>
                <div>
                  <a href="https://www.linkedin.com/in/nurit-levi-hevroni-0308392b/"><i class="fab fa-linkedin icons"></i></a>
                  <a href="https://www.facebook.com/nurit.hevroni?ref=br_rs"><i class="fab fa-facebook-square icons"></i></a>
                  <a href="https://www.instagram.com/nurit_lh/"><i class="fab fa-instagram icons"></i></a>
                </div>
              </div>
            <div class="contact">
            <form>
              <div class="inputs-details">
                <input type="text" class="input-details" id="name-mail" aria-describedby="emailHelp" placeholder="Name">
                <input type="text" class="input-details" id="phone-mail" aria-describedby="emailHelp" placeholder="Phone">
              </div>
                <input type="text" class="input-sub" id="subject-mail" aria-describedby="emailHelp" placeholder="Subject">
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
      var contactBody = document.querySelector('#mail-massage-body').value;
      var contactName = document.querySelector('#name-mail').value;
      var contactPhone = document.querySelector('#phone-mail').value;
      var body = `${contactBody}
               ${contactName}
               ${contactPhone}`;
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=nuritlh@gmail.com&su=${contactSubject}&body=${body}`,
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
  /* font-weight: bolder; */
  font-size: 4em;
  margin: 10px 10px 10px 100px;
  text-align: left;
  font-family: Montserrat-bold, cursive;
}
.job {
  font-size: 1.5em;
  font-weight: normal;
}
.span-color {
  color: #b94a61;
}
.name {
  margin: 90px 0 0 0;
}
.page-container {
  position: relative;
  top: 135px;
}
.page {
  min-height: calc(100vh);
  text-transform: uppercase;
  padding: 20px;
  font-size: 2em;
}
.page-title {
  margin: 0px auto 50px auto;
  font-family: Montserrat-bold, cursive;
  font-weight: bold;
  font-size: 1.5em;
  letter-spacing: 5px;
}
.fa-arrow-alt-circle-up:before {
  cursor: pointer;
}
.about {
  width: 80%;
  margin: 10px auto;
  text-align: left;
  background-color: #25321ddb;
  padding: 20px;
  position: relative;
  top: 120px;
}
.about p {
  margin: 10px;
}
.content {
  background-image: url('../assets/img/feather-clipart-bunch-5.png');
  background-repeat: no-repeat;
  background-size: contain;
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

.screen-prot {
  position: relative;
}
.screen-prot::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  left: 0;
  top: 0;
  background: linear-gradient(
    rgb(67, 112, 89),
    rgba(54, 94, 105, 0.54),
    rgb(54, 99, 72)
  );
}
.protfolio {
  background-image: url('../assets/img/protfolio-back.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  transition: all 1s ease;
  z-index: 3;
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

.screen-experience {
  position: relative;
}
.screen-experience::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  left: 0;
  top: 0;
  background: linear-gradient(
    rgb(54, 99, 72),
    rgba(90, 128, 105, 0.8),
    rgb(59, 103, 75)
  );
}
.experience {
  background-image: url('../assets/img/way-back.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  transition: all 1s ease;
  z-index: 3;
}
.experience-container {
  display: flex;
  font-size: 0.5em;
  justify-content: space-around;
  padding: 40px 0 0 0;
  font-weight: 100;
  flex-direction: row;
  text-transform: initial;
  text-align: left;
}
.employment,
.education {
  width: 50%;
  padding: 20px;
}
.experience-title {
  text-align: center;
  color: #eab808;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-size: 1.5em;
}
.company-name {
  font-weight: 600;
  color: #172712;
  margin: 0;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  letter-spacing: 0;
}
.img-company {
  height: 50px;
  margin: 0 10px 0 0;
}
.years {
  font-size: 13px;
  color: #172712cf;
  margin: 5px 0 0 0;
  letter-spacing: 0;
}
.job-title {
  margin: 20px 0 0 0;
  font-weight: 600;
  letter-spacing: 0;
}
.experience-details {
  font-size: 16px;
  padding: 20px 0;
}
.job-details {
  letter-spacing: 1px;
  font-family: Montserrat, cursive;
}
.contact {
  width: 80%;
  margin: 10px auto;
  text-align: left;
  background-color: #25321d3b;
  padding: 20px;
  position: relative;
  top: 50px;
}

.my-contact-details {
  font-size: 15px;
  color: #000;
}

.icons {
  font-size: 2em;
  color: #1a5069;
  margin: 0 10px;
}

.contact > form > textarea {
  width: 100%;
  margin: 10px auto;
  padding: 20px;
  height: 200px;
  font-family: cursive;
  border: none;
}
.inputs-details {
  display: flex;
  justify-content: space-between;
}
.input-details {
  width: 45%;
  padding: 10px;
  border: none;
}
.input-sub {
  width: 100%;
  padding: 10px;
  border: none;
}
.send-btn {
  border: none;
  padding: 10px;
  background-color: #af9b08;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}

@media screen and (max-width: 690px) {
  .experience-container {
    flex-direction: column;
  }
  .employment,
  .education {
    width: 100%;
    padding: 0px;
  }
}
@media screen and (max-width: 510px) {
  .cover-pic {
    background-position: right;
  }
  .page-title {
    font-size: 1.1em;
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
    top: 200px;
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