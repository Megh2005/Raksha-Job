"use client";
import { useFormStatus } from "react-dom";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Button from "../ui/Button";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { pending } = useFormStatus();
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hsh7n9k",
        "template_6zete1d",
        form.current!,
        "cXqHbP6YoiH_kX0dL"
      )
      .then((result) => {
        console.log(result.text);
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="grid md:grid-cols-2 gap-10 mb-4">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          required
          name="name"
          id="name"
          placeholder="Name"
          className="block w-full h-[45px] p-[5px] text-xl border-gray-500 mb-6 border-b focus:outline-purple-600 text-gray-700 bg-gray-100"
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          required
          name="email"
          id="email"
          placeholder="Email"
          className="block w-full h-[45px] p-[5px] text-xl border-gray-500 mb-6 border-b focus:outline-purple-600 text-gray-700 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={6}
          placeholder="Your Message"
          className="block w-full resize-none h-auto p-[5px] text-xl border-gray-500 mb-6 border-b focus:outline-purple-600 text-gray-700 bg-gray-100"
        ></textarea>
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
