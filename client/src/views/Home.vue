<template lang="">
  <div>
    <world-map :wonders='wonders'></world-map>
      <user-form class="left-form" v-if="!username"></user-form>
      <wonder-selection-form class="right-form" v-if='username' :wonders ='wonders'></wonder-selection-form>
    <div class="quiz">
      <router-link to="/quiz" class="router-link">Test Your knowledge</router-link>
    </div>
    <conversation-box v-if='username' :message="hostMessage" position="left" speech="right_speech_bubble"
    image="conversation/host.png" :username="username" id="homepage-box"></conversation-box>

  </div>
</template>

<script>
import UserForm from '../components/UserForm.vue';
import GlobeService from '../services/GlobeService.js';
import ConversationBox from "../components/ConversationBox";
import WorldMap from '../components/WorldMap';
import WonderSelectionForm from '../components/WonderSelectionForm';

export default {
  name: 'home',
  props: {
      wonders: Array,
      username: String
  },
  computed: {
    hostMessage: function() {
      return `Hello ${this.username}! welcome to the 7 Wonders of the World, where would you like to go?`
    }
  },
  methods: {
    onPlayQuizClick: function() {
      this.enableSection("quiz")
    },
  },
  components: {
    "world-map": WorldMap,
    "wonder-selection-form": WonderSelectionForm,
    "conversation-box": ConversationBox,
    "user-form": UserForm
  },
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

.right-form:hover{
  left: 85%;
}

.right-form {
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
  font-size: 20px;
}
.router-link {
  text-decoration: none;
  color: black;
}

.router-link:hover {
color: #227fd0;
}

.left-form {
  transition: 0.3s ease-in-out;
  position: relative;
  top: 50%;
  left: 25%;
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

</style>
