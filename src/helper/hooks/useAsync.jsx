import { useCallback, useReducer, useRef } from "react";
import useSaveDispatch from "./useSaveDispatch";

const defaultState = {
  data: null,
  status: "idle",
  error: null,
};
export default function useAsync({ init }) {
  const initialStateRef = useRef({
    ...defaultState, ...init
  })

  const [{data, status, error}, setState] = useReducer((state,action )=> {
    return {...state, ...action}
  }, initialStateRef.current)

  const safeSetState = useSaveDispatch(setState);

  const run = useCallback(
    (promise) => {
      if (!promise || !promise.then) 
        throw new Error(
          `The argument passed to useAsync().run must be a promise`
        );
      safeSetState({ status: "pending" });
      return promise.then(
        (data) => {
          safeSetState({ data , status: "resolved" });

          return data;
        },
        (error) => {
          safeSetState({ status: "rejected", error: JSON.parse(error.message) });
        }
      );
    },
    [safeSetState]
  );

  return { data, status, error, run };
}
