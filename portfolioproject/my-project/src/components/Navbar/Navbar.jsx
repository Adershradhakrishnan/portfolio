import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <ul className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <li className="mr-6">
                        <Link to='/education' className="text-white hover:text-gray-300">Education</Link>
                    </li>
                    <li className="mr-6">
                        <Link to='/projects' className="text-white hover:text-gray-300">Projects</Link>
                    </li>
                    <li className="mr-6">
                        <Link to='/contact' className="text-white hover:text-gray-300">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;