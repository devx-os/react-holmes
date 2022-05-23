# React Holmes - Elementary State Management for React
Holmes is a 0 config, fast and elementary state management for React.

Holmes has a very minimal API. It is as simple to use as React’s integrated hooks, but all state is globally accessible.

## Installation

## Why Holmes?

Holmes has one objective: **make state management as easy and fast as possible.**

Simplfying the state management process is a great way to improve the performance of your application and with Holmes we can achieve this result.

Holmes is built on top of RxJS, which is a library for reactive programming and we are using it to make the state management process as fast as possible.

No external configuration is required, no boilerplate code, install the npm package and you are ready to use Holmes's elementary hooks.


## useObservableState

Create a global state that can be observed by other components, this hook return the state and the setter function.

`const [state, setState] = useObservableState(key, initialState)`

Example:

```js 
import React from 'react';
import { useObservableState } from 'react-holmes/hooks';

function MyComponent(props) {
  
  // useObservableState returns an observable state value
  const [state, setState] = useObservableState('myFirstGlobalState', 'initial value');

  return (
    <>
      {state}
      <button onClick={() => setState('new value')}>Change state</button>
    </>
  );
}

export default MyComponent;

```

## useObservableValue

Get only the value of a global state by the state key.

`const value = useObservableValue(key)`

Example:

```js 
import React from 'react';
import { useObservableValue } from 'react-holmes/hooks';

function MyComponent2(props) {
  
  // access the value of the global state setted with useObservableState
  const value = useObservableState('myFirstGlobalState');

  return (
    <>
      {value}
    </>
  );
}

export default MyComponent2;

```