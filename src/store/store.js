import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { resumeReducer } from './reducers/headerReducer';

const reducer = combineReducers({
  resume: resumeReducer,
});

let initialState = {};
const middlware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);
export default store;
