import React from "react";

const Form = () => {
  return (
    <div>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        action="https://getform.io/f/bdrnrneb"
        method="POST"
        className="bg-slate-700 w-full md:w-96 px-8 py-6 rounded-md"
      >
        <h1 className="text-xl font-semibold text-yellow-400 mb-4">
          Send Your Message
        </h1>
        <div className="flex flex-col mb-4">
          <label className="block bg-transparent text-white">FullName</label>
          <input
            className="shadow rounded-lg bg-transparent border appearance-none border-yellow-400  py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your fullname"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="block text-white">Email Address</label>
          <input
            className="shadow rounded-lg bg-transparent border appearance-none border-yellow-400  py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="block text-white">Message</label>
          <textarea
            className="shadow rounded-lg bg-transparent border appearance-none border-yellow-400  py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            type="text"
            placeholder="Enter your Query"
          />
        </div>
        <button
          type="submit"
          className=" bg-green-800 text-lg mt-2 text-white py-1 rounded-md hover:bg-green-700  px-3 w-full duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
