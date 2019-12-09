<template lang="html">
  <div id="host">
    <p>{{wonder.conversations[0].host}}</p>
  </div>
</template>

<script>
export default {
  name: "host",
  props: {
    wonder : Object
  }
}
</script>

<style lang="css" scoped>
</style>
