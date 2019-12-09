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
            ${this.wonder.details.name}`,
                {maxWidth: 300, maxHeight: 300, closeButton: true})
                .openPopup();

        earth.setView([this.wonder.details.latitude, this.wonder.details.longitude], 4);
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
</style>
