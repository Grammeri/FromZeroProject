import {applyMiddleware, combineReducers, createStore} from "redux";
import {JsonplaceholderReducer} from "./reducers/JsonplaceholderReducer";
import thunk from "redux-thunk";

let rootReducer=combineReducers({
    jsp:JsonplaceholderReducer
})
export type rootReducerType=ReturnType<typeof rootReducer>

export const store=createStore(rootReducer,applyMiddleware(thunk))

//@ts-ignore
window.store=store