import React, { useState } from 'react'
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg'
import { ReactComponent as Github } from '../assets/icons/github.svg'
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg'
import { ReactComponent as LastFm } from '../assets/icons/lastfm.svg'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
  }
  return (
    <div>
      <div className="mediumShadow flex flex-row text-center shadow-strong m-auto justify-evenly items-center center md:max-w-screen-md w-full bg-navyDark mt-6 font-mono text-md pt-6">
        <a href="https://www.linkedin.com/in/przemyslaw-gilewski/">
          <LinkedIn className="w-16 h-16 ml-4" />
        </a>
        <a href="https://github.com/pgilewski">
          <Github className="w-16 h-16" />
        </a>
        <a href="https://www.facebook.com/przemekgilewski.1808">
          <Facebook className="w-16 h-16" />
        </a>
        <a href="https://www.last.fm/user/pgilewski">
          <LastFm className="w-16 h-16" />
        </a>
      </div>
      <div className="mediumShadow text-center shadow-strong m-auto justify-center items-center center md:max-w-screen-md w-full bg-navyDark mt-6 font-mono text-md p-8">
        <div className="text-xl mb-4">Write me a message</div>
        {!loading ? (
          <div>
            <div>
              <input
                className="bg-navyLight py-2 px-2 border border-1 border-gray-300 my-2"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                className="bg-navyLight py-2 px-2 border border-1 border-gray-300 my-2"
                type="text"
                placeholder="Email adress"
              />
            </div>
            <div>
              <textarea
                className="bg-navyLight py-2 px-2 border border-1 border-gray-300 my-2 sm:w-96"
                placeholder="Your message..."
              />
            </div>
            <button
              onClick={handleClick}
              className="py-2 px-2 border border-1 border-gray-300 my-2 bg-green-600"
            >
              Click to send
            </button>
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  )
}

export default Contact
