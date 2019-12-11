<template lang="">
  <div>
    <world-map :wonders='wonders'></world-map>
    <!-- <user-form v-if="!username"></user-form> -->
    <wonder-selection-form id="right-form" :wonders ='wonders'></wonder-selection-form>
    <!-- <wonder-page v-if="map" :wonders="[selectedWonder]" :username="username"></wonder-page> -->
    <div class="quiz-button">
      <router-link to="/quiz">Test Your knowledge</router-link>
    </div>
    <!-- <button id="left-form" v-if="homepage" @click="onPlayQuizClick">Test your knowledge</button> -->
    <!-- <graphic-quiz :questions="questions" v-if="quiz"></graphic-quiz> -->
    <!-- <more-detail :wonder="selectedWonder" v-if="details"></more-detail> -->
    <conversation-box :message="hostMessage" position="right" speech="right_speech_bubble"
    image="conversation/host.png" :username="username" id="homepage-box"></conversation-box>
  </div>
</template>

<script>

import GlobeService from '../services/GlobeService.js';
import GraphicQuiz from "../components/GraphicQuiz";
import MoreDetail from "../components/MoreDetail";
import ConversationBox from "../components/ConversationBox";
import WorldMap from '../components/WorldMap';
import WonderPage from '../components/WonderPage';
import UserForm from '../components/UserForm';
import WonderSelectionForm from '../components/WonderSelectionForm';
import App from '../App.vue';

export default {
  name: 'home',
  props: {
      wonders: Array,
      username: String
  },
  components: {
    "world-map": WorldMap,
    "user-form": UserForm,
    "wonder-selection-form": WonderSelectionForm,
    "graphic-quiz": GraphicQuiz,
    "wonder-page": WonderPage,
    "more-detail": MoreDetail,
    "conversation-box": ConversationBox,
    "app": App
  },
  computed: {
    hostMessage: function() {
      return `Hello ${this.username}, welcome to wonder of the worlds, what do you prefer to do?`
    }
  },
  methods: {
    onPlayQuizClick: function() {
      this.enableSection("quiz")
    },
}
}
</script>

<style lang="css" scoped>
 .quiz-button{
   height: 200px;
   width: 200px;
   z-index: 100000;
   position: absolute;
   top: 20%;
   left: 10%;
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
   text-decoration: none;
 }
</style>
