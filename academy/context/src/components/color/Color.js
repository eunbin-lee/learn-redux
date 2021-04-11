import React from 'react';
import { useColor } from '../../contexts/ColorContext';

const Color = () => {
  const { color, onYellow, onPink, onSkyblue, onLime } = useColor();
  return (
    <div>
      <h1 style={{ color: color }}>Color: {color}</h1>
      <p>
        <button onClick={onYellow}>yellow</button>
        <button onClick={onPink}>pink</button>
        <button onClick={onSkyblue}>skyblue</button>
        <button onClick={onLime}>lime</button>
      </p>
    </div>
  );
};

export default Color;
