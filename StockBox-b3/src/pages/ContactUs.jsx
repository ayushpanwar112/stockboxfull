import { useState } from "react";
import logo from "../assets/logo.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = "Phone number must contain only digits";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    if (!formData.agree) errors.agree = "You must agree to the terms";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "", agree: false });
      setFormErrors({});
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:px-10 py-10 ">
      <div className="md:w-1/3 text-center md:text-left p-5 text-white">
      <div className="w-full ">
       <img src={logo} alt="" className="w-[100px] "/> 
      </div>
      
        <h2 className="text-3xl font-bold  mb-4">How to Find Us</h2>
        <p className="">Stockbox Technologies Pvt Ltd.</p>
        <p className="">9, Lane No. 3, Doon Enclave Extension,</p>
        <p className="">Shimla Bypass Road, Dehradun</p>
        <p className=" font-semibold">Uttarakhand – 248171</p>
        <p className="text-blue-500 mt-2">customercare@stockboxtech.com</p>
      </div>

      <div className="md:w-2/3 p-8 bg-white rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'email', 'phone', 'message'].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 text-sm font-bold mb-2 capitalize">
                {field.replace('_', ' ')}
              </label>
              {field === "message" ? (
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                    formErrors[field] ? "border-red-500" : ""
                  }`}
                ></textarea>
              ) : (
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300 ${
                    formErrors[field] ? "border-red-500" : ""
                  }`}
                />
              )}
              {formErrors[field] && <p className="text-red-500 text-sm mt-1">{formErrors[field]}</p>}
            </div>
          ))}

          <div className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
            />
            <label htmlFor="agree" className="text-gray-700 text-sm font-medium">
              I agree to the terms and conditions
            </label>
          </div>
          {formErrors.agree && <p className="text-red-500 text-sm">{formErrors.agree}</p>}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form> 
         <iframe
  className="w-full h-64 rounded-lg shadow-md"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.448007268286!2d77.01930117508016!3d30.316496307324053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929087c907fd9%3A0x1b6a3d9e3d4f9b8!2sStockbox%20Technologies%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000"
  allowFullScreen=""
  loading="lazy"
></iframe>
      </div>
    
    </div>
  );
};

export default ContactUs;
