import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messagesReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sitebar: sitebarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;