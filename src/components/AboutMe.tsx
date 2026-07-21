import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="mt-10 sm:px-5 md:px-10">
      <div>
        <h3 className="heading-style">About Me</h3>
        <div className="heading-line" />
      </div>
      <p className="text-lg tracking-wide font-light text-secondary">
        I'm a frontend developer passionate about creating clean and interactive
        web experiences. I enjoy transforming ideas and designs into real
        products using modern technologies.
      </p>
    </section>
  );
};

export default AboutMe;
