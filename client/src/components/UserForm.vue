<template lang="html">
  <form class="user-name" action="index.html" method="post">
      <label for="username">Name:</label>
      <input id="username" type="text" name="username" value="">
      <input id="submit" type="submit" name="" value="Submit">
  </form>
</template>

<script>
export default {
  name: "user-form",
  data(){
    return{
      name: ""
    }
  }
}
</script>

<style lang="css" scoped>
</style>
