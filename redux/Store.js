import { combineReducers, createStore ,applyMiddleware } from "redux";
import laptopReducer from "./reducers/laptopRducer";
import mobileReducer from "./reducers/MobileReducer";
import usersReducer from "./reducers/UsersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    laptops:laptopReducer,
    mobiles:mobileReducer,
    users:usersReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk)) ;
export default store;
