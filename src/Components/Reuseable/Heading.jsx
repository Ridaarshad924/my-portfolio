import React from 'react'
import Style from './Heading.module.css'

const Heading = ({heading}) => {
  return (
    <>
      <h1 className={Style.heading}>{heading}</h1>
    </>
  )
}

export default Heading
