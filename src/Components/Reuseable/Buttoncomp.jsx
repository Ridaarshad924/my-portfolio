import React from 'react'
import Button from '@mui/material/Button';

const Buttoncomp = ({ buttonValue, ...props }) => {
  return (
    <>
      <div style={{ textAlign: "center" , padding: "15px 0px"}}>
        <Button variant="filled" sx={{backgroundColor:"goldenrod", color:"black", padding:"12px", borderRadius:"30px"}} {...props}>{buttonValue}</Button>
      </div>
    </>
  )
}

export default Buttoncomp
