# useHolmesReducer

```jsx title="App.js"
import "./styles.css";
import {useSetHolmesReducer, useHolmesState} from "@devx-os/react-holmes";
import MyCount from "./MyCount";
import MyCount2 from "./MyCount2";
import MyCountVisulizer from "./MyCountVisualizer";

const reducer = (state, action) => {
  const actions = {
    INCREMENT: () => {
      return {
        ...state,
        counter: state.counter + 1
      };
    },
    DECREMENT: () => {
      return {
        ...state,
        counter: state.counter - 1
      };
    },
    RESET: () => {
      return {
        counter: 0
      };
    }
  };
  return action ? actions[action.type]() : null;
};

export default function App() {
  useSetHolmesReducer(
      "myReducer",
      {
        counter: 0
      },
      reducer
  );

  const [globalState, setGlobalState] = useHolmesState("myValue");
  return (
      <div className="App">
        <MyCount/>
        <hr/>
        <MyCount2/>
        <hr/>
        <MyCountVisulizer/>
      </div>
  );
}
```

```jsx title="MyCount.js"
import "./styles.css";
import {useHolmesReducer} from "@devx-os/react-holmes";

export default function MyCount() {
  const [state, dispatch] = useHolmesReducer("myReducer");
  return (
      <div className="App">
        <h1>{state?.counter}</h1>
        <button onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
      </div>
  );
}
```

```jsx title="MyCount2.js"
import "./styles.css";
import {useHolmesReducer} from "@devx-os/react-holmes";

export default function MyCount() {
  const [state, dispatch] = useHolmesReducer("myReducer");
  return (
      <div className="App">
        <h1>{state?.counter}</h1>
        <button onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
      </div>
  );
}
```

```jsx title="MyCountVisualizer.js"
import "./styles.css";
import {useHolmesValue} from "@devx-os/react-holmes";

export default function MyCountVisulizer() {
  const state = useHolmesValue("myReducer");
  return (
      <div className="App">
        <h1>I can access only to count value:</h1>
        {JSON.stringify(state, null, 2)}
      </div>
  );
}
```

## Examples

[Count increment/decrement](https://codesandbox.io/s/react-holmes-reducer-ylih4u?file=/src/MyCount.js)