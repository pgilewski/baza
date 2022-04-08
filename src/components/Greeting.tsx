import { useAuth } from '../context/AuthContext';

const Greeting = (props: any) => {
  return (
    <div className="text-4xl w-full text-center mb-6">
      Hi, {props.user}
    </div>
  );
};
export default Greeting;
