import React, { useState } from "react";
import authservice from "../appwrite/auth";
import { useDispatch } from "react-redux";
import authSlice, { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Logo from "./Logo";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handlesubmit } = useForm();

  const [err, setErr] = useState();

  const signup = async (data) => {
    try {
      const userData = await authservice.createAccount(data);

      if (userData) {
        const userdata = await authservice.getCurrentUser();

        if (userdata) dispatch(login(userdata));
        navigate("/");
      }
    } catch (error) {
      setErr(error.message);
    }
  };

  return;
  <div className="flex items-center justify-center">
    <div
      className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
    >
      <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
          <Logo width="100%" />
        </span>
      </div>
      <h2 className="text-center text-2xl font-bold leading-tight">
        Sign up to create account
      </h2>
      <p className="mt-2 text-center text-base text-black/60">
        Already have an account?&nbsp;
        <Link
          to="/login"
          className="font-medium text-primary transition-all duration-200 hover:underline"
        >
          Sign In
        </Link>
      </p>

      {err && <p className="text-red-600 mt-8 text-center">{err}</p>}

      <form onSubmit={handlesubmit(signup)} >
      <div className='space-y-5'>
        <Input type = "text" placeholder = "Enter Your Full Name" 
        label = "Full Name"
        {...register("name",{
          required : true
        })} />

        <Input type="email" placeholder="Enter Your Email Address"  label= "Email Address" 
        {
          ...register("email",{
            required:true,
            validate : {
              matchpattern : (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.text(value) || "Email Address must be Valid"
            }
          })
        }
        
        
        />



        <Input type="password" placeholder =" Enter your Password" label = "Password" 
        {
          ...register("password",{
            required : true,
            validate : {
              matchpattern : (value) => /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value) || "Enter Valid Password."
            }
          })
        }
        
        />


        <Button type="submit" classname="w-full" >
          Sign In
        </Button>
        </div>
      </form>
    </div>
  </div>;
}

export default Signup;
