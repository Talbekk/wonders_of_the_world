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
            <p>{{ solution.result | resultMessage }}</p>
            <img :src="solution.result | resultImage"></img>
            <router-link :to="{name: 'home'}">
              <button>Home</button>
            </router-link>
            <button @click="onSelectedPlay">{{solution.button}}</button>

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
                button: "Next",
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
    filters: {
        resultMessage: function(value) {
            return value ? "Nicely done! You are right" : "Wrong answer!"

        },
        resultImage: function(value){
            return value ? "quiz/clapping.gif": "quiz/crying_bear.gif"
        }
    },
    components: {
        "graphic-quiz-question": GraphicQuizQuestion,
        "graphic-quiz-answer": GraphicQuizAnswer,
        "simple-button": SimpleButton
    }
}
</script>

<style lang="css" scoped>
    .answer-area {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        max-width: 650px;
        margin: 0 auto;
        background-color: rgba(175, 220, 103, 0.81);
    }
    .solution-area {
        padding: 20px;
        background-color: #71d0e9;
        font-size: 20px;
    }
    Button {
      background-color: #44c767;
      border-radius: 28px;
      border: 1px solid #18ab29;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      /* font-family: Arial; */
      font-size: 20px;
      padding: 16px 31px;
      text-decoration: none;
      text-shadow: 0px 1px 0px #2f6627;
      margin: 10px;
    }
    Button:hover {
    	background-color:#5cbf2a;
    }
    Button:active {
    	position:relative;
    	top:1px;
    }
    img {
      display: flex;
      margin: auto;
      height: 150px;
      width: auto;
    }


</style>
