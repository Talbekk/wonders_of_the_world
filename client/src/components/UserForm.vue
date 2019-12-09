<template lang="html">
  <form class="user-name" v-on:submit.prevent="userFormSubmit">
      <label for="username">Name:</label>
      <input id="username" type="text"  name="username" v-model='username' required>
      <input id="submit" type="submit" name="" value="Submit">
  </form>
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
</style>
