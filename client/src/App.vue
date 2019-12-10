<template>
  <div id="app">
    <world-map v-if="homepage" :wonders='wonders'></world-map>
    <user-form v-if="!username"></user-form>
    <wonder-selection-form id="right-form" v-if="homepage" :wonders ='wonders'></wonder-selection-form>
    <wonder-page v-if="map" :wonders="[selectedWonder]"></wonder-page>
    <button id="left-form" v-if="homepage" @click="onPlayQuizClick">Test your knowledge</button>
    <graphic-quiz :questions="questions" v-if="quiz"></graphic-quiz>
    <more-detail :wonder="selectedWonder" v-if="details"></more-detail>
  </div>
</template>

<script>
import WorldMap from './components/WorldMap';
import WonderPage from './components/WonderPage';
import UserForm from './components/UserForm';
import WonderSelectionForm from './components/WonderSelectionForm';
import {eventBus} from './main.js';
import GlobeService from './services/GlobeService.js';
import GraphicQuiz from "./components/GraphicQuiz";
import MoreDetail from "./components/MoreDetail";

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
      this.enableSection("map");
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
  },
  components: {
    "world-map":WorldMap,
    "user-form":UserForm,
    "wonder-selection-form": WonderSelectionForm,
    "graphic-quiz": GraphicQuiz,
    "wonder-page": WonderPage,
    "more-detail": MoreDetail
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 700px;
}

#right-form {
  position: relative;
  top: 20%;
  left: 80%;
  font-size: 15px;
  color: white;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50);
  padding-top: 100px;
  color: black;
  background-color: white;
  margin: 1em;
  padding: 2em;
  max-width: 20%;
  border: 2px solid #669999;
  border-radius: 30%;
}

#left-form {
  position: relative;
  top: 20%;
  right: 20%;
  font-size: 15px;
  color: white;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50);
  padding-top: 100px;
  color: black;
  background-color: white;
  margin: 1em;
  padding: 2em;
  max-width: 20%;
  border: 2px solid #669999;
  border-radius: 30%;
}



</style>
