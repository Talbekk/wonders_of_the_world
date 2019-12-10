<template>
  <div id="app">
    <user-form v-if="!username"></user-form>
    <wonder-selection-form v-if="username && !selectedWonder && !quiz" :wonders ='wonders'></wonder-selection-form>
    <wonder-page v-if="selectedWonder" :wonder="selectedWonder"></wonder-page>
    <button  v-if="username && !selectedWonder && !quiz" @click="onPlayQuizClick">Test your knownledge</button>
    <graphic-quiz :questions="questions" v-if="username && quiz"></graphic-quiz>
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

export default {

  name: 'app',
  data() {
    return {
      username: null,
      selectedWonder: null,
      selectedDetails: null,
      wonders: [],
      questions: [],
      quiz: false,
    }
  },
  mounted(){
    eventBus.$on('username',(name) => {
      this.username = name;
    })
    eventBus.$on('selected-wonder', (wonder) => {
      this.selectedWonder = wonder
    })
    eventBus.$on('selected-details', (details) => {
      this.selectedDetails = details
    })
    eventBus.$on('select-homepage', () => {
      this.quiz = false;
      this.selectedWonder = null;
      this.selectedDetails = null;
    })
    GlobeService.getWonders()
    .then(data => this.wonders = data);
    GlobeService.getQuiz()
    .then(data => this.questions = data);
  },
  methods: {
    onPlayQuizClick: function() {
      this.quiz = true;
    }
  },
  components: {
    "world-map":WorldMap,
    "user-form":UserForm,
    "wonder-selection-form": WonderSelectionForm,
    "graphic-quiz": GraphicQuiz,
    "wonder-page": WonderPage
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
