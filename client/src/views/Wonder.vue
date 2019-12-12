<template lang="html">
<div id="main-container">
  <div>
    <world-map :wonders='[selectedWonder]'></world-map>
  </div>
  <div id="overlay">
    <conversation :wonder="selectedWonder" :username="username"></conversation>
  </div>
</div>
</template>

<script>
import Conversation from '../components/Conversation.vue';
import WorldMap from '../components/WorldMap';
export default {
  name: "wonder-page",
  props: {
    selectedWonder : Object,
    username: String
  },
  components: {
    'conversation': Conversation,
    'world-map': WorldMap
  }
}
</script>

<style lang="css" scoped>
.popup-information-text {
  margin: 0px !important;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-size: 14px;
  color: #000;
  text-align: left;
  }
.img-fluid {
  margin-bottom: 5px;
}
</style>