export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center m-auto h-screen pt-[120px] border-y-4"
    >
      <h1 className="text-3xl font-bold text-center">Lets work together</h1>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="text-left">
          <h2 className="text-xl text-blue-700 font-bold">Church Address</h2>
          <p className="text-base text-gray-700 my-2">
            02 Kotebe St, Yeka, Addis Ababa
          </p>
          <h2 className="text-xl text-blue-700 font-bold">Email</h2>
          <p className="text-base text-gray-700 my-2">ksdac@gmail.com</p>
          <h2 className="text-xl text-blue-700 font-bold">Phone</h2>
          <p className="text-base text-gray-700 my-2">011 456 7890</p>
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
