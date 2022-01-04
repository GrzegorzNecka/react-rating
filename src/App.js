import React, { useState, useEffect } from 'react';
import './style.css';

const UglyNumber = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(state + 1);
    setState(state + 1);
    setState(state + 1);
  }, []);

  return <p>Ugly Number: {state}</p>;
};

const PrettyNumber = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState((prevState) => prevState + 1);
    setState((prevState) => prevState + 1);
    setState((prevState) => prevState + 1);
  }, []);

  return <p>Pretty Number: {state}</p>;
};

export default function App() {
  return (
    <>
      <UglyNumber />
      <PrettyNumber />
    </>
  );
}
