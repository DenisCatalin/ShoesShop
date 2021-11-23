import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import navbarReducer from "./navbar/navbar.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'navbar']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    navbar: navbarReducer,
});

export default persistReducer(persistConfig, rootReducer);