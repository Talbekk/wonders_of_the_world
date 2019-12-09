<template lang="html">
  <div id="traveller">
  <p>Traveller : "Hello!"</p>
  </div>
</template>

<script>
export default {
  name: "traveller",
  props: {
    wonder : Object
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
