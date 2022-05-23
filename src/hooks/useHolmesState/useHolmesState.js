import {useState, useEffect, useCallback} from 'react';
import {BehaviorSubject} from 'rxjs';
import { onCheckKeyIfPresent } from '../../utils/Utils';
import { getGlobalContext } from '../../holmes';

const useHolmesState = (key = '', initialState = null) => {
  onCheckKeyIfPresent(key);

  const [tempState, setTempState] = useState();

  useEffect(() => {
    const context = getGlobalContext();
    let observable = null;
    if (context.has(key)) {
      observable = context.get(key);
    } else {
      observable = new BehaviorSubject(initialState);
      context.set(key, observable);
    }
    if (observable) {
      observable.subscribe((data) => setTempState(data));
    }
    return () => {
      const context = getGlobalContext();
      const observable = context.get(key);
      if (observable) {
        try {
          observable.unsubscribe();
        } catch (e) {
          console.log(e);
        }
      }
    };
  }, []);

  const setState = useCallback(
    (value) => {
      const context = getGlobalContext();
      const observable = context.get(key);
      if (observable) {
        if (typeof value === 'function') {
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
