import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { ActionType } from "./action-types";
import { Action } from "./actions";
import { Dispatch } from "redux";

export const store = createStore(reducers, {}, applyMiddleware(thunk));

const state = store.getState();
// some manual testing
store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: null,
    type: "code",
  },
});
console.log(store.getState());
