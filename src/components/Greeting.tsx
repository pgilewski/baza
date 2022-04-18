import { useAuth } from '../context/AuthContext';
type Props = {
  user: string | null;
};

const Greeting = (props: Props) => {
  return (
    <div className="text-4xl w-full text-center mb-6">
      Hi, {props.user}
    </div>
  );
};
export default Greeting;
