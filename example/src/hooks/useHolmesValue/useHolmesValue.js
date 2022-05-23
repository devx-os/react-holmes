import {useState, useEffect} from 'react';

import {getGlobalContext} from '../../holmes';

const useHolmesValue = (key = '') => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const context = getGlobalContext();
    if (!context.has(key)) throw new Error(`${key} has not been setted, set it first with useHolmesState() hook`);
    const observable = context.get(key);
    const subscription = observable.subscribe((data) => {
      setValue(data);
    });


    return () => {
      const context = getGlobalContext();
      const observable = context.get(key);
      if (observable) {
        subscription.unsubscribe();
      }
    };
  }, []);

  return value;
};

export default useHolmesValue;
