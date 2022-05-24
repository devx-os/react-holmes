import {useState, useEffect, useRef} from 'react';

import {getGlobalContext} from '../../holmes';

const useHolmesValue = (key = '') => {
  const [value, setValue] = useState();
  const obsRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const context = getGlobalContext();
    if (!context.has(key)) throw new Error(`${key} has not been setted, set it first with useHolmesState() hook`);
    obsRef.current = context.get(key);
    subRef.current = obsRef.current.subscribe((data) => {
      setValue(data);
    });

    return () => {
      subRef.current.unsubscribe();
    };
  }, []);

  return value;
};

export default useHolmesValue;
