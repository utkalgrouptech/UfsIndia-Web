import React, { useState } from "react";
import { form_bg } from "@/src/assets/home";
import axios from "axios"; // We'll use axios to send the POST request

const About = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    service: "",
    additionalText: ""
  });

  // Function to handle input changes
  const handleChange = (e:any) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e:any) => { 
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3200/api/submit", formData);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className="h-full w-full py-10 bg-[#F4F8F8] lg:center_between lg:pl-40">
      <div className="lg:flex lg:flex-col w-full px-3">
        <h1 className="lg:text-2xl text-xl mb-5 text-gray-600 w-full">
          About Utkal Facility Services Pvt. Ltd.
        </h1>
        <h3 className="text-gray-500">
          Utkal Facilities Services Private Limited, part of the AP Group of
          Companies offers Integrated Facility & Maintenance Services to various
          Industries like, Railways, Airports, Logistic, Commercials,
          Residential Installations etc.
        </h3>
        <h3 className="text-gray-500">
          Our Multifaceted Property Management System (PMS) plays an important
          role in the daily operations and management processes of every
          business. The expertise of our certified facilities management
          division plays a vital role in the meticulous planning and delivery of
          every project.
        </h3>
        <h3 className="text-gray-500">
          We are an integrated Property Management company where our prime focus
          is to provide proficient maintenance services to our clients by
          maximizing opportunities of their facilities portfolio and achieving
          their corporate goals. This is attained through operational
          efficiencies, cost optimization and risk mitigation, thereby creating
          memorable experiences for our clients.
        </h3>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit} 
          className="w-96 h-full mx-auto shadow-md rounded p-10 flex flex-col justify-center items-start gap-4 !bg-white bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${form_bg.src})` }}
        >
          <h1 className="text-2xl font-bold text-white">
            Schedule Your Service
          </h1>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            placeholder="Number"
            value={formData.number}
            onChange={handleChange}
            required
          />

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service"
            type="text" 
            placeholder="Service"
            value={formData.service}
            onChange={handleChange}
            required
          />

          <input
            id="additionalText"
            type="text"
            className="border border-gray-300 rounded-md h-24 w-full px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your text"
            value={formData.additionalText}
            onChange={handleChange}
            required
          />

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
