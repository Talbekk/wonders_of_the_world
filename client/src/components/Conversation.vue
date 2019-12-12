<template lang="html">
  <div id="conversation">
    <div id="conversation-box" @click="onConversationClick" v-if="conversation">
      <conversation-box :message="conversation.host" position="left" speech="right_speech_bubble" :image="conversation.hostImage" :username="username"></conversation-box>
      <conversation-box :message="conversation.traveller" position="right" speech="left_speech_bubble" :image="conversation.travellerImage"></conversation-box>
    </div>
      <router-link class="button" id="get_detail" to="/details" tag="button">Get Details</router-link>
      <router-link class="button" id="home" to="/" tag="button">Home</router-link>
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
.button {
  position: absolute;
  padding: 40px;
  top: 70px;
  border-style: none;
}

#get_detail{
  transition: 0.3s ease-in-out;
  position: relative;
  left: 75%;
  font-size: 15px;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50);
  padding: 20px;
  padding-right: 300px;
  padding-left: 40px;
  background-color: white;
  max-width: 60%;
  background-color:#ffa500d4;
  font-size: 20px;
}
#get_detail:hover{
  left: 70%;
  position: relative;
  color: #227fd0;

}

#home{
  top: 200px;
  transition: 0.3s ease-in-out;
  position: relative;
  left: 45%;
  font-size: 15px;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50);
  padding: 20px;
  padding-right: 200px;
  padding-left: 40px;
  background-color: white;
  max-width: 60%;
  background-color: #227fd0eb;
  font-size: 20px;
}
#home:hover{
  left: 40%;
  position: relative;
  color: #ffa500;
}



</style>
