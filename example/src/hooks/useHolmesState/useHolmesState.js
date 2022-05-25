import { useCallback } from "react";

import { onCheckKeyIfPresent } from "../../utils/Utils";
import { getGlobalContext } from "../../holmes";
import {useHolmesValue} from "../index";

const useHolmesState = (key = "", initialState = undefined) => {
  onCheckKeyIfPresent(key);

  const tempState = useHolmesValue(key, initialState);

  const setState = useCallback(
    (value) => {
      const context = getGlobalContext();
      const observable = context.get(key);
      if (observable) {
        if (typeof value === "function") {
          observable.next(value(tempState));
        } else {
          observable.next(value);
        }
      }
    },
    [tempState]
  );

  return [tempState, setState];
};

export default useHolmesState;
