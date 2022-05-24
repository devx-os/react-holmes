import { useState, useEffect, useCallback, useRef } from "react";
import { BehaviorSubject } from "rxjs";
import { onCheckKeyIfPresent } from "../../utils/Utils";
import { getGlobalContext } from "../../holmes";
import {useHolmesValue} from "../index";

const useHolmesState = (key = "", initialState = undefined) => {
  onCheckKeyIfPresent(key);
  const obsRef = useRef(null);

  (function initObservable() {
    let observable = null;
    const context = getGlobalContext();
    if (context.has(key) && !obsRef.current) {
      observable = context.get(key);
      obsRef.current = observable;
    }
    if (!context.has(key) && !obsRef.current) {
      observable = new BehaviorSubject(initialState);
      context.set(key, observable);
      obsRef.current = observable;
    }
  })();

  const tempState = useHolmesValue(key);

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

  return [tempState === undefined ? initialState : tempState, setState];
};

export default useHolmesState;
