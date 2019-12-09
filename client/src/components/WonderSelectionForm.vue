<template>
    <div>
        <h2>Select your wonder</h2>
        <simple-button message="Get random wonder" eventChannel="select-random-wonder"></simple-button>
        <simple-select message="Select a wonder" eventChannel="select-wonder"></simple-select>
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
            return this.getWonder(Math.random(0, wonders.length + 1));
        },
        getWonder: function(position) {
            return this.wonders[position];
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