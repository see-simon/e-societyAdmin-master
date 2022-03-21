// import React, {useState} from 'react';
// import { send } from 'emailjs-com';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ReportScreen = () => {

  // const [toSend, setToSend] = useState({
  //   from_name: '',
  //   to_name: '',
  //   message: '',
  //   reply_to: '',
  // });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   send(
  //     'service_ygavo3m',
  //     'template_jdulvyy',
  //     toSend,
  //     'TIORF9RNPSLNn6teW'

  //     // 'SERVICE ID',
  //     // 'TEMPLATE ID',
  //     // toSend,
  //     // 'User ID'
  //   )
  //     .then((response) => {
  //       console.log('SUCCESS!', response.status, response.text);
  //     })
  //     .catch((err) => {
  //       console.log('FAILED...', err);
  //     });
  // };

  // const handleChange = (e) => {
  //   setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };


  // console.log(toSend)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ygavo3m', 'template_uc4qcev', form.current, 'TIORF9RNPSLNn6teW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 

  return (
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
    
//      <form onSubmit={onSubmit}>
//   <input
//     type='text'
//     name='from_name'
//     placeholder='from name'
//     value={toSend.from_name}
//     onChange={handleChange}
//   />
//   <input
//     type='text'
//     name='to_name'
//     placeholder='to name'
//     value={toSend.to_name}
//     onChange={handleChange}
//   />
//   <input
//     type='text'
//     name='message'
//     placeholder='Your message'
//     value={toSend.message}
//     onChange={handleChange}
//   />
  
//   <input
//     type='text'
//     name='reply_to'
//     placeholder='Your email'
//     value={toSend.reply_to}
//     onChange={handleChange}
//   />

//   <button type='submit'>Submit</button>
// </form>
  
  )
};

export default ReportScreen;
