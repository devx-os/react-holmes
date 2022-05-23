import React from 'react';
import { getGlobalContext } from '../../holmes';

const useHolmesSelector = (keys = []) => {
  const [mapper, setMapper] = React.useState({});

  React.useEffect(() => {
    const context = getGlobalContext();
    const unSubscribers = [];
    keys.forEach((key) => {
      if (context.has(key)) {
        const observable = context.get(key);
        unSubscribers.push(observable);
        observable.subscribe((data) => {
          setMapper((prev) => ({
            ...prev,
            [key]: data,
          }));
        });
      }
    });
    return () => {
      if (unSubscribers.length > 0) {
        unSubscribers.forEach((s) => s.unsubscribe());
      }
    };
  }, []);

  return mapper;
};

export default useHolmesSelector;
