import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import {useSetHolmesReducer} from "./hooks";

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

function App() {
  const [state, dispatch] = useSetHolmesReducer(
    "myReducer",
    {
      counter: 0
    },
    reducer
  );

  console.log('reducerState',state, dispatch);

  return (
    <>
      {JSON.stringify(state)}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>DISPATCH INCREMENT</button>
      <hr />
      <Component1 />
      <hr />
      <Component2 />
      <hr />
      <Component3 />
      <hr />
    </>
  );
}

export default App;
