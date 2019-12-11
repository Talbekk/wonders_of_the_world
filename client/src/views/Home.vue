<template lang="">
  <div>
    <world-map :wonders='wonders'></world-map>
    <!-- <user-form v-if="!username"></user-form> -->
    <wonder-selection-form id="right-form" :wonders ='wonders'></wonder-selection-form>
    <conversation-box :message="hostMessage" position="right" speech="right_speech_bubble"
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
  }
}
</script>

<style lang="css" scoped>
</style>
