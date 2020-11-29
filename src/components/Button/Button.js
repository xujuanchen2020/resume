import React from 'react'
import './ButtonStyle.css'
import {Button} from '@material-ui/core'

const MyButton = ({text, icon}) => {
    return (
        <Button className='custom_btn' endIcon={icon?<div className="btn_icon_container">{icon}</div>:null}>
            <span className='btn_text'>{text}</span> 
        </Button>
    )
}

export default MyButton
