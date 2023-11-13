import GradientText from './reusable/GradientText'
import Button from './reusable/Button'
import { useAuth } from '../utils/context/AuthContext'
import React, { useState, KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'

const AppSpawn = ({}) => {
  const { login } = useAuth()
  const [formState, setFormState] = useState<object | null>(null)
  //TODO: if user is logged in then navigate to /app
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist()
    setFormState(() => ({
      ...formState,
      [e.target.name]: e.target.value
    }))
  }
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    // do stuff
    if (e.key === 'Enter') {
      console.log('test')
      login(formState)
    }
  }
  return (
    <div className="homeBg mx-auto h-screen w-full text-center align-middle">
      <div className="flex-row justify-center">
        <GradientText text={'Baza'} />
        <div className="pt-4 font-mono text-xl text-white">
          Create groups, entries <br />
          and get random roll.
        </div>
        <div className="mx-auto mt-4 flex flex-col justify-center font-mono text-lg  text-black">
          <input
            onChange={onChange}
            type="text"
            name="username"
            placeholder="login"
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

          <Button
            onClick={() => login(formState)}
            color="purple"
            text="GET IN"
          />

          <span className="cursor-pointer font-sans text-base italic text-white underline">
            <Link to="register">You dont have an account?</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
export default AppSpawn
