import React from "react";

function Contact(){

    return(

        <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="mb-4">
        <p className="text-lg">Email: adershradhakrishnan07@gmail.com</p>
      </div>
      <div className="mb-4">
        <p className="text-lg">Phone: 7034603650</p>
      </div>
      <div className="mb-4">
        <p className="text-lg">Social Media:</p>
        <ul className="flex space-x-4">
           <li><a href="https://twitter.com/adershradhakrishnan" className="text-blue-500">Twitter</a></li> 
          
           <li><a href="https://linkedin.com/in/adershradhakrishnan" className="text-blue-500">LinkedIn</a></li>
          <li><a href="https://github.com/adershradhakrishnan" className="text-blue-500">GitHub</a></li> 
          
        </ul>
      </div>
    </div>
    );
}
export default Contact;