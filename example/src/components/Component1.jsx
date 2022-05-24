import React from "react";
import { useHolmesState } from "../hooks/index";

const Component1 = () => {
  const [state, setState] = useHolmesState("component-1",0);
  console.log(state, "state compoennt 1");
  return (
    <div>
      <p>Component1</p>
      <p>State : {state}</p>
    </div>
  );
};

export default Component1;
