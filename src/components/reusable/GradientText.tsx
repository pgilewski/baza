type Props = {
  text: string
}

const GradientText = ({ text }: Props) => {
  return (
    <div
      id="fadein"
      className=" flex items-center justify-center pt-8 md:pt-16"
    >
      <h1 className="text-center text-8xl font-black text-white">
        <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
          {text}
        </span>
      </h1>
    </div>
  )
}
export default GradientText
