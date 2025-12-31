import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        height: "auto",
        minHeight: "unset",
        overflowX: "hidden",
      }}
      className="w-full bg-[#0f0f0f] py-20 px-6"
    >
      <div className="max-w-xl w-full mx-auto pt-4">

        <h2 className="text-5xl font-bold text-center text-white">
          Get in touch
        </h2>

        {/* form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="mt-10 flex flex-col gap-6"
        >

          <div className="flex flex-col">
            <label className="text-lg mb-1 text-white">
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              required
              placeholder="What's your good name?"
              className="bg-[#1a1a1a] p-4 rounded-lg outline-none text-white border border-gray-700 focus:border-purple-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg mb-1 text-white">
              Your Email
            </label>
            <input
              type="email"
              name="from_email"
              required
              placeholder="What's your email address?"
              className="bg-[#1a1a1a] p-4 rounded-lg outline-none text-white border border-gray-700 focus:border-purple-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg mb-1 text-white">
              Your Message
            </label>
            <textarea
              rows="6"
              name="message"
              required
              placeholder="What you want to say?"
              className="bg-[#1a1a1a] p-4 rounded-lg outline-none text-white border border-gray-700 focus:border-purple-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition-all px-8 py-3 rounded-lg font-semibold mt-4"
          >
            Send
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
