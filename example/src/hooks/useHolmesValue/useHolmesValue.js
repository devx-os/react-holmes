import {useState, useEffect, useRef} from 'react';

import useObservable from "../useObservable/useObservable";

const useHolmesValue = (key = '', initialState) => {
  const [value,setValue] = useState(initialState);
  const subRef = useRef(null);
  const observable = useObservable(key, initialState);

  if (observable) {
    subRef.current = observable.subscribe((data) => {
      if(data !== undefined && data !== value){
        setValue(data);
      }
    });
  }

  useEffect(() => {
    return () => {
      if (subRef.current) {
        subRef.current.unsubscribe();
      }
    };
  }, []);

  return value;
};

export default useHolmesValue;
