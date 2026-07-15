import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <section className="mt-20 sm:px-5 md:px-10">
      <h3 className="heading-style">Contact Me</h3>
      <p className="text-xl font-semibold">Got a Project in mind?</p>
      <p className="text-sm tracking-wide">Let's bring your ideas to life.</p>
      <div className="flex flex-col sm:flex-row sm:items-center w-fit gap-4 mt-5">
        <div className="flex gap-2 items-end font-medium opacity-70">
          <FiMail className="text-2xl" />
          <span>goodyewoma44@gmail.com</span>
        </div>
        <a
          href="https://www.instagram.com/goodyunitydev/"
          target="_blank"
          className="w-fit"
        >
          <div className="flex gap-2 items-end font-medium opacity-70">
            <BsInstagram className="text-2xl" />
            <span>GoodyUnityDev</span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/goodness-edward-3ba82232b/"
          target="_blank"
          className="w-fit"
        >
          <div className="flex gap-2 items-end font-medium opacity-70">
            <FaLinkedin className="text-2xl" />
            <span>Goodness Edward</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
