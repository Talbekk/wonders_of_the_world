<template>
  <div id="app">
    <!-- <world-map :wonders='wonders'></world-map> -->
    <!-- <div id="form-overlay"> -->
    <user-form v-if="!username"></user-form>
    <wonder-selection-form v-if="username && !selectedWonder && !quiz" :wonders ='wonders'></wonder-selection-form>
    <wonder-page v-if="selectedWonder" :wonders="[selectedWonder]"></wonder-page>
    <button v-if="username && !selectedWonder && !quiz" @click="onPlayQuizClick">Test your knownledge</button>
    <graphic-quiz :questions="questions" v-if="username && quiz"></graphic-quiz>
    <!-- </div> -->
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
      quiz: false
    }
  },
  mounted(){
    eventBus.$on('username',(name) => {
      this.username = name;
    })
    eventBus.$on('selected-wonder', (wonder) => {
      this.selectedWonder = null;
      this.selectedDetails = null;
      this.selectedWonder = wonder;
    })

    GlobeService.getWonders()
    .then(data => this.wonders = data);

    GlobeService.getQuiz()
    .then(data => this.questions = data);

    eventBus.$on('select-homepage', (wonder) => {
      this.quiz = false;
    })
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

#form-overlay {
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 50%; /* Full width (cover the whole page) */
  height: 20%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
</style>
