import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center m-auto md:h-screen pt-[120px] border-y-4"
    >
      <h1 className="text-center">Lets work together</h1>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="text-left mt-4">
          <h2 className="text-xl font-bold">Phone</h2>
          <p className="text-base text-gray-700 my-2">
            <a
              href="tel: +251963145893"
              className="hover:text-gray-600 transition-all underline"
            >
              +251 96 314 5893
            </a>
          </p>
          <h2 className="text-xl font-bold">Email</h2>
          <p className="text-base text-gray-700 my-2">
            <a
              href="mailto:MedanEsubalew@gmail.com"
              className="hover:text-gray-600 transition-all underline"
            >
              MedanEsubalew@gmail.com
            </a>
          </p>
          <h2 className="text-xl font-bold">Address</h2>
          <p className="text-base text-gray-700 my-2">
            02 Kotebe, Yeka, Addis Ababa
          </p>
          {/* Social Icons */}
          <div className="flex mt-4 space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-800 hover:text-gray-600 transition-all"
            >
              <FaFacebook size={36} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-800 hover:text-gray-600 transition-all"
            >
              <FaTelegram size={36} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-800 hover:text-gray-600 transition-all"
            >
              <FaInstagram size={36} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-800 hover:text-gray-600 transition-all"
            >
              <FaLinkedin size={36} />
            </a>
          </div>
        </div>
        <form className="md:max-w-[600px] max-w-[350px] h-[90%] m-auto">
          <div className="grid md:grid-cols-2 gap-2">
            <input
              className="border shadow-lg p-2"
              type="text"
              placeholder="Name"
            />
            <input
              className="border shadow-lg p-2"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            className="border shadow-lg p-2 w-full my-2"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="border shadow-lg p-2 w-full"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="border bg-blue-700 text-white shadow-lg p-2 w-full mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
