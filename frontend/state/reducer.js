// ❗ You don't need to add extra reducers to achieve MVP
import { bindActionCreators, combineReducers } from 'redux'
 
const initialWheelState = 0
function wheel(state = initialWheelState, action) {
 switch(action.type) {
   case("MOVE_CLOCKWISE"):
       return (
         state === 5 ? 0 : state + 1
       )
 
   case("MOVE_COUNTERCLOCKWISE"):
       return (
         state === 0 ? 5 : state - 1
       )
   default:
       return(state);
}
}
 
const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
   case("SET_QUIZ_INTO_STATE"):
       return (
           action.payload
       )
   default:
       return(state);
}
}
 
const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
   case("SET_SELECTED_ANSWER"):
       return (
          action.payload
       )
   default:
       return(state);
}
}
 
const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
 switch(action.type) {
   case("SET_INFO_MESSAGE"):
       return (
           action.payload
       )
   default:
       return(state);
}
}
 
const initialFormState = {
 newQuestion: '',
 newTrueAnswer: '',
 newFalseAnswer: '',
}
 
function form(state = initialFormState, action) {
 console.log(action.payload)
  switch(action.type) {
   case("INPUT_CHANGE"):
    const id = action.payload.id;
    const value = action.payload.value;
  
    if (id === "newQuestion") {
      return {...state, newQuestion: value}
    } else if (id === "newTrueAnswer") {
      return {...state, newTrueAnswer: value}
    } else if (id === "newFalseAnswer") { 
      return {...state, newFalseAnswer: value}
    }
   case("RESET_FORM"):
       console.log("RESETTING THE FORM!!!!")
      return {
          ...initialFormState
       }
   default:
       return(state);
}
}
 
export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
