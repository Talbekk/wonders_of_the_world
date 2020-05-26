const wonderURL = "/api/wonders"
const quizURL = "/api/quiz"

export default {
  getWonders(){
    return fetch(wonderURL)
    .then(res => res.text())
    .then(text => console.log("wonders", text));
  },
  getQuiz(){
    return fetch(quizURL)
    .then(res => res.text())
    .then(text => console.log("quiz", text));
  },
}
