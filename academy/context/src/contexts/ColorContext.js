import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('green');
  const onYellow = () => {
    setColor('yellow');
  };
  const onPink = () => {
    setColor('pink');
  };
  const onSkyblue = () => {
    setColor('skyblue');
  };
  const onLime = () => {
    setColor('lime');
  };

  return (
    <ColorContext.Provider
      value={{ color, onYellow, onPink, onSkyblue, onLime }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;

export const useColor = () => {
  const { color, onYellow, onPink, onSkyblue, onLime } = useContext(
    ColorContext,
  );
  return { color, onYellow, onPink, onSkyblue, onLime };
};
