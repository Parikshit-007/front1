import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospital: "",
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/hos_loginlogin/",
        formData
      );
      // Assuming your API returns a token upon successful login
      const token = response.data.token; // Adjust this based on your API response

      // Store the token in localStorage or sessionStorage
      localStorage.setItem("token", token);
      navigate("/");
      // Redirect to another page upon successful login
      // You can use React Router's Navigate component for navigation
      // For example, <Navigate to="/dashboard" />
    } catch (error) {
      // Handle login error
      setError(error.response.data.message || "Login failed");
      console.log("Error response data:", error.response?.data);
    }
  };
  return (
    <div>
      <div className="flex gap-5 justify-between pr-9 bg-white max-md:flex-wrap max-md:pr-5">
        <div className="flex flex-col flex-1 py-12 bg-slate-50 max-md:max-w-full">
          <img
            loading="lazy"
            src=""
            className="z-10 ml-12 max-w-full aspect-[3.85] w-[189px] max-md:ml-2.5"
          />
          <div className="flex flex-col justify-center px-14 py-12 mt-4 rounded-full bg-slate-80 max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32d42d2b9868fc24586749bc4483de4ed04a3d2358628a6fade0637ee32ab3c1?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d42d2b9868fc24586749bc4483de4ed04a3d2358628a6fade0637ee32ab3c1?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d42d2b9868fc24586749bc4483de4ed04a3d2358628a6fade0637ee32ab3c1?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d42d2b9868fc24586749bc4483de4ed04a3d2358628a6fade0637ee32ab3c1?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d42d2b9868fc24586749bc4483de4ed04a3d2358628a6fade0637ee32ab3c1?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d42d2b9868fc24586749bc4483de4ed04a3d2358628a6fade0637ee32ab3c1?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d42d2b9868fc24586749bc4483de4ed04a3d2358628a6fade0637ee32ab3c1?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32d42d2b9868fc24586749bc4483de4ed04a3d2358628a6fade0637ee32ab3c1?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
              className="mt-12 mb-9 w-full aspect-[1.22] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="self-center text-lg font-semibold leading-8 text-center text-slate-600 w-[408px]">
            Let’s see what we have new, check it out! So maybe write here
            something more.
          </div>

          <div className="flex gap-5 justify-between self-center mt-6 max-w-full w-[408px]">
            <div className="flex-1 shrink-0 h-2 bg-blue-500 rounded-sm" />
            <div className="flex-1 shrink-0 h-2 rounded-sm bg-slate-300" />
            <div className="flex-1 shrink-0 h-2 rounded-sm bg-slate-300" />
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center my-auto whitespace-nowrap rounded-2xl bg-slate-50 text-zinc-800 max-md:max-w-full">
          <div className="flex flex-col h-[1000px] p-10 max-md:px-5 max-md:max-w-full">
            <div className="text-4xl font-bold text-center leading-[48.96px]">
              👋
            </div>
            <div className="mt-8 text-3xl font-semibold leading-10 text-center">
              Welcome back!
            </div>
            <div className="mt-3 text-base leading-6 text-center">
              Let's build someting great
            </div>{" "}
            <div className="mt-12 text-sm font-medium text-slate-600 max-md:mt-10">
              Hospital Name
            </div>{" "}
            <input
              type="text"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              placeholder="  Enter Hospital Name"
              className="shrink-0 mt-2 border-transparent bg-white rounded-md shadow h-[46px]"
            />{" "}
            <div className="mt-9 text-sm font-medium text-slate-600">
              Ussername
            </div>{" "}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="  Enter Username"
              className="shrink-0 mt-3 border-transparent  bg-white rounded-md shadow h-[46px]"
            />{" "}
            <div className="mt-9 text-sm font-medium text-slate-600">Email</div>{" "}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="  Enter email"
              className="shrink-0 mt-3 border-transparent  bg-white rounded-md shadow h-[46px]"
            />{" "}
            <div className="mt-9 text-sm font-medium text-slate-600">
              Passw0rd
            </div>{" "}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="  Enter Paswword"
              className="shrink-0 mt-3 border-transparent  bg-white rounded-md shadow h-[46px]"
            />{" "}
            <div className="mt-2.5 text-xs leading-3 text-slate-500">
              Must be 8 characters at least
            </div>{" "}
            <button
              onClick={handleSubmit}
              className="justify-center items-center text-[20px] px-40 py-4 mt-8  font-semibold leading-4 text-white bg-blue-500 rounded-lg max-md:px-5"
            >
              Sign in
            </button>{" "}
            <div className="justify-center items-center px-16 mt-8 text-xs text-center text-slate-500 max-md:px-5">
              or do it via other accounts
            </div>{" "}
            <div className="flex gap-4 justify-center px-14 mt-8 text-4xl font-bold text-indigo-800 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/68b2d2d364aeafd9569d9edf7902b2af532c9971fd73fcc32d8d698e1f5cf824?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                className="aspect-[1.28]  w-[68px]"
              />{" "}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/83dc48ee568712bafa03bac26c228db126ccd4f2f9065686a709a0c6490d0f43?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                className="aspect-[1.28] w-[68px]"
              />{" "}
              <div className="justify-center px-7 py-3 bg-white rounded-lg shadow aspect-[1.28] max-md:px-5">
                f
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Login;
