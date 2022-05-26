import { useEffect, useRef } from "react";

import { getGlobalContext } from "../../holmes";
import useHolmesValue from "../useHolmesValue/useHolmesValue";

const useHolmesReducer = (key = "") => {
  const dispatch = useRef(() => {});

  useEffect(() => {
    const context = getGlobalContext();
    const dispatchGlobal = context.has(`${key}_dispatch`)
      ? context.get(`${key}_dispatch`)
      : null;
    dispatch.current = dispatchGlobal;
  }, []);

  const state = useHolmesValue(key);

  return [state, dispatch.current];
};

export default useHolmesReducer;
