<template>
  <div id="app">
    <router-view :wonders='wonders' :selectedWonder='selectedWonder' :questions="questions"/>
    <!-- <world-map v-if="homepage" :wonders='wonders'></world-map>
    <user-form v-if="!username"></user-form>
    <wonder-selection-form id="right-form" v-if="homepage" :wonders ='wonders'></wonder-selection-form>
    <wonder-page v-if="map" :wonders="[selectedWonder]" :username="username"></wonder-page>
    <button id="quiz" v-if="homepage" @click="onPlayQuizClick">Test your knowledge</button>
    <graphic-quiz :questions="questions" v-if="quiz"></graphic-quiz>
    <more-detail :wonder="selectedWonder" v-if="details"></more-detail>
    <conversation-box v-if="homepage" :message="hostMessage" position="right" speech="right_speech_bubble"
    image="conversation/host.png" :username="username" id="homepage-box"></conversation-box> -->
  </div>
</template>

<script>
import GlobeService from './services/GlobeService.js';
import GraphicQuiz from "./components/GraphicQuiz";
// import MoreDetail from "../components/MoreDetail";
import ConversationBox from "./components/ConversationBox";
import WorldMap from './components/WorldMap';
import WonderPage from './components/WonderPage';
import UserForm from './components/UserForm';
import WonderSelectionForm from './components/WonderSelectionForm';
import {eventBus} from './main.js';

export default {
  name: 'app',
  data() {
    return {
      username: null,
      selectedWonder: null,
      wonders: [],
      questions: [],
      homepage: false,
      quiz: false,
      details: false,
      map: false
    }
  },
  mounted(){
    eventBus.$on('username',(name) => {
      this.username = name;
      this.enableSection("homepage");
    })
    eventBus.$on('selected-wonder', (wonder) => {
      this.selectedWonder = wonder;
      this.$router.push({name:'wonder'})
    })
    GlobeService.getWonders()
    .then(data => this.wonders = data);
    GlobeService.getQuiz()
    .then(data => this.questions = data);
    eventBus.$on('select-homepage', (wonder) => {
      this.enableSection("homepage");
    })
    eventBus.$on('select-details', (wonder) => {
      this.enableSection("details");
    })
  },
  methods: {
    onPlayQuizClick: function() {
      this.enableSection("quiz")
    },
    enableSection: function(variableName) {
      this.homepage = false;
      this.quiz = false;
      this.map = false;
      this.details = false;
      if (this.$data.hasOwnProperty(variableName)) {
          this.$data[variableName] = true;
      }
    }
  }
  // components: {
  //   "world-map":WorldMap,
  //   "user-form":UserForm,
  //   "wonder-selection-form": WonderSelectionForm,
  //   "graphic-quiz": GraphicQuiz,
  //   "wonder-page": WonderPage,
  //   "more-detail": MoreDetail,
  //   "conversation-box": ConversationBox,
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("https://image.freepik.com/free-vector/travel-pattern-with-elements-dash-lines_23-2148039482.jpg");
}

#right-form:hover{
  left: 85%;
}

#right-form {
  transition: 0.3s ease-in-out;
  position: relative;
  top: 20%;
  left: 115%;
  font-size: 15px;
  color: white;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50);
  padding: 20px;
  padding-left: 40px;
  color: black;
  background-color: white;
  max-width: 40%;
  margin-top: 11em;
}

#quiz:hover{
  left: 50%;
  position: relative;
}
#quiz {
  transition: 0.3s ease-in-out;
  position: relative;
  top: 60%;
  left: 63%;
  font-size: 15px;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50);
  padding: 20px;
  padding-right: 50px;
  padding-left: 50px;
  background-color: white;
  max-width: 40%;
}


</style>
