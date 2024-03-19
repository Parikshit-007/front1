import React from "react";
// import fb from "../Data/fb.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospital: "",
    username: "",
    password: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/hos_loginusers/",
        formData
      );
      setMessage(response.data.message || "Registration successful");
      navigate("/Login");
    } catch (error) {
      setMessage(error.response.data.message || "Registration failed");
    }
  };

  return (
    <div className="bg-white flex  justify-between gap-1.5 pr-0 max-md:flex-wrap max-md:pr-5">
      <div className="bg-slate-50 flex grow basis-[0%] flex-col py-12 items-start max-md:max-w-full">
        <img
          loading="lazy"
          src=""
          className="aspect-[3.78] object-contain object-center w-[189px] items-center overflow-hidden z-[1] max-w-full ml-12 max-md:ml-2.5"
        />

        <div className="bg-slate flex flex-col justify-center items-stretch mt-4 px-14 py-12 rounded-[50%] max-md:max-w-full max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c69a24c-93e8-454f-9e6e-c4e9b363161d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c69a24c-93e8-454f-9e6e-c4e9b363161d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c69a24c-93e8-454f-9e6e-c4e9b363161d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c69a24c-93e8-454f-9e6e-c4e9b363161d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c69a24c-93e8-454f-9e6e-c4e9b363161d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c69a24c-93e8-454f-9e6e-c4e9b363161d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c69a24c-93e8-454f-9e6e-c4e9b363161d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c69a24c-93e8-454f-9e6e-c4e9b363161d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
            className="aspect-[1.22] object-contain object-center w-full overflow-hidden mt-12 mb-9 max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className="text-slate-600 text-center text-lg font-semibold leading-8 self-center max-w-[408px]">
          Let’s see what we have new, check it out! So maybe write here
          something more.
        </div>

        <div className="self-center flex w-[408px] max-w-full items-stretch justify-between gap-5 mt-6 mb-4">
          <div className="bg-blue-500 flex shrink-0 h-2 flex-col flex-1 rounded-sm" />
          <div className="bg-slate-300 flex shrink-0 h-2 flex-col flex-1 rounded-sm" />
          <div className="bg-slate-300 flex shrink-0 h-2 flex-col flex-1 rounded-sm" />
        </div>
      </div>
      <div className="items-stretch bg-slate-50 self-center flex grow basis-[0%] flex-col justify-center my-auto rounded-2xl max-md:max-w-full">
        <div className="items-stretch flex flex-col p-10 max-md:max-w-full max-md:px-5">
          <div className="text-zinc-800 text-center text-3xl font-semibold leading-10 max-md:max-w-full">
            Create your account
          </div>
          <div className="text-zinc-800 text-center text-base leading-6 mt-3 max-md:max-w-full">
            It’s free and easy
          </div>
          <div className="text-slate-600 text-sm font-medium mt-12 max-md:max-w-full max-md:mt-10">
            Your Hospital name
          </div>
          <div className="">
            <input
              className="text-gray-500 text-base font-medium h-[50px] w-full leading-4 whitespace-nowrap shadow bg-white justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"
              type="text"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              placeholder="Enter your Hospital name"
            />
          </div>
          <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
            Username
          </div>
          <div className="">
            <input
              className="text-gray-500 text-base font-medium h-[50px] w-full leading-4 whitespace-nowrap shadow bg-white justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
            />
          </div>

          <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
            E-mail
          </div>
          <div className="">
            <input
              className="text-gray-500 text-base font-medium h-[50px] w-full leading-4 whitespace-nowrap shadow bg-white justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
            Password
          </div>
          <div className="">
            <input
              className="text-gray-500 text-base font-medium h-[50px] w-full leading-4 whitespace-nowrap shadow bg-white justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          <div className="text-slate-500 text-xs leading-3 mt-2.5 max-md:max-w-full">
            Must be 8 characters at least
          </div>
          <div className="flex justify-between gap-2.5 mt-8 items-start max-md:max-w-full max-md:flex-wrap">
            <div className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full">
              <input type="checkbox"></input>
            </div>

            <div className="text-slate-600 text-xs leading-5 self-stretch grow shrink basis-auto">
              By creating an account means you agree to the{" "}
              <span className="font-bold">Terms</span>{" "}
              <span className="font-bold">and</span>{" "}
              <span className="font-bold">Conditions</span>, and our{" "}
              <span className="font-bold">Privacy Policy</span>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white text-l font-semibold leading-4 whitespace-nowrap items-center bg-blue-500 justify-center mt-8 text-center py-4 rounded-lg max-md:max-w-full max-md:px-5"
          >
            Register
          </button>
          <div className="text-slate-500 text-center text-xs whitespace-nowrap items-center justify-center mt-8 px-16 max-md:max-w-full max-md:px-5">
            or do it via other accounts
          </div>
          <div className="justify-center items-stretch flex gap-4 mt-8 px-20 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b71564a98b4ca5dc3b8a386f63bc852d8b4a7370f87f98fbb6e814e2e518709?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
              className="aspect-[1.28] object-contain object-center w-[68px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/53737b41f92b53ade80acac8928123d600d5b0d9ef646fd52b3bda578c46c330?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
              className="aspect-[1.28] object-contain object-center w-[68px] overflow-hidden shrink-0 max-w-full"
            />
            {/* <img
              loading="lazy"
              src={fb}
              className="aspect-[1.28] object-contain object-center w-[68px] overflow-hidden shrink-0 max-w-full"
            /> */}
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a1bf6536adc3037503e8915a0eccb7c351bfa6dbca64542facde1cc8faa02bb?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
        className="aspect-square object-contain object-center w-20 overflow-hidden shrink-0 max-w-full mt-[839px] self-end max-md:mt-10"
      />
    </div>
  );
}

export default Signin;
