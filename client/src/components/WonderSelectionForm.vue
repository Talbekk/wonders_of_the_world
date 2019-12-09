<template>
    <div>
        <h2>Select your wonder</h2>
        <simple-button message="Get random wonder" eventChannel="select-random-wonder"></simple-button>
    </div>
</template>

<script>
import { eventBus } from "../main";
import SimpleButton from "./SimpleButton";

export default {
    name: "wonder-selection-form",
    props: {
        wonders: Array
    },
    mounted() {
        eventBus.$on("select-random-wonder", () => this.selectRandomWonder());
    },
    methods: {
        selectRandomWonder: function() {
            return this.getWonder(Math.random(0, wonders.length + 1));
        },

        getWonder: function(position) {
            return this.wonders[position];
        }
    },
    components: {
        "simple-button": SimpleButton,
    }
}
</script>

<style lang="css" scoped>
    
</style>