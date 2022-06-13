import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span style={{ color: 'red', fontSize: '150px' }}>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button aria-label="By Amount" onClick={() => dispatch(incrementByAmount(100))}>
          +100
        </button>
      </div>
    </div>
  );
};

export default Counter;
