<template lang="html">
  <div class="user-form centered">
    <p>Hello there, I know you are ready for this adventure, 
      but first, how I should call you your majesty?</p>
    <form class="user-name" v-on:submit.prevent="userFormSubmit">
        <input id="username" type="text"  name="username" v-model='username' required>
        <input id="submit" type="submit" name="" value="Submit">
    </form>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
  name: "user-form",
  data(){
    return{
      username: ''

    }
  },
  methods:{
    userFormSubmit: function (){
      eventBus.$emit('username', this.username)
    },
  }
}
</script>

<style lang="css" scoped>
.centered {
    width: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -60px;
    margin-left: -150px;
}
input {
    margin: 0px 4px;
}
</style>
