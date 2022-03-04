import React, { useState } from 'react'

interface ButtonProps {
  color: string
  nextClass: string
  icon: Node
  text: string
}
const Button: React.FC<ButtonProps> = ({ color, nextClass, icon, text }) => {
  const [propsClass] = useState(nextClass)
  const [propsText] = useState(text)
  return <div>{text}</div>
}
export default Button
