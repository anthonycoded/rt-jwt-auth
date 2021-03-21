import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ authorized, setAuthorized }) => {
  const loginUrl = process.env.REACT_APP_LOGIN_URL;
  const history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const inputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const login = async () => {
    const postData = {
      email: input.email,
      password: input.password,
    };
    try {
      let response = await axios.post(loginUrl, postData, {
        Headers: {
          "Content-Type": "Application/json",
        },
      });
      console.log(response.data);
      history.push("/");
    } catch (error) {
      let response = error.response.data;
      console.log(error.response.data);
      alert(response.error);
    }
  };

  if (authorized) {
    history.push("/");
  }
  return (
    <div className="w-full h-full bg-yellow-400 p-8 py-12 space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <p className="font-bold text-4xl">Welcome Back!</p>
        <p className="text-xl font-medium">Sign into your account</p>
      </div>
      <div className="h-full w-full px-8 space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <input
            type="email"
            className="h-12 w-full px-4 rounded-full shadow-lg"
            id="email"
            placeholder="example@email.com"
            name="email"
            onChange={(e) => inputChange(e)}
          ></input>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <input
            type="password"
            className="h-12 w-full px-4 rounded-full shadow-lg"
            placeholder="Password"
            name="password"
            onChange={(e) => inputChange(e)}
          ></input>

          <div className="flex justify-end w-full">
            <Link to="/password-reset" className="h-12 w-32">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full h-full">
        <button
          onClick={() => login()}
          className="flex justify-center items-center py-2 px-2 bg-green-400 hover:bg-green-300 h-12 w-32 rounded-xl shawdow-xl"
        >
          Sign In
        </button>
      </div>
      <div className="flex justify-center">
        <Link to="/register" className="text-md font-sm">
          Don't have an account?{" "}
          <span className="text-lg font-bold underline">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
