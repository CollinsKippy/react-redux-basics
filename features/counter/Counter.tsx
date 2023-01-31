import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { increment, decrement } from './counterSlice';

const counterStyle = {
  marginTop: 20,
};

const Counter = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={counterStyle}>
      <div className="row">
        <div className="col-md-6">
          <h2>{count}</h2>
          <Button
            className="btn btn-success"
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
          <Button
            className="btn btn-dark"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
