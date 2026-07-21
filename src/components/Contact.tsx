import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <section className="mt-20 sm:px-5 md:px-10">
      <div>
        <h3 className="heading-style">Contact Me</h3>
        <div className="heading-line" />
      </div>
      <p className="text-xl font-semibold">Got a Project in mind?</p>
      <p className="text-sm tracking-wide">Let's bring your ideas to life.</p>
      <div className="flex flex-col sm:flex-row sm:items-center w-fit gap-4 mt-5">
        <div className="flex gap-2 items-end font-medium text-secondary">
          <FiMail className="text-2xl text-slate-400" />
          <span>goodyewoma44@gmail.com</span>
        </div>
        <a
          href="https://www.instagram.com/goodyunitydev/"
          target="_blank"
          className="w-fit"
        >
          <div className="flex gap-2 items-end font-medium text-secondary">
            <BsInstagram className="text-2xl text-slate-400" />
            <span>GoodyUnityDev</span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/goodness-edward-3ba82232b/"
          target="_blank"
          className="w-fit"
        >
          <div className="flex gap-2 items-end font-medium text-secondary">
            <FaLinkedin className="text-2xl text-slate-400" />
            <span>Goodness Edward</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
