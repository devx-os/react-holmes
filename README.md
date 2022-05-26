# React Holmes 🔍 - Elementary State Orchestrator for React
🔍 Holmes is a 0 config, fast and elementary state orchestrator for React.

Holmes has a very minimal API. It is as simple to use as React’s integrated hooks, but all state is globally accessible.

💡 Easy as React state hooks

🔄 State synchronization between components

🛰️ Distributed and not centralized state

🤯 No mutable objects

🚀 Fast

## Installation
`npm i @devx-os/react-holmes` or `yarn add @devx-os/react-holmes`

## Docs

https://devx-os.github.io/react-holmes/

## Why Holmes?
Holmes has one objective: **make state management as easy and fast as possible.**

React components has a built-in state object, where you store property values that belongs to the component.

When the state object changes, the component re-renders.

This behaviour has certain limitations:

Component state can only be shared by pushing it up to the common ancestor, but this might include a huge tree that then needs to re-render.
React-Holmes adopts a new vision when talking about state handling.

As other state managers use an external single source of truth to hydrate app client on state change, **React-Holmes does not create an external store** and does not need to wrap your app in a context.

## So, where is the global state?
There is no global state, actually.

The state is decentralized into components themselves.

The ONLY differences are the hook declared for state management and a key to identify state chunk.

While to declare a React state we need to declare it as:

    const [state, setState] = React.useState('test');

with React-Holmes we need to declare it as:

    const [state, setState] = useHolmesState('key', 'test');


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