type Props = {
  user: string | null
}

const Greeting = (props: Props) => {
  return (
    <div className="mb-6 w-full text-center text-4xl">Hi, {props.user}</div>
  )
}
export default Greeting
