import React, { ReactElement, useState } from 'react';

interface ButtonProps {
  color: string;
  icon?: ReactElement;
  text: string;
  onClick: (e: any) => Promise<void> | void;
}
const Button: React.FC<ButtonProps> = ({
  color,
  icon,
  text,
  onClick,
}) => {
  if (color === 'purple') {
    return (
      <div
        onClick={onClick}
        className="px-8 bg-gradient-to-r  from-purple-600 to-blue-500 transition-colors hover:transition-colors bg-white hover:bg-gray-400 cursor-pointer p-3 my-6 md:my-4 mx-auto text-black text-center"
      >
        {text}
      </div>
    );
  } else if (color === 'green') {
    return (
      <div
        onClick={onClick}
        className="flex px-3 align-middle text-center transition-colors border-t border-gray-900 sm:border-t-0  h-10 bg-white text-black hover:text-white bg-gradient-to-tr  from-sky-500 to-green-400 cursor-pointer"
      >
        {icon ? icon : null}
        <div className="my-auto w-full flex flex-row">{text}</div>
      </div>
    );
  } else if (color === 'green2') {
    return (
      <div
        onClick={onClick}
        className="flex hover:text-white mx-auto sm:w-36 py-3 px-6 bg-gradient-to-tr text-black from-sky-500 to-green-400 cursor-pointer text-xl font-light"
      >
        {icon ? icon : null}
        <div className="my-auto mx-auto text-center">{text}</div>
      </div>
    );
  } else if (color === 'hoverBlue') {
    return (
      <input
        type="button"
        onClick={onClick}
        className="px-3 transition-colors border-t border-gray-900 sm:border-t-0  h-10 bg-white text-black hover:text-white hover:bg-blue-900 cursor-pointer flex my-auto"
        value={text}
      />
    );
  } else if (color === 'hoverGreen') {
    return (
      <input
        type="button"
        onClick={onClick}
        className="py-2 px-3 border-t border-gray-900 sm:border-t-0 cursor-pointer  transition-colors bg-white text-black hover:text-white hover:bg-green-900"
        value={text}
      />
    );
  } else {
    return <div>{text}</div>;
  }
};
export default Button;
