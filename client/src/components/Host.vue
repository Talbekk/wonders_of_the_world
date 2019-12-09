<template lang="html">
  <div id="host" @click="onClick">
    <p>Host:{{conversation.host}}</p>


  </div>
</template>

<script>
export default {
  name: "host",
  props: {
    conversation : Object
  },
  methods: {
    onClick: function() {
      this.$emit("handleClick");
    }
  }

}
</script>

<style lang="css" scoped>
</style>
