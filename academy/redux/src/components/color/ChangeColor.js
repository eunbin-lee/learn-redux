import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../../store/modules/changecolor';

const ChangeColor = () => {
  const color = useSelector((state) => state.changecolor.color);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ color: color }}>컬러값 변경: {color}</h1>
      <p>
        <button onClick={() => dispatch(changeColor('tomato'))}>tomato</button>
        <button onClick={() => dispatch(changeColor('lime'))}>lime</button>
        <button onClick={() => dispatch(changeColor('hotpink'))}>
          hotpink
        </button>
        <button onClick={() => dispatch(changeColor('skyblue'))}>
          skyblue
        </button>
        <button onClick={() => dispatch(changeColor('yellow'))}>yellow</button>
      </p>
    </div>
  );
};

export default ChangeColor;
