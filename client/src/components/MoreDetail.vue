<template lang="html">
  <div class="container">
    <div class="row">
      <h1 class="details-head">{{wonder.details.name}}</h1>
    </div>
    <div class="row">
      <div class="col">
        <img  class="detail-image" :src="wonder.details.image">
        <p>Height: {{wonder.details.height}}</p>
        <p>Location: {{wonder.details.location}}</p>
        <p>Year Built: {{wonder.details.yearBuilt}}</p>
        <p>Purpose: {{wonder.details.purpose}}</p>
      </div>
      <div class="col">
      <p>{{wonder.details.description}}</p>
      <p>{{wonder.details.description2}}</p>
      <p>{{wonder.details.description3}}</p>
    </div>
  </div>
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
.detail-image{
  height: 600px;
}

.details-head{
 justify-content: center;
}
</style>
