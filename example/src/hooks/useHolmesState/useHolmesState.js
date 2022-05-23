import { useState, useEffect, useCallback, useRef } from "react";
import { BehaviorSubject } from "rxjs";
import { onCheckKeyIfPresent } from "../../utils/Utils";
import { getGlobalContext } from "../../holmes";

const useHolmesState = (key = "", initialState = null) => {
  onCheckKeyIfPresent(key);

  let observable = null;
  const obsRef = useRef(false);
  const [tempState, setTempState] = useState();

  (function initObservable() {
    const context = getGlobalContext();
    if (context.has(key) && !obsRef.current) {
      observable = context.get(key);
      if (observable) obsRef.current = true;
    }
    if (!context.has(key) && !obsRef.current) {
      observable = new BehaviorSubject(initialState);
      context.set(key, observable);
      if (observable) obsRef.current = true;
    }
  })();

  useEffect(() => {
    if (obsRef.current) {
      let subscription = null;
      subscription = observable.subscribe({
        next(data) {
          setTempState(data);
        },
        error(err) {
          console.log(err);
        },
        complete() {
          console.log("done");
        },
      });
      return () => {
        const context = getGlobalContext();
        const observable = context.get(key);
        if (observable && subscription) {
          subscription.unsubscribe();
        }
      };
    }
  }, [obsRef.current]);

  const setState = useCallback(
    (value) => {
      const context = getGlobalContext();
      const observable = context.get(key);
      if (observable) {
        if (typeof value === "function") {
          observable.next(value(tempState));
        } else {
          observable.next(value);
        }
      }
    },
    [tempState]
  );

  return [tempState, setState];
};

export default useHolmesState;
