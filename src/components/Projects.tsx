import React, { useState } from 'react'
import postspot from '../assets/images/postspot.png'
const Projects = () => {
  const [modal, setModal] = useState(false)

  const handlePostSpot = () => {
    setModal(true)
  }
  const handleClick = () => {
    if (modal) {
      setModal(false)
    }
  }
  return (
    <div
      onClick={handleClick}
      className="mediumShadow h-full text-center shadow-strong m-auto justify-center items-center md:max-w-screen-lg w-full bg-navyDark mt-6 font-mono text-md p-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center lg:mx-24 md:mx-16">
        <div
          onClick={() => {
            window.location.href = 'https://main.d2hjyas9gj2dki.amplifyapp.com/'
            return null
          }}
          className="mediumShadow py-16 bg-blue my-4 mx-4 lg:mx-8 lg:my-8 w-full p-4 relative top-0 left-0 transitionSm sm:transition"
        >
          Store images with AWS Rekognition
        </div>
        <div
          onClick={handlePostSpot}
          className="mediumShadow py-16 bg-blue my-4 mx-4 lg:mx-8 lg:my-8 w-full p-4 relative top-0 left-0 transitionSm sm:transition "
        >
          Space to create posts for you and others
        </div>
        {modal ? (
          <div className="absolute top-0 left-0 m-8 p-18 z-10 bg-gray-200">
            <img className="h-full" src={postspot} />
          </div>
        ) : null}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center lg:mx-24 md:mx-16">
        <div className="mediumShadow py-16 bg-blue my-4 mx-4 lg:mx-8 lg:my-8 w-full p-4 relative top-0 left-0 transitionSm sm:transition">
          Coming up
        </div>
        <div className="mediumShadow py-16 bg-blue my-4 mx-4 lg:mx-8 lg:my-8 w-full p-4 relative top-0 left-0 transitionSm sm:transition">
          Coming up
        </div>
      </div>
    </div>
  )
}

export default Projects
