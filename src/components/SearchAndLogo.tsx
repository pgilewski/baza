import React from 'react'

const SearchAndLogo: React.FC = () => {
  return (
    <div className="flex flex-row sm:mr-0  ">
      <div className="text-center h-12 w-12 flex items-center justify-center align-middle text-4xl text-white font-mono">
        P
      </div>
      <input
        type="text"
        className="my-2 w-full pl-2 sm:pr-16 rounded-sm bg-black opacity-30 placeholder-white"
        placeholder="Search Post Spot..."
      />
    </div>
  )
}

export default SearchAndLogo
