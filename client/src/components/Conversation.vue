<template lang="html">

<div id="conversation">

<host :conversation='wonder.conversations[this.counter]' v-on:handleClick='handleClick'></host>

<traveller v-on:handleClick='handleClick' :wonder='wonder'></traveller>

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
      counter: 0
    }
  },
  components: {
    "host": Host,
    "traveller": Traveller
  },
  methods:{
    handleClick: function(){
      console.log('hi')
      this.counter += 1;
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
