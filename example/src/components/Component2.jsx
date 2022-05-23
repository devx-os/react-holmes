import React from "react";
import { useHolmesState } from "../hooks";

const Component2 = () => {
  const [state, setState] = useHolmesState("component-1", 0);
  return (
    <button onClick={() => setState((prev) => prev + 1)}>
      Set Component 1 State
    </button>
  );
};

export default Component2;
