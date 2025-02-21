import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("https://book-depot-1x5u.onrender.com/user/login", userInfo);
      if (res.data) {
        toast.success('Login Successfully');
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
         
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        },1000)
  
       
        
      }
      
    } catch (err) {
      if (err.response) {
        console.log(err);
        
        toast.error("Error: " + err.response.data.message);
        setTimeout(()=>{},2000)
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Form should wrap all input fields and the button */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email Field */}
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

            {/* Password Field */}
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

            {/* Submit Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-orange-500 text-white rounded-md px-3 py-1 hover:bg-orange-700 duration-200"
              >
                Login
              </button>

              <p className="text-sm">
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
