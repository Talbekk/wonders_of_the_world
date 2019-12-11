<template lang="html">
  <div class="container">
    <div class="row separation">
      <div class="col">
        <simple-button  class="home-button" eventChannel="select-homepage" message="Home"></simple-button>
      </div>
    </div>
    <div class="row separation">
      <div class="col">
        <h1 class="details-head">{{wonder.details.name}}</h1>
      </div>
    </div>
    <div class="row separation center area">
      <!-- <div class="col-sm-6"> -->
        <img  class="img-fluid full-cover" :src="wonder.details.image">
    </div>
    <div class="row separation center area">
        <div class="col-sm-3">
          <strong>Height:</strong> {{wonder.details.height}}
        </div>
        <div class="col-sm-3">
          <strong>Year Built:</strong> {{wonder.details.yearBuilt}}
        </div>
        <div class="col-sm-3">
          <strong>Location:</strong> {{wonder.details.location}}
        </div>
        <div class="col-sm-3">
          <strong>Purpose:</strong> {{wonder.details.purpose}}
        </div>
      </div>
      <div class="row separation center area">
        <p>{{wonder.details.description}}</p>
        <p>{{wonder.details.description2}}</p>
        <p>{{wonder.details.description3}}</p>
      </div>
    <div  id="last-image" class="row separation center">
      <img class="gallery-image img-fluid full-cover" v-for='(image, index) in wonder.details.imageGallery' :key="index" :src="image">
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
.area {
  margin: 0px 10px;
}

.center {
  display: flex;
  justify-content: center;
  width: auto; 
  text-align: center;
}

.separation {
  padding: 10px 0px;
}

.container {
  background-color: white;
}

.details-head{
 justify-content: center;
}

.home-button{
  margin-top: 10px;
}

.gallery-image{
  width: 250px;
  height: 250px;
  margin: 10px;
}

.full-cover{
  object-fit: cover;
}

.first-elm{
  margin-top: 30px;
}

#last-image img:last-child {
  margin-bottom: 50px;
}
</style>
