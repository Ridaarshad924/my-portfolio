import React from 'react'
import Button from '@mui/material/Button';

const Buttoncomp = ({ buttonValue, ...props }) => {
  return (
    <>
      <div style={{ textAlign: "center" , padding: "15px 0px"}}>
        <Button variant="outlined" sx={{borderColor:"goldenrod", color:"goldenrod"}} {...props}>{buttonValue}</Button>
      </div>
    </>
  )
}

export default Buttoncomp
