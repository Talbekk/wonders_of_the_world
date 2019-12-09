<template>
    <div>
       <select @change="onWonderSelection" required>
        <option value="0" disabled selected>Choose a wonder</option>
        <option v-for="(singleData, index) in data" :key="index" :value="index">{{singleData.name}}</option>
        </select> 
    </div>
</template>

<script>
import { eventBus } from "../main";

export default {
    name: "simple-select",
    props: {
        eventChannel: String,
        data: Array
    },
    methods: {
        onWonderSelection: function(e) {
            eventBus.$emit(eventChannel, e.target.value);
        }
    },
}
</script>

<style lang="css" scoped>
    
</style>