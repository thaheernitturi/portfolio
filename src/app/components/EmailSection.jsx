"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative my-16 py-24 px-4 sm:px-6 lg:px-20 backdrop-blur-xl bg-white/5 border border-[#33353F] rounded-xl shadow-lg"
    >
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-xl z-0"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="text-white">
          <h5 className="text-3xl font-extrabold mb-4">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-6 max-w-md leading-relaxed">
            I&apos;m always open to new opportunities and conversations! Whether
            it’s a project, question, or just a friendly hello—reach out.
          </p>
          <div className="flex gap-6 mt-4 text-3xl">
            <a
              href="https://github.com/thaheernitturi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/thaheernitturi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:text-[#005983] transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full">
          {emailSubmitted ? (
            <p className="text-green-500 text-lg font-semibold">
              ✅ Email sent successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full p-3 bg-white/10 border border-[#33353F] text-white placeholder-[#9CA2A9] rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 outline-none backdrop-blur-lg"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full p-3 bg-white/10 border border-[#33353F] text-white placeholder-[#9CA2A9] rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 outline-none backdrop-blur-lg"
                  placeholder="Say hello"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full p-3 bg-white/10 border border-[#33353F] text-white placeholder-[#9CA2A9] rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 outline-none backdrop-blur-lg"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 hover:scale-105"
              >
                 Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
