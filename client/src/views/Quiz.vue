<template>
    <div class="question-area">
        <div class="question-box" v-if="!showScore">
            <graphic-quiz-question :question="currentQuestion.question" v-if="!showScore"></graphic-quiz-question>
            <div class="answer-area" v-if="showAnswer">
                <graphic-quiz-answer
                v-for="(answer, index) in currentQuestion.answers" :key="index"
                @onSelectedImage="onSelectedImage"
                :answer="answer">
                </graphic-quiz-answer>
            </div>
            <div class="solution-area" v-if="showSolution">
                <img :src="solution.result | resultImage" />
                <p>{{ solution.result | resultMessage }}</p>
                <button @click="onSelectedPlay">{{solution.button}}</button>
            </div>
        </div>
        <div class="score-area" v-if="showScore">
                <p>Eih there, you managed to do {{correctQuestions}} on {{currentQuestionIndex}} questions</p>
                <button @click="onSelectedPlayAgain">Play again</button>
                <router-link class="top-left" to="/" tag="button">Go Home</router-link>
            </div> 
        <router-link class="top-left" to="/" tag="button" v-if="!showScore">Go Home</router-link>
    </div>
</template>

<script>
import GraphicQuizAnswer from "../components/GraphicQuizAnswer";
import GraphicQuizQuestion from "../components/GraphicQuizQuestion";
import SimpleButton from "../components/SimpleButton";
import App from '../App.vue';

export default {
    name: 'quiz',
    props: {
        questions: Array
    },
    data() {
        return {
            currentQuestionIndex: 0,
            showAnswer: true,
            showSolution: false,
            showScore: false,
            solution: {
                button: "Next",
                result: false
            },
            correctQuestions: 0,
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
            if (result) {
                this.correctQuestions++;
            }
            this.currentQuestionIndex++;
            if (!this.questions[this.currentQuestionIndex]) {
                this.showAnswer = false;
                this.showScore = true;
            } else {
                this.showAnswer = false;
                this.showSolution = true;
            }
        },
        onSelectedPlay: function() {
            this.showAnswer = true;
            this.showSolution = false;
        },
        onSelectedPlayAgain: function() {
            this.currentQuestionIndex = 0;
            this.showAnswer = true;
            this.showSolution = false;
            this.showScore = false;
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
    },
}
</script>
<style lang="css" scoped>
    .question-area{
        height: 100vh;
        background-image:url('https://trello-attachments.s3.amazonaws.com/5dea1c900b9ca67698a18706/5dee73eaf5e5d8673bc77d63/72d1a1731fb360707078f2f5c7cc2fd4/wallpaper.png');
        padding-top: 30px;
    }
    .question-box {
        margin-left: auto;
        margin-right: auto;
        padding: 10px 5px 15px 5px;
        max-width: 650px;
        background-color: rgba(175, 220, 103, 0.81);
    }
    .answer-area {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        max-width: 650px;
        margin: 0 auto;
    }
    .solution-area {
        padding: 20px;
        background-color: rgba(113, 208, 233, 0.81);
        font-size: 20px;
        margin: 20px 20px 0px 20px;
        max-width: 650px;
    }
    .score-area {
        padding: 20px;
        background-color: rgba(113, 208, 233, 0.91);
        font-size: 20px;
        margin: 20vh auto auto auto;
        max-width: 650px;
        font-weight: 700;
        font-size: 1.5rem;
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
