const wonderURL = 'http://localhost:3000/api/wonders/'
const quizURL = 'http://localhost:3000/api/quiz/'

export default {
  getWonders(){
    return fetch(wonderURL)
    .then(res => res.json())
  },
  getQuiz(){
    return fetch(quizURL)
    .then(res => res.json())
  },
}
