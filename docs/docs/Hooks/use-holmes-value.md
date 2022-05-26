# useHolmesValue

Get only the value of a global state by the state key.

```jsx title="useHolmesValue"
const [state, setState] = useHolmesValue(key);
```

```jsx title="Example"
import React from 'react';
import {useHolmesValue} from 'react-holmes/Hooks';

function MyComponent(props) {

  // access the value of the global state setted with useHolmesState
  const value = useHolmesValue('myFirstGlobalState');

  return (
      <>
        {value}
      </>
  );
}

export default MyComponent;
```