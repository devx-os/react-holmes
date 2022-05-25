# React Holmes - Elementary State Management for React
Holmes is a 0 config, fast and elementary state management for React.

Holmes has a very minimal API. It is as simple to use as React’s integrated hooks, but all state is globally accessible.

## Installation
`npm i @devx-os/react-holmes` or `yarn add @devx-os/react-holmes`

## Why Holmes?

Holmes has one objective: **make state management as easy and fast as possible.**

Holmes is built on top of RxJS, which is a library for reactive programming and we are using it to make the state management process elementary.

Simplfying the state management process is a great way to improve the performance of your application and with Holmes we can achieve this result.

No external configuration is required, no boilerplates code require, install the npm package and you are ready to use Holmes's hooks.

## Hooks 

### useHolmesState

Create a global state that can be observed by other components, this hook return the state and the setter function.

`const [state, setState] = useHolmesState(key, initialState)`

Example:

```js 
import React from 'react';
import { useHolmesState } from '@devx-os/react-holmes';

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

### useHolmesValue

Get only the value of a global state by the state key.

`const value = useHolmesValue(key)`

Example:

```js 
import React from 'react';
import { useHolmesValue } from '@devx-os/react-holmes';

function MyComponent2(props) {
  
  // access the value of the global state setted with useHolmesState
  const value = useHolmesValue('myFirstGlobalState');

  return (
    <>
      {value}
    </>
  );
}

export default MyComponent2;

```