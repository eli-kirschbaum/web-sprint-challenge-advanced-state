import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
 
import { setQuiz, selectAnswer, fetchQuiz } from '../state/action-creators';
 
export function Quiz(props) {
 
 const { setQuiz, selectAnswer, fetchQuiz } = props;
 console.log(props)
 
 useEffect(() => {
   props.fetchQuiz();
 }, [])
 
 
 const handleSelectClick = () => {
   console.log('Select Button Clicked')
   selectAnswer()
 }
 
 const handleSubmitClick = () => {
   console.log('Submit Button Clicked')
 }
 
 
 
 return (
   <div id="wrapper">
     {
       // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
       props.quiz != null ? (
         <>
           <h2>{props.quiz.question}</h2>
 
           <div id="quizAnswers">
             <div className="answer selected">
                Answer 1
               <button onClick={handleSelectClick}>
                 SELECTED
               </button>
             </div>
 
             <div className="answer">
               Answer 2
               <button onClick={handleSelectClick}>
                 Select
               </button>
             </div>
           </div>
 
           <button id="submitAnswerBtn" onClick={handleSubmitClick}>Submit answer</button>
         </>
       ) : 'Loading next quiz...'
     }
   </div>
 )
}
 
const mapStateToProps = (state) => {
 return state;
}
 
export default connect(mapStateToProps , {setQuiz, selectAnswer, fetchQuiz})(Quiz)
