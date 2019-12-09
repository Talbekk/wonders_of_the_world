<template lang="html">
  <div id="traveller" @click="onClick">
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
      this.$emit("handleTravellerClick");
    }
  }
}
</script>

<style lang="css" scoped>
</style>
