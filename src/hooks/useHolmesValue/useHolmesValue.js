import React from 'react';

import {getGlobalContext} from '../../index';

const useHolmesValue = (key = '') => {
  const [value, setValue] = React.useState(null);

  React.useEffect(() => {
    const context = getGlobalContext();
    if (!context.has(key)) throw new Error(`${key} has not been setted, set it first with useHolmesState() hook`);
    const observable = context.get(key);
    observable.subscribe((data) => {
      setValue(data);
    });
    return () => {
      observable.unsubscribe();
    };
  }, []);

  return value;
};

export default useHolmesValue;
