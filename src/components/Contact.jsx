import React, { useState } from 'react';
import { contacting } from '../assets';
import emailjs from "emailjs-com";
import {motion} from "framer-motion"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: ""
  });
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');
  const [show,setShow]=useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
const timming=()=>{
  setTimeout(() => {
    setShow(false)
  }, 2000);
}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject) {
      setError('All fields are required');
      return;
    }
    setError('');
  
    const serviceID = 'service_h0jg9m5';
    const templateID = 'template_l09f6x1';
    const publicKey = 'CzFq3obUArQoCTReK'; 
  
    const templateParams = {
      from_name: formData.name,  // Set from_name to the name from your form
      to_name: 'siddhu', // Change this to the recipient's name
      message: formData.subject, // Use the subject or add another input for message
      reply_to: formData.email   // Reply-to email
    };
  
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setEmailSent(true);
        setShow(true)
        timming()
        setFormData({
          name: "",
          email: "",
          subject: ""
        });
      })
      .catch(err => {
        setError('Failed to send email, please try again');
      });
  };
  
  return (
    <div id='contact' className='mt-10 sm:flex sm:flex-row flex-col overflow-hidden'>
      {/* left side (Form) */}
      <motion.div initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:0}} transition={{duration:1}}
      className='sm:order-1 order-2 flex-1 rounded-lg'>
        <form 
          className='flex rounded-lg p-10 bg-gray-800 sm:flex-col flex-col max-sm:items-center justify-center'
          onSubmit={handleSubmit} // Corrected the onSubmit handler here
        >
          <div>
            <label className='text-white block mb-4 ' htmlFor="name">Name:</label>
            <input className='text-white sm:w-[600px] px-2 sm:px-5 mb-10 py-4 rounded-lg bg-black border' type="text" id='name'
              value={formData.name}
              onChange={handleChange} 
            />
          </div>
          <div>
            <label className='text-white block mb-4' htmlFor="email">Email:</label>
            <input className='text-white sm:w-[600px] sm:px-5 px-2 mb-10 py-4 rounded-lg bg-black border' type="email" id='email'
              value={formData.email}
              onChange={handleChange} 
            />
          </div>
          <div>
            <label className='text-white block mb-4' htmlFor="subject">Subject:</label>
            <input className='text-white sm:w-[600px] px-2 sm:px-5 py-4 rounded-lg bg-black border' type="text" id='subject' 
              value={formData.subject}
              onChange={handleChange} 
            />
          </div>
          
          {error && <p className='text-red-500'>{error}</p>}
          <div className='flex items-center mt-8 justify-center'>
            <button type='submit' className='text-blue-600 font-bold text-xl hover:bg-blue-200 mt-5 bg-gray-700 w-[200px] py-4 rounded-full'>
              Submit
            </button>
          </div>
          {emailSent && show && <p className='text-green-500 mt-4'>Email sent successfully!</p>}
        </form>
      </motion.div>

      {/* right side (Video) */}
      <div className='flex-grow sm:order-2 mt-10 order-1 sm:max-w-[600px] h-auto'>

       <motion.div initial={{opacity:0,x:100}} 
       whileInView={{opacity:1,x:0}}
       transition={{duration:1}}
       >
       <video
          autoPlay
          playsInline
          loop
          muted
          className='sm:w-[800px] sm:h-[450px] pointer-events-none object-cover bg-black'        >
          <source src={contacting} />
        </video>
       </motion.div>
       
      </div>
    </div>
  );
};

export default Contact;