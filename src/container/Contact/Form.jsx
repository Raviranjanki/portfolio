import React from "react";

const Form = () => {
  return (
    <form className="">
      <h2 className="text-white font-bold text-2xl mb-4">Send us a message</h2>
      <div className="mb-6 opacity-70">
        <input
          type="text"
          placeholder="Full Name"
          className="text-body-color focus:border-primary w-full rounded py-2 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6 opacity-70">
        <input
          type="email"
          placeholder="Email Address"
          className="text-body-color  focus:border-primary w-full rounded py-2 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6 opacity-70">
        <input
          type="text"
          placeholder="Subject"
          className="text-body-color  focus:border-primary w-full rounded py-2 px-[14px] text-base outline-none focus-visible:shadow-none"
        />
      </div>
      <div className="mb-6 opacity-70">
        <p className="text-white mb-4 font-medium text-sm">
          Tell us more about your project
        </p>
        <textarea
          rows={6}
          placeholder="Your Message"
          className="text-body-color  focus:border-primary w-full resize-none rounded py-2 px-[14px] text-base outline-none focus-visible:shadow-none"
          defaultValue={""}
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-white border-primary w-full rounded p-3 text-slate-900 font-bold transition hover:bg-opacity-90"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Form;
