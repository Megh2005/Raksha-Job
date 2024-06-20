import Link from "next/link";
const Footer = () => {
  return (
    <footer className="p-10 bg-gray-50/50 text-black">
      <ul className="flex justify-center items-center gap-10">
        <Link href={"#home"}>
          <li>Home</li>
        </Link>
        <Link href={"#jobs"}>
          <li>Jobs</li>
        </Link>
        <Link href={"#about"}>
          <li>About</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>

      <div className="flex justify-center items-center mt-5 gap-5">
        <a href="https://linkedin.com/in/megh-deb">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            id="linkedin"
            width="30"
            height="30"
            className="fill-current hover:fill-violet-800 ease-in-out duration-500"
          >
            <path d="M55.35,44.17h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11ZM50.8,3.77A45.67,45.67,0,1,0,96.47,49.44,45.72,45.72,0,0,0,50.8,3.77ZM39.38,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V40.43a.76.76,0,0,1,.76-.77h8.8a.77.77,0,0,1,.77.77ZM33.9,35.71a5.53,5.53,0,1,1,5.53-5.53A5.52,5.52,0,0,1,33.9,35.71ZM76.62,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V54.11c0-4.18-1.49-7-5.23-7a5.65,5.65,0,0,0-5.3,3.78,7.12,7.12,0,0,0-.34,2.52V70a.77.77,0,0,1-.77.77h-8.8a.76.76,0,0,1-.76-.77c0-4.22.11-24.71,0-29.53a.76.76,0,0,1,.76-.77h8.78a.76.76,0,0,1,.77.77v3.63a10.26,10.26,0,0,1,9.31-5.13c6.79,0,11.89,4.44,11.89,14Zm-21.2-25.8v-.11l-.07.11Zm-.07,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Z"></path>
          </svg>
        </a>
        <a href="https://github.com/Megh2005/Raksha-Job" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="github"
            width="28"
            height="28"
            className="fill-current hover:fill-violet-800 ease-in-out duration-500"
          >
            <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
          </svg>
        </a>
        <a href="mailto:techjantaparty@gmail.com" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 50 50"
            className="fill-current hover:fill-violet-800 ease-in-out duration-500"
          >
            <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
          </svg>
        </a>
        <a href="/Brochure.pdf" download="Raksha.pdf">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
            id="document"
            className="fill-current hover:fill-violet-800 ease-in-out duration-500"
          >
            <path d="M398.6 169.2c-.9-2.2-2-4.3-3.5-6.1l-83.8-91.7c-1.9-2.1-4.2-3.6-6.7-4.9-2.9-1.5-6.1-2.1-9.5-2.1H135.2c-12.4 0-22.7 10.6-22.7 23.9v335.2c0 13.4 10.3 24.9 22.7 24.9h243.1c12.4 0 22.2-11.5 22.2-24.9V179.4c0-3.6-.5-7.1-1.9-10.2zm-238.1 9.4c0-1.5 1.8-2.1 3.4-2.1h70.8c1.6 0 2.8.6 2.8 2.1v10.8c0 1.4-1.1 3.1-2.8 3.1h-70.8c-1.6 0-3.4-1.7-3.4-3.1v-10.8zm0 128c0-1.5 1.8-2.1 3.4-2.1h122.2c1.6 0 2.4.6 2.4 2.1v10.8c0 1.4-.7 3.1-2.4 3.1H163.9c-1.6 0-3.4-1.7-3.4-3.1v-10.8zm160 74.8c0 1.4-.7 3.1-2.4 3.1H163.9c-1.6 0-3.4-1.7-3.4-3.1v-10.8c0-1.5 1.8-2.1 3.4-2.1h154.2c1.6 0 2.4.6 2.4 2.1v10.8zm32-128c0 1.4-.7 3.1-2.4 3.1H163.9c-1.6 0-3.4-1.7-3.4-3.1v-10.8c0-1.5 1.8-2.1 3.4-2.1h186.2c1.6 0 2.4.6 2.4 2.1v10.8zm-46.9-75.9c-5.6 0-11.1-5.2-11.1-11.3v-66l71.2 77.3h-60.1z"></path>
          </svg>
        </a>
      </div>

      <p className="text-center mt-5 border-t text-black font-bold capitalize border-gray-200 pt-10">
        Copyright &copy; 2024 - All rights reserved by{" "}
        <a
          href="https://drive.google.com/file/d/1sMnJVue-t_e6GLiU8UAtm5XpmTPIQbd_/view?usp=sharing"
          className="text-purple-700 font-extrabold"
          target="_blank"
        >
          Raksha
        </a>
      </p>
    </footer>
  );
};

export default Footer;
