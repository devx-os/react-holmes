import React from 'react';
import {BehaviorSubject} from 'rxjs';
import {onCheckKeyIfPresent} from '../../utils/Utils';
import {getGlobalContext} from '../../holmes';

const setHolmesReducer = (
  key = '',
  initialState = null,
  reducer
) => {
  onCheckKeyIfPresent(key);

  const [tempState, setTempState] = React.useState();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const context = getGlobalContext();
    let observable = null;
    if (context.has(key))
      throw new Error(`${key} already set, get the state with useHolmesReducer('key')`);

    observable = new BehaviorSubject(initialState);
    context.set(key, observable);
    context.set(`${key}_dispatch`, dispatch);
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

  React.useEffect(() => {
    const context = getGlobalContext();
    const observable = context.get(key);
    observable.next(state);
  }, [state]);

  return [tempState, dispatch];
};

export default setHolmesReducer;
