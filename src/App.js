import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [rating, setRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  const handleReset = (e) => {
    if (e.target.tagName != 'DIV') {
      return;
    }
    setRating(0);
  };

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
