import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //template_bcvb5o9
    //service_8eceseq
    //3xDxBSI8gTxhbk_M2
    emailjs
      .send(
        'service_8eceseq',
        'template_bcvb5o9',
        {
          from_name: form.name,
          to_name: "Ayushi Saxena",
          from_email: form.email,
          to_email: "ayushisaxena1610@gmail.com",
          message: form.message,
        },
        '3xDxBSI8gTxhbk_M2'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex w-full justify-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] dark:bg-black-100 bg-[#e2e4ea] p-8 rounded-2xl w-[80%] xs:w-full'
      >
        <p className="sm:text-[14px] text-[12px] dark:text-secondary text-[#bf61ff] uppercase tracking-wider">Get in touch</p>
        <h3 className="dark:text-white text-[#804dee] font-black md:text-[60px] sm:text-[50px] xs:text-[30px] text-[30px]">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='dark:text-white text-[#434343] font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='dark:bg-tertiary bg-white py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='dark:text-white text-[#434343] font-medium mb-2'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='dark:bg-tertiary bg-white py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='dark:text-white text-[#434343] font-medium mb-2'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='dark:bg-tertiary bg-white py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='dark:bg-tertiary bg-[#804dee] py-2 px-7 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");