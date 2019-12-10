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
        margin: 30px;
        width: 250px;
        height: 250px;
    }
    img {
        object-fit: cover;
        width: 250px;
        height: 250px;
    }
</style>