import {useState, useEffect, useRef} from 'react';

import {getGlobalContext} from '../../holmes';

const useHolmesValue = (key = '',) => {
  const [value, setValue] = useState();
  const obsRef = useRef(null);
  const subRef = useRef(null);


  (function initObservable() {
    if (!obsRef.current) {
      const context = getGlobalContext();
      if (context.has(key)) {
        obsRef.current = context.get(key);
      }
    }
  })()


  useEffect(() => {
    if (obsRef.current) {
      subRef.current = obsRef.current.subscribe((data) => {
        setValue(data);
      });
    }
  }, [obsRef.current]);

  useEffect(() => {
    return () => {
      if(subRef.current) {
        subRef.current.unsubscribe();
      }
    };
  }, []);

  return value;
};

export default useHolmesValue;
