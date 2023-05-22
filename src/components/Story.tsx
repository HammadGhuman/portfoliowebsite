import React from "react";

type Props = {};
/* eslint-disable react/no-unescaped-entities */
const Story = (props: Props) => {
  return (
    <div id="about" className="mt-5 px-[10vw] pb-16">
      <h1 className="text-center mt-16 text-5xl font-bold">About Us</h1>
      <h1 className="text-3xl mt-16">We are a software development team with a <span className="text-primary"> major twist! </span></h1>
      <p className="text-xl text-gray-500 mt-6">At CodeMate, we are passionate about creating exceptional software solutions while delivering outstanding customer service. We understand that our clients' success relies not only on the quality of our software but also on the level of support and satisfaction they experience throughout their journey with us.</p>
      <p className="text-xl text-gray-500 mt-6">The very foundation of CodeMate has been laid on delivering top-notch customer service and ensuring client  satisfaction every step of the way.</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-16 gap-10 lg:gap-0">
      <div>
        <h1 className="text-3xl mb-8" ><span className="text-primary">Customer-Centric</span> Approach</h1>
        <p className="text-xl w-[90%] text-gray-500">
          At the heart of our company is a deep commitment to our clients. We
          firmly believe that our success is intertwined with their success.
          That&apos;s why we have made customer service and satisfaction our top
          priorities. We go above and beyond to understand our clients&apos; needs,
          goals, and pain points, ensuring that we develop tailored solutions
          that address their specific requirements.
        </p>
      </div>
      <div>
      <h1 className="text-3xl mb-8" ><span className="text-primary">Experienced and Dedicated </span> Team</h1>
      <p className="text-xl w-[90%] text-gray-500">
          Our team comprises highly skilled and experienced professionals who
          are dedicated to delivering excellence. From our software developers
          and engineers to our project managers and support staff, every member
          of our team is committed to providing exceptional service. We
          continuously invest in their growth and development, keeping them
          updated with the latest industry trends and technologies, so we can
          consistently deliver cutting-edge solutions to our clients.
        </p>
      </div>
      
      <div>
        <h1 className="text-3xl mb-8 text-primary">Quality Assurance and Testing</h1>
        <p className="text-xl text-gray-500 w-[90%]">
          To ensure the highest quality of our software solutions, we follow
          rigorous testing and quality assurance processes. We conduct
          comprehensive testing at every stage of development to identify and
          resolve any issues or bugs promptly. Our commitment to quality means
          that our clients can rely on our software to perform flawlessly,
          contributing to their overall satisfaction and success.
        </p>
      </div>
      <div>
        <h1 className="text-3xl mb-8 text-primary">Collaboration and Communication</h1>
        <p className="text-xl text-gray-500 w-[90%]">
          We believe that open and transparent communication is essential for
          successful collaborations. We work closely with our clients, keeping
          them involved and informed throughout the entire development process.
          We listen to their feedback, suggestions, and concerns, ensuring that
          we are aligned with their vision and goals. This collaborative
          approach allows us to build strong, long-lasting partnerships with our
          clients.
        </p>
      </div>
      <div>
        <h1 className="text-3xl mb-8 text-primary">Continuous Improvement</h1>
        <p className="text-gray-500 w-[90%] text-xl">
          We understand that technology is constantly evolving, and we strive to
          stay ahead of the curve. We embrace a culture of continuous
          improvement, always seeking opportunities to enhance our processes,
          technologies, and customer service. By staying at the forefront of the
          industry, we can provide our clients with the most innovative and
          efficient solutions available. At CodeMate, we are committed to
          building long-term relationships based on trust, transparency, and
          outstanding customer service. Partner with us, and experience the
          difference of working with a software development company that truly
          cares about your success.
        </p>
      </div>
    
      </div>
     
    
      
      
    </div>
    
  );
};

export default Story;
