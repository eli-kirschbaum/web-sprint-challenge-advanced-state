import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
 
import { setQuiz, selectAnswer, fetchQuiz, postAnswer } from '../state/action-creators';
 
export function Quiz(props) {
 
 const { setQuiz, selectAnswer, fetchQuiz, selectedAnswer, postAnswer } = props;
 console.log(props)
 
 useEffect(() => {
   props.fetchQuiz();
 }, [])
 
 
 const handleSelectClick = (evt) => {
   props.selectAnswer({text: evt.target.value})
 }
 
 const handleSubmitClick = () => {
  console.log(`Submitting this -> ${props.quiz.quiz_id}`)
  props.postAnswer({ "quiz_id": props.quiz.quiz_id, "answer_id": "0VEv0" })
  
 }

 
 return (
   <div id="wrapper">
     {
       // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
       props.quiz != null ? (
         <>
           <h2>{props.quiz.question}</h2>
 
           <div id="quizAnswers">
             <div className={props.selectedAnswer?.text === props.quiz.answers[0].text ? 'answer selected' : 'answer' }>
                {props.quiz.answers[0].text}
               <button value={props.quiz.answers[0].text} onClick={handleSelectClick}>
                {props.selectedAnswer?.text === props.quiz.answers[0].text ? 'SELECTED' : 'Select'}
               </button>
             </div>
 
             <div className={props.selectedAnswer?.text === props.quiz.answers[1].text ? 'answer selected' : 'answer' }>
              {props.quiz.answers[1].text}
               <button value={props.quiz.answers[1].text} onClick={handleSelectClick}>
                {props.selectedAnswer?.text === props.quiz.answers[1].text ? 'SELECTED' : 'Select'}
               </button>
             </div>
           </div>
 
           <button disabled={selectedAnswer == null} id="submitAnswerBtn" onClick={handleSubmitClick}>Submit answer</button>
         </>
       ) : 'Loading next quiz...'
     }
   </div>
 )
}
 
const mapStateToProps = (state) => {
 return state;
}
 
export default connect(mapStateToProps , {setQuiz, selectAnswer, fetchQuiz, postAnswer})(Quiz)
