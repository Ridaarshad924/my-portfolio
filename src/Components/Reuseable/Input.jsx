import { mergeSlotProps, TextField } from '@mui/material'
import React from 'react'
import style from './Input.module.css'

const Input = ({ label, type, id, ...props}) => {
    return (
        <>
            <TextField className={style.input} id={id} label={label} type={type} {...props} variant="outlined" />
        </>
    )
}

export default Input
