import React, { useState } from "react"; 
import myImage from "../../assets/main_image.png";
import BackgroundView from "../../Layout/BackgroundView";
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.png";

export default function Resetpassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email) {
      setError("Email are required");
      return;
    }
    setError("");
    console.log({ email });
    // Handle login logic here (e.g., API call)
  };

  return (
    <BackgroundView>
      <div className="flex h-screen">
        <div className="hidden lg:flex lg:w-1/2 bg-cover bg-center bg-[#20262E]">
        <div>
        <Link to={"/"}>
        <img src={Logo} alt="logo" className="fixed top-0 left-0 w-28 mx-auto" />
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
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <h2 className="text-2xl font-bold text-center">
              Reset your password
            </h2>
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <input
                type="email"
                id="resetPassword"
                placeholder="reset password email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              send reset password request
            </button>
            <p className="mt-4 text-center text-sm">
            <Link to={"/login"}>
              <span className="border-b border-gray-400 cursor-pointer">
                login
              </span>{" "}
            </Link>
          </p>
          </form>
          
        </div>
      </div>
    </BackgroundView>
  );
}
