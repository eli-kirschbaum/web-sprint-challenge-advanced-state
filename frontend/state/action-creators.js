// ❗ You don't need to add extra action creators to achieve MVP
import axios from 'axios';
import {
 SET_QUIZ_INTO_STATE,
 MOVE_CLOCKWISE,
 MOVE_COUNTERCLOCKWISE,
 SET_SELECTED_ANSWER,
 SET_INFO_MESSAGE,
 INPUT_CHANGE,
 RESET_FORM
} from './action-types';
 
export function moveClockwise() {
 return({type:'MOVE_CLOCKWISE'})
}
 
export function moveCounterClockwise() {
 return({type:'MOVE_COUNTERCLOCKWISE'})
}
 
export function selectAnswer(answer) {
 return({type:'SET_SELECTED_ANSWER', payload:answer})
}
 
export function setMessage(message) {
 return({type:'SET_INFO_MESSAGE', payload:message})
}
 
export function setQuiz(quiz) {
 return({type:'SET_QUIZ_INTO_STATE', payload:quiz})
}
 
export function inputChange(textInput) {
 return({type:'INPUT_CHANGE', payload:textInput})
}
 
export function resetForm() {
 return({type:'RESET_FORM'})
}
 
// ❗ Async action creators
export function fetchQuiz() {
 return function (dispatch) {
   // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
   // On successful GET:
   // - Dispatch an action to send the obtained quiz to its state
   dispatch({type: SET_QUIZ_INTO_STATE, payload: null})
   axios.get('http://localhost:9000/api/quiz/next')
     .then(res => {
       console.log(`FETCH QUIZ CONSOLE LOG - > ${res.data}`)
       dispatch({type: SET_QUIZ_INTO_STATE, payload: res.data})
     })
     .catch(err => console.log({ err }))
 }
}
export function postAnswer(input) {
 return function (dispatch) {
   // On successful POST:
   // - Dispatch an action to reset the selected answer state
   // - Dispatch an action to set the server message to state
   // - Dispatch the fetching of the next quiz
   axios.post('http://localhost:9000/api/quiz/answer', input)
     .then(res => {
       console.log(res)
       dispatch({type: SET_SELECTED_ANSWER, payload: null})
       dispatch(fetchQuiz())
       dispatch({type: SET_INFO_MESSAGE, payload:res.data.message})

     })
     .catch(err => console.log({ err }))
 }
}
export function postQuiz(payloadInput) {
 return function (dispatch) {
   // On successful POST:
   // - Dispatch the correct message to the the appropriate state
   // - Dispatch the resetting of the form
   axios.post('http://localhost:9000/api/quiz/new', payloadInput)
    // { "question_text": "Love JS?", "true_answer_text": "yes", "false_answer_text": "nah" }
     .then(res => {
       dispatch({type: SET_INFO_MESSAGE, payload:`Congrats: "${payloadInput.question_text}" is a great question!`})
       dispatch({type: RESET_FORM, payload: null})
     })
     .catch(err => console.log({ err }))
 }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
