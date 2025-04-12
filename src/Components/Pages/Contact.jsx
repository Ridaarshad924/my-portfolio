import React, { useState } from 'react'
import Input from '../Reuseable/Input'
import Heading from '../Reuseable/Heading'
import Buttoncomp from '../Reuseable/Buttoncomp'
import './style.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import Swal from 'sweetalert2'

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
    Swal.fire({
      title: 'Success!',
      text: 'Form submitted successfully!',
      icon: 'success',
      // confirmButtonText: 'OK',
      showConfirmButton: false,
      position: 'center',
      timer: 2000,
    });
  }
  return (
    <>
      <Heading heading="Contact Me" />
      <div className="contact">
        <Input id="outlined-basic" type="text" name="Name" label="Enter Your Name" onChange={updateValue} />
        <Input id="outlined-basic" type="number" name="number" label="Enter Your Number" onChange={updateValue} />
        <Input id="outlined-basid" type="text" name="message" label="Enter Your Message" onChange={updateValue} multiline rows={5} />
        {error && <div className="errormsg">{error}</div>}
        <Buttoncomp onClick={handleSubmit} buttonValue="Submit Form" />
        <div className="socialicons">
          <a href="https://www.facebook.com/share/1A7AfdNZsm/" target='blank'>
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/ridaarshad78?igsh=MTdzYmtzZ3k4M29zOA==" target='blank'>
            <InstagramIcon />
          </a>
          <a href="tel:+923482236028" target='blank'>
            <CallIcon />
          </a>
          <a href="https://www.linkedin.com/in/rida-arshad-7075bb21a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
