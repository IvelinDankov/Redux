import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.toggleCounter)

  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(counterActions.increase())
  }
  const handleDecrease = () => {
    dispatch(counterActions.decrease())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { !show &&  <div className={classes.value}> {counter}</div> }
     
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
