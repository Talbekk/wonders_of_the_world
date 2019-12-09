<template lang="html">
  <div id="traveller">
  <p>Traveller : {{conversation.traveller}}</p>
  </div>
</template>

<script>
export default {
  name: "traveller",
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
