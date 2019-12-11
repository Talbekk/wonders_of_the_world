<template lang="html">
  <div>
    <world-map :wonders='wonders'></world-map>
    <wonder-selection-form id="right-form" :wonders ='wonders'></wonder-selection-form>
    <!-- <graphic-quiz :questions="questions" v-if="quiz"></graphic-quiz> -->
    <conversation-box :message="hostMessage" position="right" speech="right_speech_bubble"
    image="conversation/host.png" :username="username" id="homepage-box"></conversation-box>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
      wonders: Array,
      username: String
  },
  components: {
    "graphic-quiz": GraphicQuiz,
    "app": App
  },
</script>

<style lang="css" scoped>
</style>
