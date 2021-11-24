import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export default function App() {
  const [rating, setRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
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
