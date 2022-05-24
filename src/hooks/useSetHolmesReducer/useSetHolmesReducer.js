import { useReducer, useState, useEffect } from "react";
import { BehaviorSubject } from "rxjs";
import { onCheckKeyIfPresent } from "../../utils/Utils";
import { getGlobalContext } from "../../holmes";

const useSetHolmesReducer = (key = "", initialState = null, reducer) => {
  onCheckKeyIfPresent(key);

  const [tempState, setTempState] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const context = getGlobalContext();
    let subscription = null;
    let observable = null;
    /*if (context.has(key))
      throw new Error(
        `${key} already set, get the state with useHolmesReducer('key')`
      );*/

    observable = new BehaviorSubject(initialState);
    context.set(key, observable);
    context.set(`${key}_dispatch`, dispatch);
    if (observable) {
      subscription = observable.subscribe((data) => setTempState(data));
    }
    return () => {
      const context = getGlobalContext();
      const observable = context.get(key);
      if (observable && subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    const context = getGlobalContext();
    const observable = context.get(key);
    observable.next(state);
  }, [state]);

  return [tempState, dispatch];
};

export default useSetHolmesReducer;
