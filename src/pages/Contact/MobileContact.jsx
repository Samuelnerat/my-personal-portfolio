import { React, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import resume from "../../data/Favour_Samuel_Resume.pdf";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MobileContact() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      console.log('Error: One or more fields are empty.');
      toast.error('Please complete all the fields before you connect');
    } else {
      toast.success("Successful! I'll get back to you as soon as possible. Thank You");
      emailjs
      .sendForm('service_dj2jr0w', 'template_5piiqvi', form.current, {
        publicKey: 'Kwgex_jXmTIcdTkk9',
      })
      .then(
        (result) => {
          console.log('SUCCESS!');
          console.log(result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
    setName("");
    setEmail('');
    setMessage('');
  };

  return (
    <div className='flex flex-col justify-center items-center h-full overflow-hidden'>
      <div className='text-center'>
        <div className='font-bold text-6xl text-purple-900 flex justify-center items-center mb-4 dark:text-violet-700'>
          <p>Get In Touch</p>
        </div>

        <div className=''>
          <p className='dark:text-gray-300 text-[20px] leading-[35px] word-break mt-[24px] max-w-[550px] whitespace-normal'>
            If you have any exciting projects in mind that you'd like us to collaborate on, feel free to reach out. I enjoy bringing ideas to life. Let's work together and make magic happen!
          </p>

          <div className='flex justify-center my-6'>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-3 bg-purple-900 dark:bg-violet-600 mr-3 dark:text-zinc-900 text-white py-3 px-6 rounded-lg border-none text-lg font-bold cursor-pointer"
              >
                <a href={resume} target="_blank" rel="noopener noreferrer">View Resumé</a>
              </motion.button>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-3 bg-purple-900 text-white ml-3 dark:bg-violet-600 dark:text-zinc-900 py-3 px-6 rounded-lg border-none text-lg font-bold cursor-pointer"
              >
                <a href='https://github.com/Samuelnerat' target="_blank" rel="noopener noreferrer">View Github</a>
              </motion.button>
            </div>
          </div>
        </div>

        <form ref={form} className="space-y-4 h-[400px] flex items-center justify-center ml-10" onSubmit={handleSubmit}>
          <div className="items-center justify-center place-items-center grid gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              required
              name='user_name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-[#2D2929] dark:border-gray-400 border-[3px] p-5 outline-none w-[90%] md:w-[500px] text-[14px] bg-[#F2F2F2] dark:bg-gray-200"
            />

            <input
              type="email"
              placeholder="Enter your email"
              required
              name='user_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[#2D2929] dark:border-gray-400 border-[3px] p-5 outline-none w-[90%] md:w-[500px] text-[14px] bg-[#F2F2F2] dark:bg-gray-200"
            />
            <textarea
              placeholder="How can I help you?"
              required
              name='message'
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-[#2D2929] dark:border-gray-400 border-[3px] p-4 outline-none w-[90%] md:w-[500px] h-[150px] text-[14px] bg-[#F2F2F2] dark:bg-gray-200"
            ></textarea>

            <button className="items-center justify-center place-items-center grid mt-4 w-[90%] md:w-[500px]" type='submit'>
              <span className="relative w-full h-[60px] group px-6 py-3 font-bold">
                <span className="absolute inset-0 w-full h-[60px] bg-purple-900 dark:bg-violet-700"></span>
                <span className="text-white dark:text-zinc-900 text-[18px] text-center font-[700] leading-[24px] relative group-hover:opacity-85">
                  LET'S CONNECT
                </span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MobileContact;
