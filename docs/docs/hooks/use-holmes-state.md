# useHolmesState

Create a global state that can be observed by other components, this hook return the state and the setter function.

```jsx title="useHolmesState"
const [state, setState] = useHolmesState(key, initialState);
```

```jsx title="Example"
import React from 'react';
import {useHolmesState} from 'react-holmes/hooks';

function MyComponent(props) {

  // useHolmesState returns an observable state value
  const [state, setState] = useHolmesState('myFirstGlobalState', 'initial value');

  return (
      <>
        {state}
        <button onClick={() => setState('new value')}>Change state</button>
      </>
  );
}

export default MyComponent;
```