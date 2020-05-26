<template>
    <div class="question">
        <h2>
            <router-link :to="{name: 'home'}">
              <img id="earth" src="quiz/earth_spining.gif">{{question}}
            </router-link>
        </h2>
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
    /* .question {
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
        display: inline-block;
        padding: 20px 5px 0px 5px;
        max-width: 650px;
        background-color: rgba(175, 220, 103, 0.81);
    } */


    img#earth {
      width: 10%;
      height: auto;
      margin-right: 20px;
    }

</style>
