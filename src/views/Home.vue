<template>
  <div class="home">
    <div v-if="load" class="loading">
      <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="160" stroke="#E2007C"></circle>
        <circle cx="170" cy="170" r="135" stroke="#404041"></circle>
        <circle cx="170" cy="170" r="110" stroke="#E2007C"></circle>
        <circle cx="170" cy="170" r="85" stroke="#404041"></circle>
      </svg>
    </div>
    <div v-if="!load">
      <div class="cover-pic screen" id="home">
        <div class="nav">
          <a href="#">home</a> |
          <a href="#professional">skills</a> |
          <a href="#portfolio">portfolio</a> |
          <a href="#experience">experience</a> |
          <a href="#contact">contact</a>
        </div>
        <div class="name">
          <p class="title">
            I
            <span class="span-color">'</span>m
          </p>
          <p class="title">nurit</p>
          <p class="title">
            Levi
            <span class="span-color">.</span>
          </p>
          <p class="title job">
            Front - End Developer
            <span class="span-color">.</span>
          </p>
          <br>
          <div class="container">
            <svg
              viewBox="0 0 1418 116"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>@WebDesignerMag</title>
              <g stroke="none" fill="none" fill-rule="evenodd" fill-opacity="0">
                <text
                  id="@WebDesignerMag"
                  stroke="#fff"
                  fill="#645F5A"
                  font-weight="normal"
                  font-family="PermanentMarker-Regular, Permanent Marker"
                  font-size="144"
                >
                  <tspan x="3" y="109">
                    <!--
                    -->
                    <tspan>W</tspan>
                    <!--
                    -->
                    <tspan>e</tspan>
                    <!--
                    -->
                    <tspan>l</tspan>
                    <!--
                    -->
                    <tspan>c</tspan>
                    <!--
                    -->
                    <tspan>o</tspan>
                    <!--
                    -->
                    <tspan>m</tspan>
                    <!--
                    -->
                    <tspan>e</tspan>
                    <!--
                    -->
                    <tspan>.</tspan>
                    <!--
                    -->
                    <tspan>.</tspan>
                    <!--
                    -->
                    <tspan>.</tspan>
                    <!--
                    -->
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <br>
          <div class="container-bird">
            <div class="bird-container bird-container--one">
              <div class="bird bird--one"></div>
            </div>
            <div class="bird-container bird-container--two">
              <div class="bird bird--two"></div>
            </div>
            <div class="bird-container bird-container--three">
              <div class="bird bird--three"></div>
            </div>
            <div class="bird-container bird-container--four">
              <div class="bird bird--four"></div>
            </div>
          </div>
        </div>
        <div class="about">
          <p>Front - End Developer, Passionate about technology, Striving to be the best, Independent in my doing & thinking.</p>
          <p>
            Created advanced single page applications using Vue/React, state management,
            components, routing, node and more
          </p>
          <p>
            Have a degree in Industrial Engineering, Major in Information Systems, Graduate Full Stack, Web application boot-camp
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
          <div class>
            <div>
              <img class="img-logo" src="../assets/img/ES6LOGO.svg">
              <img class="img-logo" src="../assets/img/html.svg">
              <img class="img-logo" src="../assets/img/CSS.3.svg.png">
              <img class="img-logo" src="../assets/img/sassydc-logo.svg">
              <img class="img-logo" src="../assets/img/typescript.svg">
            </div>
            <div>
              <img class="img-logo" src="../assets/img/Boostrap_logo.svg">
              <img class="img-logo" src="../assets/img/jquery.gif">
            </div>
            <div>
              <img class="img-logo" src="../assets/img/vuejs.svg">
              <img class="img-logo" src="../assets/img/ReactJS.png">
              <img class="img-logo" src="../assets/img/nodejs.svg">
            </div>
            <div>
              <img class="img-logo" src="../assets/img/mysql.svg">
              <img class="img-logo mongo" src="../assets/img/mongodb.svg">
            </div>
            <div>
              <img class="img-logo" src="../assets/img/git.svg">
              <img class="img-logo mongo" src="../assets/img/mercirial.png">
            </div>
          </div>
        </div>
        <div id="portfolio" class="page screen-prot portfolio">
          <div class="page-title">
            portfolio
            <i @click="scrollUp" class="fas fa-arrow-alt-circle-up"></i>
          </div>
          <div class="card">
            <div class="project-cover">
              <img class="img-project" src="../assets/img/trvales.png">
              <a href="https://travelmaker18.herokuapp.com/#/" target="_blank">
                <div>
                  <div>
                    Travel Maker App
                    <hr>
                    <span class="project-cover-span">Vue.js</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="project-cover">
              <img class="img-project" src="../assets/img/email.png">
              <a href="https://nuritlh.github.io/Appsus/#/" target="_blank">
                <div>
                  <div>
                    Emails & Kepper App
                    <hr>
                    <span class="project-cover-span">Vue.js</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="project-cover">
              <img class="img-project" src="../assets/img/imgGal.png">
              <a href="https://nuritlh.gitlab.io/promote-gallery-exam/" target="_blank">
                <div>
                  <div>
                    Image Gallery App
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
                  <p class="company-name">
                    <img class="img-company" src="../assets/img/zoomin.jpg">Zoomin Software
                  </p>
                  <p class="years">2018-2019</p>
                  <p class="job-title">Front - End Developer</p>
                  <p class="job-details">
                    Customized knowledge portal solution for big scale software and hardware companies.
                    Practice of producing HTML, CSS using React framework for Web Applications.
                    Translated design team’s UX wireframes and mockups into responsive, interactive
                    features. Led big scale client’s projects (for Dell, Intel, McAfee, Mastercard). Worked
                    closely with the customer on scope, requirements, timelines and implemented the
                    product from scratch to production.
                    Implemented functionality in JavaScript using React, PWA and offline first strategy.
                    Work with senior developer to manage large, complex design projects for clients
                  </p>
                  <p></p>
                  <p class="company-name">
                    <img class="img-company" src="../assets/img/mellanox.png">Mellanox Technologies
                  </p>
                  <p class="years">2015-2018</p>
                  <p class="job-title">Project Management</p>
                  <p class="years">2017-2018</p>
                  <p class="job-details">
                    Information Project Management for all manufacturing operations units.
                    Improving processes, identifying problems, defining work methodology, tools and methods.
                    Set customer requirements, system selection (internal, external requirements of suppliers, customers, employees).
                    QA for internal & custom systems/tools.
                  </p>
                  <p class="job-title">Supply Chain Controller</p>
                  <p class="years">2015-2017</p>
                  <p class="job-details">
                    Responsible for planning and controlling the supply chain from the moment the raw material leaves the factories until it reaches the customer.
                    Weekly reports of production group KPIs, inventories budgets and customer satisfaction to senior management (VP
                    Operations & Corporate Quality).
                  </p>
                  <p class="company-name">
                    <img class="img-company" src="../assets/img/DolphinSoft.png">DolphinSoft
                  </p>
                  <p class="years">2014</p>
                  <p class="job-details">
                    Web Application Developer. End to end customer websites development.
                    Setting up site infrastructure, design and promoting websites.
                    Customer services, Including support for new characterization requirements and changes.
                  </p>
                  <p></p>
                </div>
              </div>
              <div class="education">
                <div class="experience-title">Education</div>
                <div class="experience-details">
                  <p class="company-name">
                    <img class="img-company" src="../assets/img/logo5.png">Coding-Academy
                  </p>
                  <p class="years">2018</p>
                  <p
                    class="job-details"
                  >An intensive coding boot-camp (540 hours) that qualifies Front-End developers</p>
                  <p class="company-name">
                    <img
                      class="img-company"
                      src="../assets/img/Ruppin_Academic_Center_Logo.svg.png"
                    >Ruppin Academic Center
                  </p>
                  <p class="years">2011-2015</p>
                  <p
                    class="job-details"
                  >Bachelor of Science – BS, Industrial Engineering, Major in Information Systems.</p>
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
                <a href="https://www.linkedin.com/in/nurit-levi-hevroni-0308392b/" target="_blank">
                  <i class="fab fa-linkedin icons"></i>
                </a>
                <a href="https://www.facebook.com/nurit.hevroni?ref=br_rs" target="_blank">
                  <i class="fab fa-facebook-square icons"></i>
                </a>
                <a href="https://www.instagram.com/nurit_lh/" target="_blank">
                  <i class="fab fa-instagram icons"></i>
                </a>
              </div>
            </div>
            <div class="contact">
              <form>
                <div class="inputs-details">
                  <input
                    type="text"
                    class="input-details"
                    id="name-mail"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                  >
                  <input
                    type="text"
                    class="input-details"
                    id="phone-mail"
                    aria-describedby="emailHelp"
                    placeholder="Phone"
                  >
                </div>
                <input
                  type="text"
                  class="input-sub"
                  id="subject-mail"
                  aria-describedby="emailHelp"
                  placeholder="Subject"
                >
                <textarea
                  class="form-control contact-me-body"
                  id="mail-massage-body"
                  rows="3"
                  placeholder="WRITE ME HERE..."
                ></textarea>
                <button type="button" class="send-btn" @click="onFormContactClicked">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      load: false
    };
  },
  created() {
    this.loading();
  },
  methods: {
    loading() {
      setTimeout(function() {
        this.load = false;
        console.log("here", this.load);
      }, 1000);
    },
    scrollUp() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },

    onFormContactClicked() {
      // ev.preventDefault();
      var contactSubject = document.querySelector("#subject-mail").value;
      var contactBody = document.querySelector("#mail-massage-body").value;
      var contactName = document.querySelector("#name-mail").value;
      var contactPhone = document.querySelector("#phone-mail").value;
      var body = `${contactBody}
               ${contactName}
               ${contactPhone}`;
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=nuritlh@gmail.com&su=${contactSubject}&body=${body}`,
        "_blank"
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
  content: "";
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
  background-image: url("../assets/img/nurit.jpg");
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
  top: 60px;
}
.about p {
  margin: 10px;
}
.content {
  background-image: url("../assets/img/feather-clipart-bunch-5.png");
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
  content: "";
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
.portfolio {
  background-image: url("../assets/img/portfolio-back.jpg");
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
  content: "";
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
  background-image: url("../assets/img/way-back.jpg");
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
  width: 50%;
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
  .contact {
    width: 80%;
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
    top: 130px;
    margin: 0px auto;
  }
  .name {
    margin: 170px 0 0 0;
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

@import url("https://fonts.googleapis.com/css?family=Permanent+Marker");
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 10px 100px;
}
.container svg {
  max-width: 45rem;
  width: 100%;
  height: auto;
  fill: none;
  stroke: white;
  stroke-width: 4;
}
.container svg tspan > tspan {
  stroke-dasharray: 1500;
  stroke-dashoffset: -1500;
}
.container svg tspan > tspan:nth-of-type(1) {
  animation: draw 1000ms 300ms forwards;
}
.container svg tspan > tspan:nth-of-type(2) {
  animation: draw 1000ms 450ms forwards;
}
.container svg tspan > tspan:nth-of-type(3) {
  animation: draw 1000ms 600ms forwards;
}
.container svg tspan > tspan:nth-of-type(4) {
  animation: draw 1000ms 750ms forwards;
}
.container svg tspan > tspan:nth-of-type(5) {
  animation: draw 1000ms 900ms forwards;
}
.container svg tspan > tspan:nth-of-type(6) {
  animation: draw 1000ms 1050ms forwards;
}
.container svg tspan > tspan:nth-of-type(7) {
  animation: draw 1000ms 1200ms forwards;
}
.container svg tspan > tspan:nth-of-type(8) {
  animation: draw 1000ms 1350ms forwards;
}
.container svg tspan > tspan:nth-of-type(9) {
  animation: draw 1000ms 1500ms forwards;
}
.container svg tspan > tspan:nth-of-type(10) {
  animation: draw 1000ms 1650ms forwards;
}
.container svg tspan > tspan:nth-of-type(11) {
  animation: draw 1000ms 750ms forwards;
}
.container svg tspan > tspan:nth-of-type(12) {
  animation: draw 1000ms 900ms forwards;
}
.container svg tspan > tspan:nth-of-type(13) {
  animation: draw 1000ms 1050ms forwards;
}
.container svg tspan > tspan:nth-of-type(14) {
  animation: draw 1000ms 1200ms forwards;
}
.container svg tspan > tspan:nth-of-type(15) {
  animation: draw 1000ms 1050ms forwards;
}
.container svg tspan > tspan:nth-of-type(16) {
  animation: draw 1000ms 1200ms forwards;
}
.container svg tspan > tspan:nth-of-type(17) {
  animation: draw 1000ms 300ms forwards;
}
.container svg tspan > tspan:nth-of-type(18) {
  animation: draw 1000ms 450ms forwards;
}
.container svg tspan > tspan:nth-of-type(19) {
  animation: draw 1000ms 600ms forwards;
}
.container svg tspan > tspan:nth-of-type(20) {
  animation: draw 1000ms 750ms forwards;
}
.container svg tspan > tspan:nth-of-type(21) {
  animation: draw 1000ms 900ms forwards;
}
.container svg tspan > tspan:nth-of-type(22) {
  animation: draw 1000ms 1050ms forwards;
}
.container svg tspan > tspan:nth-of-type(23) {
  animation: draw 1000ms 1200ms forwards;
}

@keyframes draw {
  100% {
    stroke-dashoffset: 0;
  }
}

@import url("https://fonts.googleapis.com/css?family=Arima+Madurai:300");
*,
*::before,
*::after {
  box-sizing: border-box;
}

.container-bird {
  z-index: 7;
  position: absolute;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 9rem;
  width: 100%;
  top: 80px;
}

.bird {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg);
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  will-change: background-position;
  -webkit-animation-name: fly-cycle;
  animation-name: fly-cycle;
  -webkit-animation-timing-function: steps(10);
  animation-timing-function: steps(10);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.bird--one {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.bird--two {
  -webkit-animation-duration: 0.9s;
  animation-duration: 0.9s;
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
}
.bird--three {
  -webkit-animation-duration: 1.25s;
  animation-duration: 1.25s;
  -webkit-animation-delay: -0.25s;
  animation-delay: -0.25s;
}
.bird--four {
  -webkit-animation-duration: 1.1s;
  animation-duration: 1.1s;
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

.bird-container {
  position: absolute;
  top: 20%;
  left: -10%;
  -webkit-transform: scale(0) translateX(-10vw);
  transform: scale(0) translateX(-10vw);
  will-change: transform;
  -webkit-animation-name: fly-right-one;
  animation-name: fly-right-one;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.bird-container--one {
  -webkit-animation-duration: 15s;
  animation-duration: 15s;
  -webkit-animation-delay: 0;
  animation-delay: 0;
}
.bird-container--two {
  -webkit-animation-duration: 16s;
  animation-duration: 16s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.bird-container--three {
  -webkit-animation-duration: 14.6s;
  animation-duration: 14.6s;
  -webkit-animation-delay: 9.5s;
  animation-delay: 9.5s;
}
.bird-container--four {
  -webkit-animation-duration: 16s;
  animation-duration: 16s;
  -webkit-animation-delay: 10.25s;
  animation-delay: 10.25s;
}

@-webkit-keyframes fly-cycle {
  100% {
    background-position: -900px 0;
  }
}

@keyframes fly-cycle {
  100% {
    background-position: -900px 0;
  }
}
@-webkit-keyframes fly-right-one {
  0% {
    -webkit-transform: scale(0.3) translateX(-10vw);
    transform: scale(0.3) translateX(-10vw);
  }
  10% {
    -webkit-transform: translateY(2vh) translateX(10vw) scale(0.4);
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }
  20% {
    -webkit-transform: translateY(0vh) translateX(30vw) scale(0.5);
    transform: translateY(0vh) translateX(30vw) scale(0.5);
  }
  30% {
    -webkit-transform: translateY(4vh) translateX(50vw) scale(0.6);
    transform: translateY(4vh) translateX(50vw) scale(0.6);
  }
  40% {
    -webkit-transform: translateY(2vh) translateX(70vw) scale(0.6);
    transform: translateY(2vh) translateX(70vw) scale(0.6);
  }
  50% {
    -webkit-transform: translateY(0vh) translateX(90vw) scale(0.6);
    transform: translateY(0vh) translateX(90vw) scale(0.6);
  }
  60% {
    -webkit-transform: translateY(0vh) translateX(110vw) scale(0.6);
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
  100% {
    -webkit-transform: translateY(0vh) translateX(110vw) scale(0.6);
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
}
@keyframes fly-right-one {
  0% {
    -webkit-transform: scale(0.3) translateX(-10vw);
    transform: scale(0.3) translateX(-10vw);
  }
  10% {
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(0vh) translateX(30vw) scale(0.5);
  }
  30% {
    transform: translateY(4vh) translateX(50vw) scale(0.6);
  }
  40% {
    transform: translateY(2vh) translateX(70vw) scale(0.6);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.6);
  }
  60% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
}
@-webkit-keyframes fly-right-two {
  0% {
    transform: translateY(-2vh) translateX(-10vw) scale(0.5);
  }
  10% {
    transform: translateY(0vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(-4vh) translateX(30vw) scale(0.6);
  }
  30% {
    transform: translateY(1vh) translateX(50vw) scale(0.45);
  }
  40% {
    transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.45);
  }
  51% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
}
@keyframes fly-right-two {
  0% {
    transform: translateY(-2vh) translateX(-10vw) scale(0.5);
  }
  10% {
    transform: translateY(0vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(-4vh) translateX(30vw) scale(0.6);
  }
  30% {
    transform: translateY(1vh) translateX(50vw) scale(0.45);
  }
  40% {
    transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.45);
  }
  51% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ededed;
}

.loader {
  max-width: 15rem;
  width: 100%;
  height: auto;
  stroke-linecap: round;
}

circle {
  fill: none;
  stroke-width: 3.5;
  -webkit-animation-name: preloader;
  animation-name: preloader;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-transform-origin: 170px 170px;
  transform-origin: 170px 170px;
  will-change: transform;
}
circle:nth-of-type(1) {
  stroke-dasharray: 550px;
}
circle:nth-of-type(2) {
  stroke-dasharray: 500px;
}
circle:nth-of-type(3) {
  stroke-dasharray: 450px;
}
circle:nth-of-type(4) {
  stroke-dasharray: 300px;
}
circle:nth-of-type(1) {
  -webkit-animation-delay: -0.15s;
  animation-delay: -0.15s;
}
circle:nth-of-type(2) {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
circle:nth-of-type(3) {
  -webkit-animation-delay: -0.45s;
  animation-delay: -0.45s;
}
circle:nth-of-type(4) {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}

@-webkit-keyframes preloader {
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes preloader {
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>