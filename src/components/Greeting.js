/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.greet);

  useEffect(() => {
    if (loading) { return; }
    setLoading(true);
    dispatch(fetchGreeting()).then(() => {
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div>
      { message }
    </div>
  );
};

export default Greeting;
