<template>
    <button @click="onButtonClick">{{message}}</button>
</template>

<script>
import { eventBus } from "../main";

export default {
    name: "simple-button",
    props: {
        message: String,
        eventChannel: String
    },
    methods: {
        onButtonClick: function() {
            eventBus.$emit(this.eventChannel);
        }
    },
}
</script>

<style lang="css" scoped>

button {
      width: 164px;
      margin: 15px 15px 15px 8px;
      border-radius: 5px;
}

</style>
