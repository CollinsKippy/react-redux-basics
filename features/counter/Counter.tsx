import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { increment, decrement, increaseByAmount, reset } from './counterSlice';
import { useState, useEffect } from 'react';

const styles = {
  container: {
    marginTop: 20,
  },
  countResult: {
    color: 'blue',
    fontWeight: 500,
    fontSize: 48,
    marginBottom: 16,
  },
};

const Counter = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementer, setIncrementer] = useState(0);

  return (
    <div style={styles.container}>
      <div className="row">
        <div className="col-md-6">
          <h2 style={styles.countResult}>{count}</h2>

          <input
            type="number"
            placeholder="Enter number..."
            value={incrementer}
            onChange={(e) => {
              setIncrementer(+e.target.value);
            }}
          />

          <hr />
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
          <Button
            className="btn btn-info"
            onClick={() => {
              console.log({ incrementer });

              dispatch(increaseByAmount(incrementer));
            }}
          >
            Apply Incrementer
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => {
              dispatch(reset());
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
