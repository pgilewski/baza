import React from 'react'
import me from '../assets/images/me.jpeg'

const Home: React.FC = () => {
  return (
    <div className="mediumShadow text-center shadow-strong m-auto justify-center items-center center md:max-w-screen-lg w-full bg-navyDark mt-6 font-mono text-md p-8">
      <div className="text-4xl w-full text-center mb-6">
        Przemek's web portfolio
      </div>
      {/* <img className="md:w-80 w-full m-auto" src={me} alt="my picture :)" /> */}
      <div className="md:max-w-screen-md m-auto my-8">
        <p className="mb-4">
          Nice to see you here! This is my personal web portfolio, I am web
          developer and music enthusiast from Szczecin, Poland.
        </p>
        <p>
          Currently I’m studying Computer Science in Poznan, first degree, also
          atm I’m developing second app in ReactJs and AWS Cloud. Hopefully i’ll
          finish it during 2022 and put it here for public use :)
        </p>
      </div>
    </div>
  )
}

export default Home
