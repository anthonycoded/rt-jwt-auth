import React, { useState } from "react";
import {Link} from "react-router-dom"
import Menu from "../UI/Menu";
import Drawer from "../UI/Drawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="pb-12">
      <div className="bg-gray-700 h-14 flex justify-between items-center fixed w-full px-4">
        <Link to="/" className="text-xl font-bold text-yellow-400">
          Authentication
        </Link>
        <a className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu></Menu>
        </a>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-xl font-bold text-yellow-400">
            Home
          </Link>
          <Link to="/account" className="text-xl font-medium text-yellow-400">
            Account
          </Link>
          <Link to="/admin" className="text-xl font-medium text-yellow-400">
            Admin
          </Link>
        </div>
      </div>
      {open ? <Drawer setOpen={setOpen}></Drawer> : undefined}
    </div>
  );
};

export default Header;
