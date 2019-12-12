<template lang="">
  <div>
    <world-map :wonders='wonders'></world-map>
    <!-- <user-form v-if="!username"></user-form> -->
    <wonder-selection-form id="right-form" :wonders ='wonders'></wonder-selection-form>
    <!-- <wonder-page v-if="map" :wonders="[selectedWonder]" :username="username"></wonder-page> -->
    <div class="quiz">
      <router-link to="/quiz">Test Your knowledge</router-link>
    </div>
    <!-- <button id="left-form" v-if="homepage" @click="onPlayQuizClick">Test your knowledge</button> -->
    <!-- <graphic-quiz :questions="questions" v-if="quiz"></graphic-quiz> -->
    <!-- <more-detail :wonder="selectedWonder" v-if="details"></more-detail> -->
    <conversation-box :message="hostMessage" position="left" speech="right_speech_bubble"
    image="conversation/host.png" :username="username" id="homepage-box"></conversation-box>

  </div>
</template>

<script>

import Wonder from './Wonder';
import GlobeService from '../services/GlobeService.js';
import GraphicQuiz from "../components/GraphicQuiz";
// import MoreDetail from "../components/MoreDetail";
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
    "conversation-box": ConversationBox,
    "app": App,
    "wonder": Wonder
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-image:url('quiz/wallpaper.png');  */

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
  background-color: #227fd0eb;
  max-width: 40%;
  margin-top: 11em;
}

.quiz:hover{
  left: 90%;
  position: relative;
}
.quiz {
  transition: 0.3s ease-in-out;
  position: relative;
  top: 60%;
  left: 115%;
  font-size: 15px;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50);
  padding: 20px;
  padding-right: 100px;
  padding-left: 40px;
  background-color: white;
  max-width: 40%;
  background-color:#ffa500d4;
  color:white;
  font-size: 20px;
  text-decoration: none;


}

</style>
