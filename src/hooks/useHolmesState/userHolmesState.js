import React from 'react';
import {BehaviorSubject} from 'rxjs/dist/types';
import { onCheckKeyIfPresent } from '../../utils/Utils';
import { getGlobalContext } from '../../index';

const useObservableState = (key = '', initialState = null) => {
  onCheckKeyIfPresent(key);

  const [tempState, setTempState] = React.useState();

  React.useEffect(() => {
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
      if (observable) {
        observable.unsubscribe();
      }
    };
  }, []);

  const setState = React.useCallback(
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

export default useObservableState;
