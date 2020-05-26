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
        { src: 'https://www.webglearth.com/v2/api.js' }
      ],
    },
    created: function () {
      this.$on('okHead', function () {
        setTimeout(this.map, 500);
      });
    },
    props: {
      wonders : Array,
    },
    methods: {
        map: function() {
        let options = {sky: true};
        let earth = new WE.map('earth_div', options);
        WE.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
          this.wonders.forEach( (wonder) => {
           let marker = WE.marker([wonder.details.latitude, wonder.details.longitude]).addTo(earth);
          marker.bindPopup(`<img src="${wonder.details.image}" class="img-fluid"/>
          <p class="popup-information-text"><strong>Name:</strong> ${wonder.details.name}</p>
          <p class="popup-information-text"><strong>Location:</strong> ${wonder.details.location}</p>
          <p class="popup-information-text"><strong>Year Built:</strong> ${wonder.details.yearBuilt}<p>`,
          {maxWidth: 300, maxHeight: 300, closeButton: true})
          .closePopup();

        earth.setView([50 , 0], 2);

        if (this.wonders.length === 1) {
          // earth.setView([wonder.details.latitude + 20 , wonder.details.longitude + 3], 2.5);
          earth.setView([wonder.details.latitude + 10, wonder.details.longitude], 2.5);
          marker.openPopup();
        }
        })
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
}
img.img-fluid {
    max-height: 300px;
}

.popup-information-text {
  align-items: center;
  font-size: 16px;
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
.we-pp-wrapper {
  text-align: center;
}

.we-pp-content p {
    margin: 18px 0;
    text-align: center !important;
}
</style>
