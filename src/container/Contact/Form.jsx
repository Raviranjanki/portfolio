import React, { useState } from "react";
import { validate } from "./validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import Notification from "./Notification";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState();
  const [formData, setFormData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const error = validate(formData);

    if (Object.keys(error).length !== 0) {
      setErrors(error);
      setIsSubmitting(false);
      return;
    }

    emailjs
      .send(
        "service_b4jc478",
        "template_ak4jhoi",
        formData,
        "hcETTgD8Rk7WBa_oQ"
      )
      .then(() => {
        toast(<Notification />);
      })
      .catch((error) => {
        setErrors({ all: error.message });
      });

    setIsSubmitting(false);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h2 className="text-white font-bold text-2xl mb-4">
          Send us a message
        </h2>
        <p className="text-white">{errors?.all}</p>
        <div className="my-3 opacity-70">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="text-body-color focus:border-primary w-full rounded py-2 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
        </div>
        <p className="text-white">{errors?.name}</p>
        <div className="my-3 opacity-70">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="text-body-color  focus:border-primary w-full rounded py-2 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
          <p className="text-white">{errors?.email}</p>
        </div>
        <div className="my-3 opacity-70">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="text-body-color focus:border-primary w-full rounded py-2 px-[14px] text-base outline-none focus-visible:shadow-none"
          />
          <p className="text-white">{errors?.subject}</p>
        </div>
        <div className="my-3 opacity-70">
          <p className="text-white mb-4 font-medium text-sm">
            Tell us more about your project
          </p>
          <textarea
            rows={6}
            name="message"
            placeholder="Your Message"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="text-body-color  focus:border-primary w-full resize-none rounded py-2 px-[14px] text-base outline-none focus-visible:shadow-none"
            defaultValue={""}
          />
          <p className="text-white">{errors?.message}</p>
        </div>
        <div>
          <button
            type="submit"
            className="bg-white border-primary w-full active:bg-gray-400 rounded p-3 text-slate-900 font-bold transition hover:bg-opacity-90"
            disabled={isSubmitting}
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
