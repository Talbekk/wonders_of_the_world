<template lang="html">
  <form class="user-name">
      <label for="username">Name:</label>
      <input id="username" type="text" v-model="name" name="username">
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
