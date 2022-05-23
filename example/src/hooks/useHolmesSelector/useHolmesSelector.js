import {useEffect, useState} from 'react';
import { getGlobalContext } from '../../holmes';

const useHolmesSelector = (keys = []) => {
  const [mapper, setMapper] = useState({});

  useEffect(() => {
    const context = getGlobalContext();
    const unSubscribers = [];
    keys.forEach((key) => {
      if (context.has(key)) {
        const observable = context.get(key);
        const subscription = observable.subscribe((data) => {
          setMapper((prev) => ({
            ...prev,
            [key]: data,
          }));
        });
        unSubscribers.push(subscription);
      }
    });
    return () => {
      if (unSubscribers.length > 0) {
        try {
          unSubscribers.forEach((s) => s.unsubscribe());
        } catch (e) {
          console.log(e);
        }
      }
    };
  }, []);

  return mapper;
};

export default useHolmesSelector;
