<template lang="html">
    <div class="container">
      <div class="row separation">
        <div class="col">
          <router-link class="home-button" to="/">Go Home</router-link>
        </div>
      </div>
      <div class="row separation">
        <div class="col">
          <h1 class="details-head">{{selectedWonder.details.name}}</h1>
        </div>
      </div>
      <div class="row separation center area">
          <img  class="img-fluid full-cover" :src="selectedWonder.details.image">
      </div>
      <div class="row separation center area">
        <div class="col-sm-3">
          <strong>Height:</strong> {{selectedWonder.details.height}}
        </div>
        <div class="col-sm-3">
          <strong>Year Built:</strong> {{selectedWonder.details.yearBuilt}}
        </div>
        <div class="col-sm-3">
          <strong>Location:</strong> {{selectedWonder.details.location}}
        </div>
        <div class="col-sm-3">
          <strong>Purpose:</strong> {{selectedWonder.details.purpose}}
        </div>
      </div>
      <div class="row separation center area">
        <p>{{selectedWonder.details.description}}</p>
        <p>{{selectedWonder.details.description2}}</p>
        <p>{{selectedWonder.details.description3}}</p>
      </div>
    <div  id="last-image" class="row separation center">
      <img class="gallery-image img-fluid full-cover" v-for='(image, index) in selectedWonder.details.imageGallery' :key="index" :src="image">
    </div>
  </div>
</template>

<script>
export default {

  name: "more-detail",
  props: {
    selectedWonder : Object
  },
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
