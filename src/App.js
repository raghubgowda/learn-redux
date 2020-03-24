import React from 'react';
import './App.css';
import {increment, decrement, logIn, logOut} from './actions'
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.logged);
  const dispatch = useDispatch();

  return (
    <div className="App">
     <h1>Redux Example</h1>
     <h2>Counter {counter}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={ () => dispatch(decrement())}>Decrement</button>
      </div>
     { isLogged ? 
        <button onClick={ () => dispatch(logOut())}> Click to logout </button> : 
        <button onClick={ () => dispatch(logIn())}> Please login</button>
     }
    </div>
  );
}

export default App;
