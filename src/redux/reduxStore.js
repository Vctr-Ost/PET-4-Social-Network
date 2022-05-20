import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messagesReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sitebar: sitebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

//* ЩОБ МОЖНА БУЛО В КОНСОЛІ ПРОПИСАТЬ          store.getstate()
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;