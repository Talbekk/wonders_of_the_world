<template lang="html">
    <div class="background">
      <router-link class="home-button" to="/" tag="button">Go Home</router-link>
      <div class="container details">
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
.background {
    background: url(https://digidezine.com/wp-content/uploads/revslider/agency-sparta-animated1/4-25_mini_mini2.jpg);
    padding-bottom: 50px;
}

.details {
    background-color: #ffffffe6;
    border-radius: 30px;
    padding-top: 30px;
}

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
  background-color: #ffffffe6;
}

.details-head{
 justify-content: center;
}

.home-button{
  top: 200px;
  transition: 0.3s ease-in-out;
  position: relative;
  left: 70%;
  font-size: 15px;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50);
  padding: 20px;
  padding-right: 200px;
  padding-left: 40px;
  background-color: white;
  max-width: 60%;
  background-color: #227fd0eb;
  font-size: 20px;
  border: 0px;
}
.home-button:hover{
  left: 60%;
  position: relative;
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
