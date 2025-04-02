
import logo from "../assets/logo.png";
import Form from "../components/Form";

const ContactUs = () => {
 

  return (
    <div className="flex flex-col md:flex-row items-center md:px-10 py-10 w-full">
      <div className="md:w-1/3 text-center md:text-left p-5 text-white w-full">
      <div className="w-full flex  justify-center md:block">
       <img src={logo} alt="" className="w-[100px] "/> 
      </div>
      
        <h2 className="text-3xl font-bold  mb-4">How to Find Us</h2>
        <p className="">Stockbox Technologies Pvt Ltd.</p>
        <p className="">9, Lane No. 3, Doon Enclave Extension,</p>
        <p className="">Shimla Bypass Road, Dehradun</p>
        <p className=" font-semibold">Uttarakhand – 248171</p>
        <p className="text-blue-500 mt-2">customercare@stockboxtech.com</p>
      </div>

      <div className="md:w-2/3 p-8  rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Contact Us</h2>
         <Form title="Contact us" />
         <iframe
  className="w-full h-64 rounded-lg shadow-md mt-10"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.99136057951!2d77.98563357556333!3d30.294307574798722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bbd7c22aa11%3A0xfded64e3634e17b1!2sStockbox%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1743601890768!5m2!1sen!2sin"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>
    
    </div>
  );
};

export default ContactUs;
