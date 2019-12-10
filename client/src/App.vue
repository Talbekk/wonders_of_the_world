<template>
  <div id="app">
    <user-form v-if="!username"></user-form>
    <wonder-selection-form v-if="homepage" :wonders ='wonders'></wonder-selection-form>
    <wonder-page v-if="map" :wonder="selectedWonder"></wonder-page>
    <button  v-if="homepage" @click="onPlayQuizClick">Test your knownledge</button>
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
      this.quiz = false;
      this.homepage = true;
      this.map = false;
      this.details = false;
    })
    eventBus.$on('selected-wonder', (wonder) => {
      this.selectedWonder = wonder;
      this.quiz = false;
      this.homepage = false;
      this.map = true;
      this.details = false;
    })

    GlobeService.getWonders()
    .then(data => this.wonders = data);

    GlobeService.getQuiz()
    .then(data => this.questions = data);

    eventBus.$on('select-homepage', (wonder) => {
      this.quiz = false;
      this.homepage = true;
      this.map = false;
      this.details = false;
    })

    eventBus.$on('select-details', (wonder) => {
      this.quiz = false;
      this.homepage = false;
      this.map = false;
      this.details = true;
    })
  },
  methods: {
    onPlayQuizClick: function() {
      this.quiz = true;
      this.homepage = false;
      this.map = false;
      this.details = false;
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
</style>
