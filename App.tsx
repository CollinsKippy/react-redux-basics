import * as React from 'react';
import Counter from './features/counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function App() {
  return (
    <div className="container-fluid">
      <h1>React Redux Basics</h1>
      <p>With Bootstrap 5.0</p>
      <Counter />
    </div>
  );
}
