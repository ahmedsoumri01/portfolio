import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import myImage from "../../assets/main_image.png";
import BackgroundView from "../../Layout/BackgroundView";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { toast } from "react-toastify";
import { login } from "../../service/authService";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError("Email and password are required");
      toast.error("Email and password are required");
      return;
    }
    setError("");
    setLoading(true);
    // Call API to login
    login(email, password)
      .then((data) => {
        console.log(data);
        // Save token to local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLogged", true);
        setLoading(false);
        // Redirect to home page
        window.location.href = "/admin";
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      });
  };

  return (
    <BackgroundView>
      <div className="flex h-screen">
        <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center bg-[#20262E]">
          <div>
            <Link to={"/"}>
              <img
                src={Logo}
                alt="logo"
                className="fixed top-0 left-0 w-28 mx-auto"
              />
            </Link>
          </div>
          {/* Background image can be styled here */}
          <img
            src={myImage}
            alt="main"
            className="h-[80%] min-h-[100px] min-w-[100px] tm:h-[36px] tm:mt-[200px] sm:min-h-[100px] sm:min-w-[100px] sm:ml-[30px]"
          />
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 bg-[#e2e4e6]">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm p-8 space-y-4"
          >
            <h2 className="text-2xl font-bold text-center">Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              {loading ? (
                <span className="ml-2 spinner-border spinner-border-sm">
                  loading
                </span>
              ) : (
                "Login"
              )}
            </button>
            <p className="mt-4 text-center text-sm">
              <Link to={"/resetpassword"}>
                <span className="border-b border-gray-400 cursor-pointer">
                  Forgot your password?
                </span>{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </BackgroundView>
  );
}
