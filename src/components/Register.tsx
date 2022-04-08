import { ReactComponent as GoogleIcon } from '../assets/icons/google.svg'
import GradientText from './GradientText'
import { useAuth } from "../context/AuthContext";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({}) => {
  const { signUp } = useAuth();
  const [ formState, setFormState ] = useState<object|null>(null)
  //TODO: if user is logged in then navigate to /app
  function onChange(e:any) {
    e.persist()
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
  }
  
  return (
    <div className="h-screen w-full homeBg text-center align-middle mx-auto">
      <div className="flex-row justify-center">
        <GradientText text={"Create account"}/>
        <div className="flex flex-col font-mono justify-center mx-auto mt-8 text-black  text-lg">
          <input onChange={onChange} type="text" name="username" placeholder='username' className="placeholder-black transition-colors hover:transition-colors bg-purple focus:bg-blue-800  p-3 my-1 w-60 mx-auto cursor-pointer"/>
          <input onChange={onChange} type="email" name="email" placeholder='email' className="placeholder-black transition-colors hover:transition-colors bg-purple focus:bg-blue-800  p-3 my-1 w-60 mx-auto cursor-pointer"/>
          <input onChange={onChange} type="password" name="password" placeholder='password' className="placeholder-black transition-colors hover:transition-colors bg-green focus:bg-green-500 p-3 my-1 w-60 mx-auto cursor-pointer"/>
            

          <div onClick={() => signUp(formState)}className="px-8 bg-gradient-to-r  from-purple-600 to-blue-500 transition-colors hover:transition-colors bg-white hover:bg-gray-400 cursor-pointer p-3 my-6 md:my-4 mx-auto text-black text-center">
             CREATE
          </div>
          <span className='cursor-pointer font-sans text-white underline italic text-base'><Link to="/">Did you verify your email?</Link></span>

        </div>
      </div>
    </div>
  )
}
export default Register
