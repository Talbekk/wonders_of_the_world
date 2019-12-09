<template>
    <div class="question-area" v-if="currentQuestion">
        <graphic-quiz-question :question="currentQuestion.question"></graphic-quiz-question>
        <div class="answer-area">
            <graphic-quiz-answer
            v-for="(answer, index) in currentQuestion.answers" :key="index"
            @onSelectedImage="onSelectedImage"
            :answer="answer">
            </graphic-quiz-answer>
        </div>
    </div>
</template>

<script>
import GraphicQuizQuestion from './GraphicQuizQuestion';
import GraphicQuizAnswer from './GraphicQuizAnswer';

export default {
    name: "graphic-quiz",
    data() {
        return {
            currentQuestionIndex: 0,
            showAnswer: true,
            showSolution: false,
        }
    },
    computed: {
        currentQuestion: function() {
            return this.questions[this.currentQuestionIndex];
        }
    },
    props: {
        questions: Array
    },
    methods: {
        onSelectedImage: function(result) {
            console.log(result);
        }
    },
    components: {
        "graphic-quiz-question": GraphicQuizQuestion,
        "graphic-quiz-answer": GraphicQuizAnswer
    }
}
</script>

<style lang="css">
    .answer-area {
        display: flex;
    }
</style>