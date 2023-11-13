import GradientText from './reusable/GradientText'
import { useAuth } from '../utils/context/AuthContext'
import { useState, KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'

const Register = ({}) => {
  const { signUp } = useAuth()
  const [formState, setFormState] = useState<object | null>(null)
  //TODO: if user is logged in then navigate to /app
  function onChange(e: any) {
    e.persist()
    setFormState(() => ({
      ...formState,
      [e.target.name]: e.target.value
    }))
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    // do stuff
    if (e.key === 'Enter') {
      signUp(formState)
    }
  }
  return (
    <div className="homeBg mx-auto h-screen w-full text-center align-middle">
      <div className="flex-row justify-center">
        <GradientText text={'Create account'} />
        <div className="mx-auto mt-8 flex flex-col justify-center font-mono text-lg  text-black">
          <input
            onChange={onChange}
            type="text"
            name="username"
            placeholder="username"
            className="bg-purple my-1 mx-auto w-60 cursor-pointer  p-3 transition-colors placeholder:text-black hover:transition-colors focus:bg-blue-800"
          />
          <input
            onChange={onChange}
            type="email"
            name="email"
            placeholder="email"
            className="bg-purple my-1 mx-auto w-60 cursor-pointer  p-3 transition-colors placeholder:text-black hover:transition-colors focus:bg-blue-800"
          />
          <input
            onKeyPress={handleKeyPress}
            onChange={onChange}
            type="password"
            name="password"
            placeholder="password"
            className="bg-green my-1 mx-auto w-60 cursor-pointer p-3 transition-colors placeholder:text-black hover:transition-colors focus:bg-green-500"
          />

          <div
            onClick={() => signUp(formState)}
            className="my-6 mx-auto  cursor-pointer bg-white bg-gradient-to-r from-purple-600 to-blue-500 p-3 px-8 text-center text-black transition-colors hover:bg-gray-400 hover:transition-colors md:my-4"
          >
            CREATE
          </div>
          <span className="cursor-pointer font-sans text-base italic text-white underline">
            <Link to="/">Did you verify your email?</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
export default Register
