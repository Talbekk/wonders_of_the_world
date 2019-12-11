<template>
    <div>
        <h2>Select your wonder</h2>
        <router-link id="right-form" to="/wonder"><simple-button message="Get random wonder" eventChannel="select-random-wonder"></simple-button></router-link>
        <simple-select message="Select a wonder" eventChannel="select-wonder" :data="wonders"></simple-select>
    </div>
</template>

<script>
import { eventBus } from "../main";
import SimpleButton from "./SimpleButton";
import SimpleSelect from "./SimpleSelect";

export default {
    name: "wonder-selection-form",
    props: {
        wonders: Array
    },
    mounted() {
        eventBus.$on("select-random-wonder", () => this.selectRandomWonder());
        eventBus.$on("select-wonder", (index) => this.getWonder(index));
    },
    methods: {
        selectRandomWonder: function() {
            this.getWonder(this.getRandomInt(0, this.wonders.length));
        },
        getWonder: function(position) {
            this.emitSelectedWonder(this.wonders[position]);
        },
        emitSelectedWonder: function(wonder) {
            eventBus.$emit("selected-wonder", wonder);
        },
        getRandomInt: function(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    },
    components: {
        "simple-button": SimpleButton,
        "simple-select": SimpleSelect
    }
}
</script>

<style lang="css" scoped>
</style>
