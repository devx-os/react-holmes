import React from "react";
import {useHolmesReducer, useHolmesState, useHolmesValue} from "../hooks";

const Component3 = () => {
  const [reducerState, dispatch] = useHolmesReducer('myReducer');
  const state = useHolmesValue("component-1");
  return (
    <div>
      <p>Component3</p>
      <p>Component 1 State : {state} </p>

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>DISPATCH INCREMENT</button>
      {reducerState?.counter}
    </div>
  );
};

export default Component3;
