<template lang="html">
<div id="main-container">
  <div>
    <world-map :wonder='wonder'></world-map>
  </div>
  <div id="overlay">
    <conversation :wonder="wonder"></conversation>
  </div>
</div>
</template>

<script>
import Conversation from './Conversation.vue';
import WorldMap from './WorldMap.vue';

export default {
  name: "wonder-page",
  props: {
    wonder : Object
  },
  components: {
    'conversation': Conversation,
    'world-map': WorldMap
  }
}
</script>

<style lang="css" scoped>

#earth_div{
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: #000; position: absolute !important;
}

#overlay {
  position: relative;
  top: 50%;
  left: 50%;
  font-size: 15px;
  color: white;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50);
  padding-top: 100px;
}

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
