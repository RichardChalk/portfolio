import React, { useState, forwardRef, useImperativeHandle } from 'react'
import "./snackbar.css"
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const Snackbar = forwardRef((props, ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    // These functions will be accessable from the outside
    useImperativeHandle(ref, () => ({
        Show(){
            setShowSnackbar(true);
            setTimeout(() => {
                setShowSnackbar(false);
            }, 3000);
        },
      }))
    

  return (
    <div className="snackbar" 
    style={{backgroundColor: props.type === "success" ? "#00F593" : "#FF0033"}} 
    id={showSnackbar ? "show" : "hide"}
    >  
        <div className='snackbar__icon'>{props.type === "success" ? <BsCheckCircleFill/> : <BsFillExclamationCircleFill/>}</div>
        <div className='snackbar__message'>{props.message}</div>
    </div>
  )
})

export default Snackbar