<template>
    <div class="answer">
        <img :src="answer.image" class="rounded" alt="" @click="onImageClicked">
    </div>
</template>

<script>
export default {
    name: "graphic-quiz-answer",
    props: {
        answer: Object
    },
    methods: {
        onImageClicked: function() {
            this.$emit("onSelectedImage", this.answer.correct);
        }
    }
}
</script>

<style lang="css" scoped>
    .answer {
        margin: 20px;
        width: 40%;

    }

    img {
      width: 260px;
      height: 180px;
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transition: .3s ease-in-out;
      transition: .3s ease-in-out;
      background-color: white;
      padding: 5px;
    }

    img:hover{
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
</style>
