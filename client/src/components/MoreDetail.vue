<template lang="html">
  <div class="details-container">
    <h1>this.wonder.details.name</h1>
    <img src="this.wonder.details.images">
    <p>this.wonder.details.description</p>
    <p>this.wonder.details.description2</p>
    <p>this.wonder.details.description3</p>
  </div>
</template>

<script>
export default {
  name: "More-Detail",
  props: {
    wonder : Object
  },
}
</script>

<style lang="css" scoped>
</style>
