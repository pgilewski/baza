import React, { ReactElement, useState } from 'react'

interface ButtonProps {
  color: string
  icon?: ReactElement
  text: string
  onClick: (e: any) => Promise<void> | void
}
const Button: React.FC<ButtonProps> = ({ color, icon, text, onClick }) => {
  if (color === 'purple') {
    return (
      <div
        onClick={onClick}
        className="my-6 mx-auto  cursor-pointer bg-white bg-gradient-to-r from-purple-600 to-blue-500 p-3 px-8 text-center text-black transition-colors hover:bg-gray-400 hover:transition-colors md:my-4"
      >
        {text}
      </div>
    )
  } else if (color === 'green') {
    return (
      <div
        onClick={onClick}
        className="flex h-10 cursor-pointer border-t border-gray-900 bg-white bg-gradient-to-tr from-sky-500  to-green-400 px-3 text-center align-middle text-black  transition-colors hover:text-white sm:border-t-0"
      >
        {icon ? icon : null}
        <div className="my-auto flex w-full flex-row">{text}</div>
      </div>
    )
  } else if (color === 'green2') {
    return (
      <div
        onClick={onClick}
        className="mx-auto flex cursor-pointer bg-gradient-to-tr from-sky-500 to-green-400 py-3 px-6 text-xl font-light text-black hover:text-white sm:w-36"
      >
        {icon ? icon : null}
        <div className="m-auto text-center">{text}</div>
      </div>
    )
  } else if (color === 'hoverBlue') {
    return (
      <input
        type="button"
        onClick={onClick}
        className="my-auto flex h-10 cursor-pointer border-t  border-gray-900 bg-white px-3 text-black transition-colors hover:bg-blue-900 hover:text-white sm:border-t-0"
        value={text}
      />
    )
  } else if (color === 'hoverGreen') {
    return (
      <input
        type="button"
        onClick={onClick}
        className="cursor-pointer border-t border-gray-900 bg-white py-2 px-3  text-black transition-colors hover:bg-green-900 hover:text-white sm:border-t-0"
        value={text}
      />
    )
  } else {
    return <div>{text}</div>
  }
}
export default Button
