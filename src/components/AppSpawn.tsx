import GradientText from './GradientText';
import Button from './reusable/Button';
import { useAuth } from '../context/AuthContext';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AppSpawn = ({}) => {
  const { login } = useAuth();
  const [formState, setFormState] = useState<object | null>(null);
  //TODO: if user is logged in then navigate to /app
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();
    setFormState(() => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="h-screen w-full homeBg text-center align-middle mx-auto">
      <div className="flex-row justify-center">
        <GradientText text={'Baza'} />
        <div className="font-mono text-xl pt-4 text-white">
          Create groups, add entries <br />
          and get random roll.
        </div>
        <div className="flex flex-col font-mono justify-center mx-auto mt-4 text-black  text-lg">
          <input
            onChange={onChange}
            type="text"
            name="username"
            placeholder="login"
            className="placeholder-black transition-colors hover:transition-colors bg-purple focus:bg-blue-800  p-3 my-1 w-60 mx-auto cursor-pointer"
          />
          <input
            onChange={onChange}
            type="password"
            name="password"
            placeholder="password"
            className="placeholder-black transition-colors hover:transition-colors bg-green focus:bg-green-500 p-3 my-1 w-60 mx-auto cursor-pointer"
          />

          <Button
            onClick={() => login(formState)}
            color="purple"
            text="GET IN"
          />

          <span className="cursor-pointer font-sans text-white underline italic text-base">
            <Link to="register">You dont have an account?</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default AppSpawn;
