<template>
    <div class="question-area" v-if="currentQuestion">
        <graphic-quiz-question :question="currentQuestion.question"></graphic-quiz-question>
        <div class="answer-area" v-if="showAnswer">
            <graphic-quiz-answer
            v-for="(answer, index) in currentQuestion.answers" :key="index"
            @onSelectedImage="onSelectedImage"
            :answer="answer">
            </graphic-quiz-answer>
        </div>
        <div class="solution-area" v-if="showSolution">
            {{solution.result}}
            <button @click="onSelectedPlay">{{solution.button}}</button>
            <simple-button eventChannel="select-homepage" message="Go back"></simple-button>
        </div>
    </div>
</template>

<script>
import GraphicQuizQuestion from './GraphicQuizQuestion';
import GraphicQuizAnswer from './GraphicQuizAnswer';
import SimpleButton from './SimpleButton';

export default {
    name: "graphic-quiz",
    data() {
        return {
            currentQuestionIndex: 0,
            showAnswer: true,
            showSolution: false,
            solution: {
                button: "Play Again",
                result: false
            }
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
            this.solution.result = result;
            this.showAnswer = false;
            this.showSolution = true;
        },
        onSelectedPlay: function() {
            // if (this.currentQuestionIndex === (this.questions.length - 1)) {
            this.currentQuestionIndex++;
            if (!this.questions[this.currentQuestionIndex]) {
                this.currentQuestionIndex = 0;
            }
            this.showAnswer = true;
            this.showSolution = false;
        }
    },
    components: {
        "graphic-quiz-question": GraphicQuizQuestion,
        "graphic-quiz-answer": GraphicQuizAnswer,
        "simple-button": SimpleButton
    }
}
</script>

<style lang="css">
    .answer-area {
        display: flex;
    }
</style>