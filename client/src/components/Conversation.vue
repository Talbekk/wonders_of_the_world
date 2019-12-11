<template lang="html">
  <div id="conversation">
    <div id="conversation-box" @click="onConversationClick" v-if="conversation">
      <conversation-box :message="conversation.host" position="right" speech="right_speech_bubble" :image="conversation.hostImage" :username="username"></conversation-box>
      <conversation-box :message="conversation.traveller" position="left" speech="left_speech_bubble" :image="conversation.travellerImage"></conversation-box>
    </div>
      <!-- <div id="conversation-closure" class="conversation-popup" v-if="!conversation && conversationIndex > 0"> -->
      <!-- <p>What do you prefer to do now?</p> -->
      <router-link class="top-right" v-if="!conversation && conversationIndex > 0" to="/details">Get Details</router-link>
      <router-link class="top-left" v-if="!conversation && conversationIndex > 0" to="/">Go Home</router-link>
  </div>
</template>

<script>
import { eventBus } from "../main";
import ConversationBox from "./ConversationBox";
import SimpleButton from "./SimpleButton";
export default {
  name: "conversation",
  props: {
    wonder: Object,
    username: String,
  },
  data(){
    return {
      conversationIndex: 0
    }
  },
  computed: {
    conversation: function() {
      return this.wonder.conversations[this.conversationIndex];
    }
  },
  methods:{
    onConversationClick: function() {
      this.conversationIndex++;
    },
  },
  components: {
    "conversation-box": ConversationBox,
    "simple-button": SimpleButton
  }
}
</script>

<style lang="css" scoped>
#conversation{
  /* color: black;
  background-color: white; */
  /* position: relative;} */
}
.top-left {
  position: absolute;
  /* bottom: 280px; */
  /* left: 580px; */
  top: 10%;
  left: 80%;
  margin: 1em;
  padding: 2em;
  border: 2px solid #669999;
  border-radius: 30%;
}
.top-right {
  position: absolute;
  /* bottom: 280px; */
  /* right: 700px; */
  top: 0px;
  right: 0px;
  margin: 1em;
  padding: 2em;
  border: 2px solid #669999;
  border-radius: 30%;
}
</style>
