import React from 'react'
import { connect } from 'react-redux'
 
export function Message(props) {
 return <div id="message">Nice job!</div>
}
 
const mapStateToProps = (state) => {
 return state;
}
 
export default connect(mapStateToProps)(Message)
