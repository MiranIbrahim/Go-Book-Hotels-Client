import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateNameAndPhoto } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password);

    if (password.length < 6) {
      toast.error("password should be 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Atleast one uppercase needed");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("At least one special character needed");
      return;
    }

    
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateNameAndPhoto(name, photoURL)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => console.log(error));

        Swal.fire("Registration Completed!", "Press ok to Continue", "success");
        form.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Email already exist", "Press ok to try again", "error");
      });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:rounded-xl w-50 ">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div className="mt-10">
          <form onSubmit={handleRegister}>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="name"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Profile Image Link:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-user text-blue-500"></i>
                </div>
                <input
                  type="text"
                  name="photoURL"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Paste URL"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="name"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Name:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-user text-blue-500"></i>
                </div>
                <input
                  type="text"
                  name="name"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-at text-blue-500"></i>
                </div>
                <input
                  type="email"
                  name="email"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Sign Up</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Link
            to="/login"
            className="inline-flex items-center text-gray-700 font-medium text-xs text-center"
          >
            <span className="ml-2">
              You have an account?
              <span className="text-xs ml-2 text-blue-500 font-semibold">
                Login here
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
