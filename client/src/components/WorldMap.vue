<template>
    <div id="earth_div">
    </div>
</template>

<script>
export default {
    name: "world-map",
    props: {
        data: Array
    },
    mounted() {
        this.map();
    },
    methods: {
        map: function() {
        let earth = new WE.map('earth_div');
        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

        this.data.forEach(wonder => {
            let marker = WE.marker([wonder.lat, wonder.long]).addTo(earth);
            marker.bindPopup(wonder.message, 
                {maxWidth: 450, closeButton: true})
                // .openPopup();
        });
        earth.setView([51.505, 0], 2);
      }
    }
}
</script>