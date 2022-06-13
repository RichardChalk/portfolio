import React from 'react'
import "./snackbar.css"
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const Snackbar = (props) => {
  return (
    <div className="snackbar" style={{backgroundColor: props.type === "success" ? "#00F593" : "#FF0033"}} >  
        <div className='snackbar__icon'>{props.type === "success" ? <BsCheckCircleFill/> : <BsFillExclamationCircleFill/>}</div>
        <div className='snackbar__message'>{props.message}</div>
    </div>
  )
}

export default Snackbar