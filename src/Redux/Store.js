import { createStore } from "redux";
import { reducer } from "./Reducer";

// export const store=createStore(reducer,{
//     num:0
// })
export const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())