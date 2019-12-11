<template>
    <div id="earth_div">
    </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
    name: "world-map",
    head: {
      script: [
        { src: 'http://www.webglearth.com/v2/api.js' }
      ],
    },
    created: function () {
      this.$on('okHead', function () {
        setTimeout(this.map, 200);
      });
    },
    data() {
      return {
      earth: null
      }
    },
    props: {
      wonders : Array,
    },
    beforeDestroy() {
      this.earth = null;
    },
    methods: {
        map: function() {
        let options = {sky: true};
        this.earth = new WE.map('earth_div', options);
        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.earth);
          this.wonders.forEach( (wonder) => {
           let marker = WE.marker([wonder.details.latitude, wonder.details.longitude]).addTo(this.earth);
          marker.bindPopup(`<img src="${wonder.details.image}" class="img-fluid"/>
          <p class="popup-information-text"> Name: ${wonder.details.name}</p>
          <p class="popup-information-text"> Location: ${wonder.details.location}</p>
          <p class="popup-information-text"> Year Built: ${wonder.details.yearBuilt}<p>`,
          {maxWidth: 175, maxHeight: 175, closeButton: true})
          .closePopup();

        this.earth.setView([50 , 0], 2);

        if (this.wonders.length === 1) {
          this.earth.setView([wonder.details.latitude + 20 , wonder.details.longitude + 3], 2.5);
          marker.openPopup();
        }
        })
      },
      moreDetailButton: function (){
        eventBus.$emit('selected-details', this.wonders[0].details.name);
        this.earth = null;
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
  font-weight: bold;
  align-items: center;
  font-size: 11.5px;
  margin: 3px !important;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.we-pp-content{
  margin: 5px;
  margin-bottom: 0px;
}
</style>
