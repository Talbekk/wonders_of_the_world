<template>
    <div>
        <label for="data-selection">{{message}}</label>
        <select @change="onDataSelection" id="data-selection" required>
            <option value="0" disabled selected>Choose</option>
            <option v-for="(singleData, index) in data" :key="index" :value="index">{{singleData.details.name}}</option>
        </select>
    </div>
</template>

<script>
import { eventBus } from "../main";

export default {
    name: "simple-select",
    props: {
        message: String,
        eventChannel: String,
        data: Array
    },
    methods: {
        onDataSelection: function(e) {
            eventBus.$emit(this.eventChannel, e.target.value);
        }
    },
}
</script>

<style lang="css" scoped>
label {
    display: inline-block;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
}

</style>
