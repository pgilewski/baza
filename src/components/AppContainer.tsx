import { ReactComponent as GoogleIcon } from '../assets/icons/google.svg'

const AppContainer = ({}) => {
  return (
    <div className="h-screen w-full homeBg text-center align-middle mx-auto">
      <div className="flex-row justify-center">
        <div className="text-7xl font-mono font-bold pt-28 text-white">
          POST SPOT
        </div>
        <div className="font-mono text-xl pt-4 text-white">
          Independent community <br /> space
        </div>
        <div className="flex flex-col font-mono justify-center mx-auto mt-4 text-white text-lg">
          <div className="transition-colors hover:transition-colors bg-purple hover:bg-blue-500  p-3 my-1 w-60 mx-auto cursor-pointer">
            sign up
          </div>
          <div className="transition-colors hover:transition-colors bg-green hover:bg-green-700 p-3 my-1 w-60 mx-auto cursor-pointer">
            log in
          </div>
          <div className="mt-4 border-t-4 w-2/3 md:w-2/5 border-gray-400 m-auto"></div>
          <p className="text-sm mt-4 ">
            By continuing with the option below you
            <br /> agree to Terms of Service and have read <br />
            the Privacy Policy.
          </p>
          <div className="transition-colors hover:transition-colors bg-white hover:bg-gray-400 cursor-pointer p-3 my-6 md:my-4 w-72 mx-auto text-black flex text-center">
            <GoogleIcon className=" mr-4" /> sign in with google
          </div>
        </div>
      </div>
    </div>
  )
}
export default AppContainer
