<template>
    <div :class="position" >
        <p :class="speech">{{msg}}</p>
        <img :src="image" />

    </div>
</template>

<script>
export default {
    name: "conversation-box",
    props: {
        message: String,
        position: String,
        speech:String,
        image: String,
        username: String
    },
    computed: {
        msg: function() {
            return this.message.replace("$USERNAME", this.username);
        }
    },
}
</script>

<style lang="css" scoped>
    .box {
        position:relative;
    }
    .right {
        position:absolute;
        bottom:0;
        right:0;
        font-size: 20px;
        width: 300px;
        /* height: 100px; */
        /* padding: 50px; */
    }
    /* speech bubble */
  .right_speech_bubble {
  	position: relative;
  	background: white;
  	border-radius: .4em;
  }

  .right_speech_bubble:after {
    content: '';
  	position: absolute;
  	bottom: 0;
  	left: 50%;
  	width: 0;
  	height: 0;
  	border: 1.219em solid transparent;
  	border-top-color: white;
  	border-bottom: 0;
  	border-left: 0;
  	margin-left: -0.609em;
  	margin-bottom: -1.219em;
    }

    .left {
        position:absolute;
        bottom:0;
        left:0;
        font-size: 20px;
        width: 300px;
        /* height: 100px; */
        /* padding: 50px; */

    }

    .left_speech_bubble {
      position: relative;
      background: white;
      border-radius: .4em;
    }

    .left_speech_bubble:after {
      content: '';
    	position: absolute;
    	bottom: 0;
    	left: 50%;
    	width: 0;
    	height: 0;
    	border: 0.625em solid transparent;
    	border-top-color: white;
    	border-bottom: 0;
    	border-right: 0;
      margin-left: -0.312em;
      margin-bottom: -0.625em;
      }
    img {
      height: auto;
      width: 50%;
      display: inline;
      padding-top: 30px;
      bottom: 0;
      position: sticky;

    }

</style>
