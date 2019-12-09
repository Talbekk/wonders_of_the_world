<template>
  <div id="app">
    <user-form v-if="!username"></user-form>
    <wonder-selection-form v-if="username && !selectedWonder" :wonders ='wonders'></wonder-selection-form>
    <world-map v-if="selectedWonder" :wonder="selectedWonder"></world-map>
  </div>
</template>

<script>
import WorldMap from './components/WorldMap'
import UserForm from './components/UserForm'
import WonderSelectionForm from './components/WonderSelectionForm'
import {eventBus} from './main.js'
import GlobeService from './services/GlobeService.js'

export default {

  name: 'app',
  data() {
    return {
      username: null,
      selectedWonder: null,
      wonders: []
    }
  },
  components: {
    "world-map":WorldMap,
    "user-form":UserForm,
    "wonder-selection-form": WonderSelectionForm
  },
  mounted(){
  eventBus.$on('username',(name) => {
    this.username = name;
  })
  eventBus.$on('selected-wonder', (wonder) => {
    this.selectedWonder = wonder
  })

  GlobeService.getWonders()
  .then(data => this.wonders = data);
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
  height: 700px;
}
</style>
