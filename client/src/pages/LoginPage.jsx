import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChangeInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let { data } = await axios({
        url: "http://localhost:3000/login",
        method: "POST",
        data: {
          username: user.username,
          password: user.password,
        },
      });
      localStorage.setItem("token", data.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "Login failed. Please try again.");
    }
  };
  
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://img.freepik.com/free-photo/aerial-view-business-data-analysis-graph_53876-146152.jpg?t=st=1725291067~exp=1725294667~hmac=2896fd9d90f687dcc5b6f1d4013afedbb4ab714196a5a7a02296fd241d71b0a4&w=1060"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
  flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Log in to your account
          </h1>
          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}
          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Your Username"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus=""
                autoComplete=""
                value={user.username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                value={user.password}
                onChange={handleChangeInput}
              />
            </div>
            <div className="text-right mt-2"></div>
            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
