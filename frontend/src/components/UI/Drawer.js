import React from "react";
import { Link } from "react-router-dom";

const Drawer = ({ setOpen, authorized, logout }) => {
  return (
    <div
      className="bg-yellow-400 h-96 w-72 inset-y-0 right-0 top-14 transform flex flex-col fixed rounded-l-xl"
      onMouseLeave={(e) => setOpen(false)}
    >
      <div className="flex flex-col p-8 space-y-4">
        <Link
          to="/"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/apparel"
          className=" text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Apparel
        </Link>
        <Link
          to="/beats"
          className=" text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Beats
        </Link>
        <Link
          to="/faqs"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Faqs
        </Link>

        <Link
          to="/admin"
          className="text-2xl font-medium"
          onClick={() => setOpen(false)}
        >
          Admin
        </Link>
        {authorized ? (
          <React.Fragment>
            <Link
              to="/account"
              className="text-2xl font-medium h-8 flex items-center"
              onClick={() => setOpen(false)}
            >
              Account
            </Link>
            <button
              className="text-2xl font-medium h-8 flex items-center"
              onClick={() => logout()}
            >
              Logout
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link
              to="/login"
              className="text-2xl font-medium"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-2xl font-medium"
              onClick={() => setOpen(false)}
            >
              Register
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Drawer;
