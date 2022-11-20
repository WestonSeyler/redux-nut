import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createStore, applyMiddleware, combineReducers } from "../redux-nut";

import thunk from "redux-thunk";
import promise from "redux-promise";

// 定义了store修改规则
export function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

// 创建store
const store = createStore(
  // countReducer,
  combineReducers({
    count: countReducer,
  }),
  applyMiddleware(
    promise,
    thunk
    //  logger
  )
);

export default store;
