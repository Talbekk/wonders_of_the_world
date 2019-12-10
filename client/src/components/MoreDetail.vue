<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="details-head">{{wonder.details.name}}</h1>
      </div>
      <div class="col">
        <simple-button  class="home-button" eventChannel="select-homepage" message="Home"></simple-button>
      </div>
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
import SimpleButton from './SimpleButton';

export default {

  name: "More-Detail",
  props: {
    wonder : Object
  },
  methods: {
      onButtonClick: function() {
          eventBus.$emit(this.eventChannel);
      }
  },
  components: {
      "simple-button": SimpleButton
  }
}
</script>

<style lang="css" scoped>
.detail-image{
  height: 600px;
}

.details-head{
 justify-content: center;
}

.home-button{
  margin-top: 10px;
}
</style>
