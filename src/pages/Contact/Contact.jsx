import { React, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import resume from "../../data/Favour_Samuel_Resume.pdf";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      console.log('Error: One or more fields are empty.');
      toast.error('Please you should complete all the fileds before you connect');
    } else{
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
    <div>
      <div className='font-bold text-6xl text-purple-900 flex justify-center items-center mb-4 dark:text-violet-700'>
        <p>Get In Touch</p>
      </div>

      <div className='flex justify-between'>
        <div className='mt-24'>
          <p className='dark:text-gray-300'>If you have any exciting projects in mind that you'd like us to collaborate on, feel free to reach out. I enjoy bringing ideas to life. Let's work together and make magic happen!</p>

          <div className=' flex justify-between'>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-3 bg-purple-900 dark:bg-violet-600 dark:text-zinc-900 text-white py-3 px-6 rounded-lg border-none text-lg font-bold cursor-pointer"
              ><div><a href={resume} target="_blank"  rel="noopener noreferrer">View Resumé</a></div>
                {/* View Resumé */}
              </motion.button>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-3 bg-purple-900 text-white dark:bg-violet-600 dark:text-zinc-900 py-3 px-6 rounded-lg border-none text-lg font-bold cursor-pointer"
              ><div><a href='https://github.com/Samuelnerat' target="_blank">View Github</a></div>
                {/* View Github */}
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
              className="border-[#2D2929] dark:border-gray-400 border-[3px] p-5 outline-none w-[500px] text-[14px] bg-[#F2F2F2] dark:bg-gray-200"
            />

            <input
              type="email"
              placeholder="Enter your mail"
              required
              name='user_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[#2D2929] dark:border-gray-400 border-[3px] p-5 outline-none w-[500px] text-[14px] bg-[#F2F2F2] dark:bg-gray-200"
            />
            <textarea
              placeholder="How can I help you?"
              required
              name='message'
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-[#2D2929] dark:border-gray-400 border-[3px] p-4 outline-none w-[500px] h-[150px] text-[14px] bg-[#F2F2F2] dark:bg-gray-200"
            ></textarea>

            <button className="items-center justify-center place-items-center grid" type='submit'>
              <span className="relative w-[500px] h-[60px] group  px-6 py-3 font-bold">
                <span className="absolute inset-0 w-[490px] h-[60px] bg-purple-900 dark:bg-violet-700"></span>
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

export default Contact;
