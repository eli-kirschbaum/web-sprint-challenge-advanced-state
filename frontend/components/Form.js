import e from 'cors'
import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
//

export function Form(props) {

  const { inputChange, form, postQuiz, resetForm  } = props
 
  const onChange = evt => {
   const id = evt.target.id
   const value = evt.target.value
   inputChange({
    id: id,
    value: value,
    })
 }
 
 const onSubmit = evt => {
   evt.preventDefault()
   const { newQuestion, newTrueAnswer, newFalseAnswer } = form
   const newObj = {
    question_text: newQuestion, 
    true_answer_text: newTrueAnswer, 
    false_answer_text: newFalseAnswer
   }
   postQuiz(newObj)
   resetForm()
 }
 console.log(`FORM LOG => ${Object.keys(form)}`)
 return (
   <form id="form" onSubmit={onSubmit}>
     <h2>Create New Quiz</h2>
     <input value={form.newQuestion} maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question"/>
     <input value={form.newTrueAnswer} maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
     <input value={form.newFalseAnswer} maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
     <button id="submitNewQuizBtn" disabled={form.newQuestion.trim().length === 0 || form.newTrueAnswer.trim().length === 0 || form.newFalseAnswer.trim().length === 0}>Submit new quiz</button>
   </form>
 )
}
 
export default connect(st => st, actionCreators)(Form)
