
// const wonderURL = 'api/wonders/'
// const quizURL = 'api/quiz/'

// export default {
//   getWonders(){
//     return fetch(wonderURL)
//     .then(res => res.json())
//   },
//   getQuiz(){
//     return fetch(quizURL)
//     .then(res => res.json())
//   },
// }

import axios from 'axios';

const wonderURL = 'api/wonders/';
const quizURL = 'api/quiz/';

class GlobeService {
  // GET POSTS 
  static getWonders(){
    return new Promise( async (resolve, reject) => {
      try {
        const res = await axios.get(wonderURL);
        const data = res.data;
        resolve(
          data.map(wonder => ({
            ...wonder
          }))
        );
      } catch(err) {
        reject(err);
      }
    })
  }

  static getQuiz(){
    return new Promise( async (resolve, reject) => {
      try {
        const res = await axios.get(quizURL);
        const data = res.data;
        resolve(
          data.map(quiz => ({
            ...quiz
          }))
        );
      } catch(err) {
        reject(err);
      }
    })
  }

}

export default GlobeService;

