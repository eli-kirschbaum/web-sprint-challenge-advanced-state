import React from 'react'
import { connect } from 'react-redux'

//import { infoMessage } from '../state/action-creators';
 
export function Message(props) {

 const { infoMessage } = props;
 return <div id="message">{infoMessage}</div>
}
 
const mapStateToProps = (state) => {
 return state;
}
 
export default connect(mapStateToProps)(Message)
