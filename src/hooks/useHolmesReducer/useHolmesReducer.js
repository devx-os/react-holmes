import React from 'react';

import {getGlobalContext} from '../../index';
import useHolmesValue from "../useHolmesValue/useHolmesValue";

const useHolmesReducer = (key = '') => {
  const dispatch = React.useRef(() => {})

  React.useEffect(() => {
    const context = getGlobalContext();
    const dispatchGlobal = context.has(`${key}_dispatch`) ? context.get(`${key}_dispatch`) : null;
    if(!dispatchGlobal) throw new Error(`${key} has not been setted, set a reducer first with setHolmesReducer() hook`);
    dispatch.current = dispatchGlobal;
  }, []);
  const state = useHolmesValue(key);

  return [state, dispatch.current];
};

export default useHolmesReducer;
