import React from "react";
import { useHolmesState } from "../hooks/index";

const Component1 = () => {
  const [state, setState] = useHolmesState("component-1");
  console.log(state, "state");
  return <div>Component1</div>;
};

export default Component1;
