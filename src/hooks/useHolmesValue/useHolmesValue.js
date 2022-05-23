import React from 'react';

import {getGlobalContext} from '../../holmes';

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

  return value;
};

export default useHolmesValue;
