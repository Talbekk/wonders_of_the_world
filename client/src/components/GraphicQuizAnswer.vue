<template>
    <div>
        <img :src="answer.image" class="img-fluid" alt="" @click="onImageClicked">
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
            this.$emit("onSelectedImage", answer.correct);
        }
    }
}
</script>

<style lang="css" scoped>
    
</style>