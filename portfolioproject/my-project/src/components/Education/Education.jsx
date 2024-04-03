import React from "react";

function Education() {

    return(

        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-2 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Education</h2>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Adi Shankara Institute Of Engineering And Technology,Kalady</h3>
            <p className="text-sm text-gray-600">Btech In Electronics And Communication Engineering</p>
            <p className="text-sm text-gray-600">Graduated: July 2023</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Nss Bhss Manickamangalam</h3>
            <p className="text-sm text-gray-600">Higher secondary education</p>
            <p className="text-sm text-gray-600">Graduated: March 2019</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">St Sebastian's hs kanjoor</h3>
            <p className="text-sm text-gray-600">Highschool education</p>
            <p className="text-sm text-gray-600">Graduated: March 2017</p>
          </div>
        </div>
      </div>
    );
}

export default Education;
