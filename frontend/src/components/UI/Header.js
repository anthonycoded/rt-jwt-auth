import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Menu from "../UI/Menu";
import Drawer from "../UI/Drawer";

const Header = ({ authorized, setAuthorized }) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setAuthorized(false);
    history.push("/");
  };

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
      {open ? (
        <Drawer
          setOpen={setOpen}
          authorized={authorized}
          logout={logout}
        ></Drawer>
      ) : undefined}
    </div>
  );
};

export default Header;
