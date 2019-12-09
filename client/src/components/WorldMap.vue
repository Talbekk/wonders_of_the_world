<template>
    <div id="earth_div">
      <conversation :wonder='wonder'></conversation>
    </div>
</template>

<script>

import Conversation from './Conversation.vue';

export default {
    name: "world-map",
    props: {
      wonder : Object
    },
    mounted() {
        this.map();
    },
    methods: {
        map: function() {
        let earth = new WE.map('earth_div');
        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

            let marker = WE.marker([this.wonder.details.latitude, this.wonder.details.longitude]).addTo(earth);
            marker.bindPopup(`<img src="${this.wonder.details.image}" class="img-fluid"/>
            <p class="popup-information-text"> Name: ${this.wonder.details.name}</p>
            <p class="popup-information-text"> Location: ${this.wonder.details.location}</p>
            <p class="popup-information-text"> Year Built: ${this.wonder.details.yearBuilt}<p>`,
                {maxWidth: 300, maxHeight: 300, closeButton: true})
                .openPopup();

        earth.setView([this.wonder.details.latitude + 5 , this.wonder.details.longitude + 3], 4);
      }
    },
    components: {
      "conversation": Conversation
    }
}
</script>

<style lang="css">
#earth_div{
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: #000; position: absolute !important;}

.popup-information-text{
margin: 0px !important;
margin-block-start: 0;
margin-block-end: 0;
margin-inline-start: 0;
margin-inline-end: 0;

font-size: 14px;
color: #000;
text-align: left;
}
.img-fluid{
  margin-bottom: 5px;
}

</style>
