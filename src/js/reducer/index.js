import { combineReducers } from "redux";
import { moviereducer } from './moviereducer';
import receipReducer from './reciepeReducer';
export const rootreducer = combineReducers({moviereducer,receipReducer})
