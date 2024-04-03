import React from "react";

function Project() {

    return(
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Projects</h2>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Project Name 1</h3>
            <p className="text-sm text-gray-600">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-sm text-gray-600">Technologies Used: React, Tailwind CSS, Node.js</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Project Name 2</h3>
            <p className="text-sm text-gray-600">Description: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="text-sm text-gray-600">Technologies Used: Angular, Bootstrap, MongoDB</p>
          </div>
        </div>
      </div>
    );
}

export default Project;