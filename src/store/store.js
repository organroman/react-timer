import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { syncLS, getLogsFromLs } from "./helpers";
import logsReducer from "./reducer";

const lsLogs = getLogsFromLs("ls_logs");

const initialState = {
  logs: lsLogs,
};

const reducer = combineReducers({
  logs: logsReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk, syncLS), devTools)
);

export default store;
