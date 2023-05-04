import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-full bg-[#212428] pt-24 p-5">
      <h2 className="text-4xl text-center font-semibold text-teal-500 py-10">Contact Us</h2>
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
      <div className=" space-x-4">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28681.590138590567!2d88.44536996431158!3d26.02705170364274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4c00fae515037%3A0xc354ad492e9e6874!2sThakurgaon!5e0!3m2!1sen!2sbd!4v1682879937507!5m2!1sen!2sbd"
          width={`100%`}
          height={`100%`}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        <div className="text-white   p-5 rounded border">
          <form className="space-y-4 " action="">
            <div className="flex flex-col space-y-4">
              <label className="text-xl" htmlFor="name">
                Name
              </label>
              <input
                className="py-3 w-full lg:w-[80%] px-5 border-b bg-transparent  focus:outline-0"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-xl" htmlFor="name">
                Email
              </label>
              <input
                className="py-3 w-full lg:w-[80%] px-5 border-b bg-transparent focus:outline-0"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-xl" htmlFor="name">
                Message
              </label>
              <textarea
                className="py-3 w-full lg:w-[80%] px-5 border bg-transparent rounded focus:outline-0"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <div>
              <button className="py-3 w-full lg:w-[80%] px-5  bg-teal-600 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
