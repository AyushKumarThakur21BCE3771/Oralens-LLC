import React from "react";
import heroImg from "../assets/heroImg.jpg";

function Home() {
  const handleLogin = () => {
    window.location.href = "/login";
  };
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 text-gray-900">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={heroImg}
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500"
          />
          <div className="p-6 pb-12 rounded-3xl m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-violet-300">
            <div className="space-y-2 inline-block text-center font-semibold sm:text-2xl">
              Your Gateway to Seamless Healthcare Management
            </div>
            <div className="text-gray-600 flex flex-col items-center">
              <p className="text-center">
                Empowering You with Insightful Dashboards and Hassle-Free
                Access.
              </p>
              <button
                className="text-center mt-4 bg-violet-700 px-5 py-2 rounded-full text-white"
                onClick={handleLogin}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
