// src/components/LikeButton.js

import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={handleClick}>
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;
