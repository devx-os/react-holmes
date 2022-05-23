import React from "react";
import { useHolmesState } from "../hooks";

const Component3 = () => {
  const [state, setState] = useHolmesState("component-1");
  return (
    <div>
      <p>Component3</p>
      <p>Component 1 State : {state} </p>
    </div>
  );
};

export default Component3;
