import React from "react";
import emailjs from 'emailjs-com';
function Contact(){

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l366o4n', 'template_ov0f2np', e.target, 'XHPBL4xXzeXD93MPf')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

    return(

        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="mb-6">
        <p className="text-lg"><span className="font-semibold">Email:</span> <a href="mailto:adershradhakrishnan07@gmail.com" className="text-blue-500">adershradhakrishnan07@gmail.com</a></p>
      </div>
      <div className="mb-6">
        <p className="text-lg"><span className="font-semibold">Phone:</span> <a href="tel:7034603650" className="text-blue-500">7034603650</a></p>
      </div>
      <div className="mb-4">
        <p className="text-lg">Social Media:</p>
        <ul className="flex space-x-4">
           <li><a href="https://twitter.com/adershradhakrishnan" className="text-blue-500">Twitter</a></li> 
          
           <li><a href="https://linkedin.com/in/adershradhakrishnan" className="text-blue-500">LinkedIn</a></li>
          <li><a href="https://github.com/adershradhakrishnan" className="text-blue-500">GitHub</a></li> 
          
        </ul>
      </div>
      <form onSubmit={sendEmail}>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="border border-gray-300 rounded-lg px-4 py-2 w-full" required />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
          <textarea name="message" id="message" className="border border-gray-300 rounded-lg px-4 py-2 w-full" rows="5" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Send</button>
      </form>
    </div>
    );
}
export default Contact;