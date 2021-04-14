import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  data: {},
  error: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case 'ERROR':
      return {
        loading: true,
        data: {},
        error: '데이터를 찾을 수 없습니다.',
      };
    default:
      return state;
  }
};

const Test4 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/5')
      .then((res) => {
        dispatch({ type: 'SUCCESS', payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: 'ERROR' });
      });
  }, []);

  return (
    <div>
      <h2>{state.data && state.loading ? '로딩 중...' : state.data.title}</h2>
      <p>{state.error ? state.error : null}</p>
    </div>
  );
};

export default Test4;
