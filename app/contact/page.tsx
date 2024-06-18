import ContactForm from "@/components/shared/ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-fit py-10 relative bg-gray-100">
      <div className="max-w-[1400px] mx-auto w-[91%]">
        <div className="mb-10">
          <h2 className="text-5xl font-extrabold capitalize mb-5">
            Let's <span className="text-purple-600">Connect</span> To Build
            Connection !
          </h2>
          <p className="text-lg capitalize font-bold text-purple-700 mt-5">Please Give us some time for detailed response</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
