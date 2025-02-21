import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import Login from "../components/Login";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const formRedirect = location.state?.form || "/";
  const { register, handleSubmit, formState: { errors } } = useForm();
  const loginModalRef = useRef(null); // Create a ref for the Login modal

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("https://book-depot-1x5u.onrender.com/user/signup", userInfo);
      if (res.data) {
        toast.success('Signup Successfully');
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(formRedirect, { replace: true }); // Correct redirect
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close Button */}
              <Link to={formRedirect} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name Input */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-full px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: "Name is required" })}
                />
                {errors.fullname && <p className="text-orange-500 text-sm">{errors.fullname.message}</p>}
              </div>

              {/* Email Input */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-orange-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-orange-500 text-sm">{errors.password.message}</p>}
              </div>

              {/* Signup Button */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-orange-500 text-white rounded-md px-3 py-1 hover:bg-orange-700 duration-200"
                >
                  Signup
                </button>

                {/* Login Button to open modal */}
                <p className="text-xl">
                  Have an account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => loginModalRef.current?.showModal()} // Use optional chaining
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Login Modal - Pass Ref Correctly */}
      <Login modalRef={loginModalRef} />
    </>
  );
}

export default Signup;
