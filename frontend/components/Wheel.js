import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';
 
export function Wheel(props) {
  const { moveClockwise, moveCounterClockwise } = props;
 
 const handleClockwiseClick = () => {
   console.log('clockwise button hit')
   moveClockwise()
   console.log(props) 
 }
 
 
 const handleCounterClockwiseClick = () => {
   console.log('counter clockwise button hit')
   moveCounterClockwise()
   console.log(props)
 }
 
  return (
   <div id="wrapper">
     <div id="wheel">
       <div className={props.wheel === 0 ? 'cog active' : 'cog'} style={{ "--i": 0 }}>{props.wheel === 0 ? 'B' : null}</div>
       <div className={props.wheel === 1 ? 'cog active' : 'cog'} style={{ "--i": 1 }}>{props.wheel === 1 ? 'B' : null}</div>
       <div className={props.wheel === 2 ? 'cog active' : 'cog'} style={{ "--i": 2 }}>{props.wheel === 2 ? 'B' : null}</div>
       <div className={props.wheel === 3 ? 'cog active' : 'cog'} style={{ "--i": 3 }}>{props.wheel === 3 ? 'B' : null}</div>
       <div className={props.wheel === 4 ? 'cog active' : 'cog'} style={{ "--i": 4 }}>{props.wheel === 4 ? 'B' : null}</div>
       <div className={props.wheel === 5 ? 'cog active' : 'cog'} style={{ "--i": 5 }}>{props.wheel === 5 ? 'B' : null}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
     </div>
     <div id="keypad">
       <button id="counterClockwiseBtn" onClick={handleCounterClockwiseClick}>Counter clockwise</button>
       <button id="clockwiseBtn" onClick={handleClockwiseClick}>Clockwise</button>
     </div>
   </div>
 )
}
 
const mapStateToProps = (state) => {
 return state;
}
 
export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)
