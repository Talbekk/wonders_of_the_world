<template>
    <div class="question">
        <h2>{{question}}</h2>
    </div>
</template>

<script>
export default {
    name: "graphic-quiz-question",
    props: {
        question: String
    }
}
</script>

<style lang="css" scoped>
    .question {
        margin: 50px 20px 10px 20px;
    }
</style>