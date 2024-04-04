import React from "react";

function Project() {

    return(
        <div className="max-w-lg mx-auto bg-blue-500 shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h2 className="text-xl font-bold text-black-800">Projects</h2>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-black-800">Wild Intrusion Identification And Alert system</h3>
            <p className="text-sm text-black-600">Description: This system identifies the presence of the wild animals and give alert to necessary authorities so that they could take appropriate steps to the animal attacks.</p>
            <p className="text-sm text-black-600">Technologies Used: mobilenet,transfer learning,camera module,rasperry pi</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-black-800">Regenerative braking</h3>
            <p className="text-sm text-black-600">Description: This system allows EV vehicles to genrate energy each time when brakes was applied and also would track the amount of power generated.</p>
            <p className="text-sm text-black-600">Technologies Used: Braking system,Generator,microcontroller,display unit</p>
          </div>
        </div>
      </div>
    );
}

export default Project;
