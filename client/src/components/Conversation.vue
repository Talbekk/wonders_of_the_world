<template lang="html">

<div id="conversation">

<host :conversation='wonder.conversations[this.hostCounter]' v-if="this.hostCounter<5" v-on:handleHostClick='handleHostClick'></host>

<traveller :conversation='wonder.conversations[this.travellerCounter]'  v-if="this.travellerCounter<5" v-on:handleTravellerClick='handleTravellerClick'></traveller>

</div>

</template>

<script>

import Traveller from './Traveller.vue';
import Host from './Host.vue';

export default {
  name: "conversation",
  props: {
    wonder : Object
  },
  data(){
    return {
      hostCounter: 0,
      travellerCounter: 0

    }
  },
  components: {
    "host": Host,
    "traveller": Traveller
  },
  methods:{
    handleHostClick: function(){
      this.hostCounter += 1;
    },
    handleTravellerClick: function(){
      this.travellerCounter += 1;
    }
  }


}

</script>

<style lang="css" scoped>

#conversation{
  color: black;
  background-color: white;
  position: relative;}

</style>
