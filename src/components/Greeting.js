import { useSelector } from 'react-redux';

const Greeting = () => {
  const { message } = useSelector((state) => state.greet);

  return (
    <div>
      { message }
    </div>
  );
};

export default Greeting;
