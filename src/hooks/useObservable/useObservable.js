import {BehaviorSubject} from "rxjs";

import {getGlobalContext} from '../../holmes';

const useObservable = (key = '', initialState) => {
  const context = getGlobalContext();

  if (!context.has(key)) {
    const observable = new BehaviorSubject(initialState);
    context.set(key, observable);
  }

  return context.get(key);
};

export default useObservable;
