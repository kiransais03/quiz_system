import {createStore,combineReducers} from "redux";
import userActionreducer from "./reducer/userActionreducer";


const store = createStore(userActionreducer);

export default store;