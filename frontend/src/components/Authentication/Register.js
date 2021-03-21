import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Register = ({ authorized, setAuthorized }) => {
  const history = useHistory();
  const registerUrl = process.env.REACT_APP_REGISTER_URL;
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    username: "",
    password: "",
    email: "",
  });

  console.log(input);

  const inputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const register = async () => {
    const data = {
      username: input.username,
      password: input.password,
      email: input.email,
    };

    try {
      //register
      const response = await axios.post(registerUrl, data, {
        headers: {
          "Content-Type": "Application/json",
        },
      });
      let responseData = response.data;

      //new account created
      res.status(201).json({
        succes: true,
        message: "new account created",
      });

      //setToken, authorize and redirect
      setAuthorized(true);
      localStorage.setItem("token", responseData.token);
      history.push("/");

      console.log(response);
    } catch (error) {
      if (error) {
        let response = error.response.data;
        alert(response.error);
      }
    }
  };
  if (authorized) {
    history.push("/");
  }
  return (
    <div className="w-full h-full bg-yellow-400 p-8 py-12 space-y-8">
      <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
        <p className="text-2xl font-bold">Welcome</p>
        <p className="text-xl font-medium"> </p>
        <p className="text-xl font-medium">To get started create an acount</p>
      </div>
      <div className="h-full w-full px-8 space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <input
            type="text"
            className="h-12 w-full px-4 rounded-full shadow-lg"
            id="username"
            placeholder="username"
            name="username"
            onChange={(e) => inputChange(e)}
          ></input>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <input
            type="email"
            className="h-12 w-full px-4 rounded-full shadow-lg"
            id="email"
            name="email"
            placeholder="example@email.com"
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
          onClick={() => register()}
          className="flex justify-center items-center py-2 px-2 bg-green-400 hover:bg-green-300 h-12 w-32 rounded-xl shawdow-xl"
        >
          Create
        </button>
      </div>
      <div className="flex justify-center">
        <Link to="/login" className="text-md font-sm">
          Already have an account?{" "}
          <span className="text-lg font-bold underline">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
