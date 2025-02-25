import { useReducer } from "react";
import { counterReducer, initialState } from "./reducer.ts";

function Component() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count} </h2>
      <h2>Status: {state.status}</h2>
      <div style={{ marginTop: "2rem" }}>
        <div className="btn-container mb-1">
          <button
            className="btn"
            onClick={() => dispatch({ type: "increment" })}
          >
            Increment
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "decrement" })}
          >
            Decrement
          </button>
          <button className="btn" onClick={() => dispatch({ type: "reset" })}>
            Reset
          </button>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => dispatch({ type: "setStatus", payload: "active" })}
          >
            Set Status to Active
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "setStatus", payload: "inactive" })}
          >
            Set Status to Inactive
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "setStatus", payload: "pending" })}
          >
            Set Status to Pending
          </button>
        </div>
      </div>
    </div>
  );
}
export default Component;
