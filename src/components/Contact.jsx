import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const username = form.name.trim();
    const user_email = form.email.trim();
    const user_message = form.message.trim();

    if (username === '' || user_email === '' || user_message === '') {
      setLoading(false);
      toast.error("Please fill all the fields.", { position: 'bottom-right' });
      return;
    }

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: username,
          to_name: "Karthikeyan S",
          reply_to: user_email,
          to_email: "karthyavinash2004@gmail.com",
          message: user_message,
        },
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!", { position: 'bottom-right' });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Uh, oh! Something went wrong. Please try again later.", { position: 'bottom-right' });
        }
      );
  };

  return (
    <div className="relative z-0 bg-black w-screen h-full mt-12 flex flex-col">
      <div className="text-white contact overflow-x-hidden pt-12 mt-8 flex-grow" id="contact">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl"
        >
          <p className="font-light">REACH OUT TO ME</p>
          <h2 className="text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">
            Contact.
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <motion.label
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <span className="font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="py-4 px-6 rounded-lg outline-none border border-gray-700 font-medium bg-black text-white"
                required
              />
            </motion.label>

            <motion.label
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <span className="font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ex: abc@gmail.com"
                className="py-4 px-6 rounded-lg border border-gray-700 font-medium bg-black text-white"
                required
              />
            </motion.label>

            <motion.label
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col"
            >
              <span className="font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Do you have anything to say?"
                className="py-4 px-6 rounded-lg outline-none border border-gray-700 font-medium bg-black text-white"
                required
              />
            </motion.label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-3 px-8 py-3 rounded-xl outline-none self-center font-bold shadow-md bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300"
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </motion.div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
