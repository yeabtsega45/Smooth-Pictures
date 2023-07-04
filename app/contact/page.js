export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center m-auto bg-black/70 h-screen pt-[120px]"
    >
      <h1 className="text-3xl font-bold text-center">Lets work together</h1>
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
  );
}
