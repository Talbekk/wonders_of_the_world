<template>
  <div id="app">
    <user-form v-if="!username"></user-form>
    <wonder-selection-form v-if="username" :wonders ='wonders'></wonder-selection-form>
    <!-- <world-map v-id:="" :data="wonders"></world-map> -->
  </div>
</template>

<script>
import WorldMap from './components/WorldMap'
import UserForm from './components/UserForm'
import WonderSelectionForm from './components/WonderSelectionForm'
import {eventBus} from './main.js'

export default {

  name: 'app',
  data() {
    return {
      username: null,
      wonders: [
        {
          name: "Chichén Itzá",
          lat: 30.058056,
          long: 31.228889,
          image: "https://estaticos.muyhistoria.es/media/cache/1140x_thumb/uploads/images/gallery/5c544c2c5bafe87f2de31193/chichen-itza.jpg",
          description: "Chichen Itza[nb 1] was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico. Chichen Itza was a major focal point in the Northern Maya Lowlands from the Late Classic (c. AD 600–900) through the Terminal Classic (c. AD 800–900) and into the early portion of the Postclassic period (c. AD 900–1200). The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc and Chenes styles of the Northern Maya lowlands.",
          message: "<b><img src='https://estaticos.muyhistoria.es/media/cache/1140x_thumb/uploads/images/gallery/5c544c2c5bafe87f2de31193/chichen-itza.jpg' class='img-fluid'/>Cairo</b><br>Yay, you found me!"
        },
        {
          name: "Chichén Itzá",
          location: "Yucatan, Messico",
          longitude: -88.567519,
          latitude: 20.685635,
          image: "https://estaticos.muyhistoria.es/media/cache/1140x_thumb/uploads/images/gallery/5c544c2c5bafe87f2de31193/chichen-itza.jpg",
          description: "Chichen Itza[nb 1] was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico. Chichen Itza was a major focal point in the Northern Maya Lowlands from the Late Classic (c. AD 600–900) through the Terminal Classic (c. AD 800–900) and into the early portion of the Postclassic period (c. AD 900–1200). The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc and Chenes styles of the Northern Maya lowlands.",
          height: "98 feet in height ?????",
          yearBuilt: "832 AD",
          purpose: "City",
          },
      ]
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
  margin-top: 60px;
}
</style>
