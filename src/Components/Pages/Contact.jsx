import React, { useState } from 'react'
import Input from '../Reuseable/Input'
import Heading from '../Reuseable/Heading'
import Buttoncomp from '../Reuseable/Buttoncomp'
import './style.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  const [data, setData] = useState({ Name: "", number: "", message: "" })
  const [error, setError] = useState("");

  const updateValue = (e) => {
    setData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = () => {
    if (!data.Name || !data.number || !data.message) {
      setError("All fields are required!");
      return;
    }
    console.log(data);
    setError("")
  }
  return (
    <>
      <Heading heading="Contact Me" />
      <div className="contact">
        <Input id="outlined-basic" type="text" name="Name" label="Enter Your Name" onChange={updateValue} />
        <Input id="outlined-basic" type="number" name="number" label="Enter Your Number" onChange={updateValue} />
        <Input id="outlined-basid" type="text" name="message" label="Enter Your Message" onChange={updateValue} multiline rows={5} />
        {error && <div className="errormsg">{error}</div>}
        <Buttoncomp onClick={handleSubmit} buttonValue="Send Message" />
        <div className="socialicons">
          <a href="" target='blank'>
            <FacebookIcon />
          </a>
          <a href="" target='blank'>
            <InstagramIcon />
          </a>
          <a href="" target='blank'>
            <CallIcon />
          </a>
          <a href="" target='blank'>
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
