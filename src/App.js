import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions/index'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Counter : {counter}</h2>
      <button onClick={() => dispatch(increment(3))}>+3</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <br />
      <button onClick={() => dispatch(signIn())}>Log in</button>
      {isLogged ? <div>Some secret stuff</div> : ''}
    </div>
  );
}

export default App;
