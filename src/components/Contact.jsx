import React, { useState } from 'react';
import { useTheme } from '../../themeContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_whvk5mq';
    const templateID = 'template_z0qpqsn';
    const userID = 'xZpcah4bBSDGR4lOu';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setFormStatus(`Failed to send message. Error: ${error.text || error.message}`);
      });
  };

  return (
    <div id="contact" className={`p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} rounded-lg`}>
            <div className='flex justify-center items-center'>
        <div className={`rounded-full w-44 h-10 md:h-12 flex justify-center items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
          <p className='text-center'>Contact me</p>
        </div>
      </div>
      <div className="md:flex md:space-x-4">
        <div className="md:w-1/2">
          {/* Image: Hidden on small screens */}
          <img 
            className="hidden md:block w-full"
            src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-laptop-helping-customer-service-pack-network-communication-illustrations-2912020.png" 
            alt="Contact illustration"
          />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          {/* Contact Form with shadow border */}
          <form className="max-w-md mx-auto space-y-4 p-6 border rounded-lg shadow-lg" onSubmit={handleFormSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </form>
          {formStatus && (
            <div className={`mt-4 p-2 text-center rounded-md ${formStatus.includes('successfully') ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
              {formStatus}
            </div>
          )}
        </div>
      </div>
      <p className="text-center text-sm mt-6">You may also find me on these platforms:</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/nagalakshmi08" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/naga-kanaka-lakshmi-dwarampudi/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="cursor-pointer" />
        </a>
        <a href="https://twitter.com/naga_lakshmi08" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
