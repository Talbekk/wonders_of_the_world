<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="details-head">{{selectedWonder.details.name}}</h1>
      </div>
      <div class="col">
          <router-link class="home-button" to="/">Go Home</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img  class="detail-image" :src="selectedWonder.details.image">
        <p class="first-elm">Height: {{selectedWonder.details.height}}</p>
        <p>Location: {{selectedWonder.details.location}}</p>
        <p>Year Built: {{selectedWonder.details.yearBuilt}}</p>
        <p>Purpose: {{selectedWonder.details.purpose}}</p>
      </div>
      <div class="col">
      <p>{{selectedWonder.details.description}}</p>
      <p>{{selectedWonder.details.description2}}</p>
      <p>{{selectedWonder.details.description3}}</p>
    </div>
  </div>
  <div  id="last-image" class="row">
    <img class="gallery-image" v-for='(image, index) in selectedWonder.details.imageGallery' :key="index" :src="image">
  </div>
</div>
</template>

<script>
import SimpleButton from '../components/SimpleButton';

export default {

  name: "more-detail",
  props: {
    selectedWonder : Object
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

.gallery-image{
  max-width: 25%;
}

.first-elm{
  margin-top: 30px;
}

#last-image img:last-child {
  margin-bottom: 50px;
}
</style>
