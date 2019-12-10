<template>
    <div id="earth_div">
    </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
    name: "world-map",
    props: {
      wonders : Array
    },
    mounted() {
        this.map();
    },
    methods: {
        map: function() {
        let options = {sky: true};
        let earth = new WE.map('earth_div', options);
        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
          this.wonders.forEach( (wonder) => {
           let marker = WE.marker([wonder.details.latitude, wonder.details.longitude]).addTo(earth);
          marker.bindPopup(`<img src="${wonder.details.image}" class="img-fluid"/>
          <p class="popup-information-text"> Name: ${wonder.details.name}</p>
          <p class="popup-information-text"> Location: ${wonder.details.location}</p>
          <p class="popup-information-text"> Year Built: ${wonder.details.yearBuilt}<p>`,
          {maxWidth: 175, maxHeight: 175, closeButton: true})
          .closePopup();

        earth.setView([50 , 0], 2);

        if (this.wonders.length === 1) {
          earth.setView([wonder.details.latitude + 20 , wonder.details.longitude + 3], 2.5);
          marker.openPopup();
        }
        })
      },
      moreDetailButton: function (){
        eventBus.$emit('selected-details', this.wonders[0].details.name)
      },
    }
}
</script>

<style lang="css">

#earth_div{
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: #000; position: absolute !important;
  }

.img-fluid {
  max-width: 25em;
  max-height: 25em;
}

.popup-information-text {

}
</style>
