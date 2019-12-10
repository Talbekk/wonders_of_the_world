<template lang="html">
  <div id="conversation" @click="onConversationClick" v-if="conversation">
    <conversation-box :message="conversation.host" position="left" speech="right_speech_bubble"></conversation-box>
    <conversation-box :message="conversation.traveller" position="right" speech="left_speech_bubble"></conversation-box>
  </div>
</template>

<script>
import ConversationBox from "./ConversationBox";

export default {
  name: "conversation",
  props: {
    wonder : Object
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
    "conversation-box": ConversationBox
  }
}

</script>

<style lang="css" scoped>

#conversation{
  color: black;
  background-color: white;
  /* position: relative;} */
}
</style>
