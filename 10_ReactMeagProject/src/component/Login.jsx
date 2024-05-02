import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import authservice from '../appwrite/auth';
import { login as authlogin } from '../store/authSlice';
import Button from './Button/Button';
import Input from './Input/Input';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import Logo from './Logo';



function Login() {


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {register,handleSubmit} = useForm()

  const [err,setErr]  = useState("")

  const login = async (data) => {

    setErr("")
    try{

        const session =await authservice.login(data)
        if(session){

          const userData = await authservice.getCurrentUser()

          if(userData) dispatch(authlogin(data))
          navigate('/')
        }
    }
    catch(err){

      setErr(err.message)
    }

  }





  return (
    <div className='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className='mb-2 flex justify-center'>
        <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {err && <p className="text-red-600 mt-8 text-center">{err}</p>}

        <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className='space-y-5'>
            <Input label="Email" placeholder ="Enter your Email..." type = "email" 
            {
              ...register("email",{
                required : true,
                validate : {
                  matchPattern : (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email address must be valid address",
                }
              })
            }
            />
            
            <Input label="password" placeholder="Enter your Password" type="Password" 
            {
              ...register("password",{
                required:true,
                validate: {
                  matchPattern : (value) => /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value) || "Password must be valid "
                }
              })
            }
            
            />

            <Button 
            type='submit' 
            classname='w-full'>
              Login In
            </Button>
          </div>


        </form>

      </div>


      
    </div>
  )
}

export default Login
