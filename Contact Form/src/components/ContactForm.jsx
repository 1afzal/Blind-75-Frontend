import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  function handleChange(e){
    e.preventDefault();
    axios.post("http://localhost:6969/contact-form", {name, email, query});
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleChange} className="flex flex-col w-fit px-2 py-5 rounded-md gap-5 border-1 border-black border-solid">
        
        <div className="flex gap-2">
          <label className="font-black">Name:</label>
          <input
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-1 border-black border-solid rounded-sm p-1"
          />
        </div>

        <div className="flex gap-2">
          <label className="font-black">Email:</label>
          <input
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-1 border-black border-solid rounded-sm p-1"
          />
        </div>

        <label className="font-black">Query:</label>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query..."
          className="border-1 border-black border-solid rounded-sm p-1"
        />

        <button type="submit" className="border-1 border-black border-solid rounded-sm bg-blue-800 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
