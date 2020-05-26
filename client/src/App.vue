<template>
  <div id="app">
    <router-view :wonders='wonders' :selectedWonder='selectedWonder' :username='username' :questions="questions"/>
  </div>
</template>

<script>
import GlobeService from './services/GlobeService.js';
import {eventBus} from './main.js';

export default {
  name: 'app',
  data() {
    return {
      username: null,
      selectedWonder: null,
      wonders: [],
      questions: [],
      homepage: false,
      quiz: false,
      details: false,
      map: false
    }
  },
  mounted(){
    eventBus.$on('username',(name) => this.username = name);
    eventBus.$on('selected-wonder', (wonder) => {
      this.selectedWonder = wonder;
      this.$router.push({ name: 'wonder' });
    });
    GlobeService.getWonders().then((data) => {
      this.wonders = data
      console.log("result", data);
      });
    GlobeService.getQuiz().then(data => this.questions = data);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#right-form:hover{
  left: 85%;
}

#right-form {
  transition: 0.3s ease-in-out;
  position: relative;
  top: 20%;
  left: 115%;
  font-size: 15px;
  color: white;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50);
  padding: 20px;
  padding-left: 40px;
  color: black;
  background-color: white;
  max-width: 40%;
  margin-top: 11em;
}

#quiz:hover{
  left: 50%;
  position: relative;
}
#quiz {
  transition: 0.3s ease-in-out;
  position: relative;
  top: 60%;
  left: 63%;
  font-size: 15px;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50);
  padding: 20px;
  padding-right: 50px;
  padding-left: 50px;
  background-color: white;
  max-width: 40%;
}


</style>
