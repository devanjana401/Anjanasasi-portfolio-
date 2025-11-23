import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen bg-[#0f0f0f] text-white py-20 px-6 flex justify-center">
      <div className="max-w-xl w-full">

        <h2 className="text-5xl font-bold text-center">
          Get in touch
        </h2>

        {/* form */}
        <form className="mt-10 flex flex-col gap-6">

          {/* name */}
          <div className="flex flex-col">
            <label className="text-lg mb-1">Your Name</label>
            <input
              type="text"
              placeholder="What's your good name?"
              className="bg-[#1a1a1a] p-4 rounded-lg outline-none text-white border border-gray-700 focus:border-purple-500"
            />
          </div>

          {/* email */}
          <div className="flex flex-col">
            <label className="text-lg mb-1">Your Email</label>
            <input
              type="email"
              placeholder="What's your email address?"
              className="bg-[#1a1a1a] p-4 rounded-lg outline-none text-white border border-gray-700 focus:border-purple-500"
            />
          </div>

          {/* message */}
          <div className="flex flex-col">
            <label className="text-lg mb-1">Your Message</label>
            <textarea
              rows="6"
              placeholder="What you want to say?"
              className="bg-[#1a1a1a] p-4 rounded-lg outline-none text-white border border-gray-700 focus:border-purple-500 resize-none"
            ></textarea>
          </div>

          {/* button */}
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
