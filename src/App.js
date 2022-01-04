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

export default function App() {
  return (
    <div onClick={handleReset} className="rating">
      {stars.map((star) => {
        return (
          <i
            key={star}
            onClick={() => setRating(star)}
            className={
              rating >= star ? `fa fa-star fa-star-active` : `fa fa-star`
            }
            aria-hidden="true"
          ></i>
        );
      })}
    </div>
  );
}
