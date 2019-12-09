<template>
    <div class="question-area">
        <graphic-quiz-question :question="questions[currentQuestionIndex].question"></graphic-quiz-question>
        <graphic-quiz-answer
        v-for="(answer, index) in questions[currentQuestionIndex].answers" :key="index"
        @onSelectedImage="onSelectedImage"
        :answer="answer">
        </graphic-quiz-answer>
    </div>
</template>

<script>
import GraphicQuizQuestion from './GraphicQuizQuestion';
import GraphicQuizAnswer from './GraphicQuizAnswer';

export default {
    name: "graphic-quiz",
    data() {
        return {
            currentQuestionIndex: 0
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