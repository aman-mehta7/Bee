import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-amber-50 shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold ">MyBrand</div>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <ul className={`md:flex space-x-6  ${isOpen ? "block mt-4" : "hidden"} md:block`}>
        <li><a href="#1" className="hover:text-blue-500">Home</a></li>
        <li><a href="#2" className="hover:text-blue-500">About</a></li>
        <li><a href="#3" className="hover:text-blue-500">Services</a></li>
        <li><a href="#4" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}
