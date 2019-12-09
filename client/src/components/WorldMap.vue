<template>
    <div id="earth_div">
    </div>
</template>

<script>
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

            let marker = WE.marker([this.wonder.lat, this.wonder.long]).addTo(earth);
            marker.bindPopup(this.wonder.message,
                {maxWidth: 450, closeButton: true})
                .openPopup();

        earth.setView([this.wonder.lat, this.wonder.long], 4);
      }
    }
}
</script>

<style lang="css">
#earth_div{
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: #000; position: absolute !important;}
</style>
