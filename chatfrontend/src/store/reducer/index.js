//we import the reducer we have just created and call the action object created previously

// import the reducers
import { ProcessReducer } from "./process";
import { combineReducers } from "redux";
// define the object and call the action
const rootReducers = combineReducers({
  ProcessReducer: ProcessReducer,
});
// else return default root reducer
export default rootReducers;

// we add redux into our React App and then create an action by the name process.

//The action will help send and receive incoming and outgoing messages respectively to the file aes.js, which will encrypt and decrypt messages.
