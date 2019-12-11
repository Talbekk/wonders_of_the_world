<template lang="html">
  <div>
    <graphic-quiz :questions="questions"></graphic-quiz>
  </div>
</template>

<script>
import GraphicQuiz from "../components/GraphicQuiz";
import GraphicQuizAnswer from "../components/GraphicQuizAnswer";
import GraphicQuizQuestion from "../components/GraphicQuizQuestion";
import SimpleButton from "../components/SimpleButton";

import App from '../App.vue';

export default {
  name: 'quiz',
  props: {
      questions: Array
  },
  components: {
    "graphic-quiz": GraphicQuiz,
    "app": App,
    "graphic-quiz-question": GraphicQuizQuestion,
    "graphic-quiz-answer": GraphicQuizAnswer,
    "simple-button": SimpleButton
  },
  methods: {
    onPlayQuizClick: function() {
      this.enableSection("quiz")
  },
  // watch: {
  //   questions: function(x, y) {
  //     if (x.length) {
  //       this.enableSection
  //     }
  //   }
  // }
},
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
}
</script>
<style lang="css" scoped>
</style>
