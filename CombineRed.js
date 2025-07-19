import { combineReducers, createStore } from "redux";

function themeReducer(state="light",action){
    switch(action.type){
        case "SET_THEME":
            return action.payload
        default:
            return state;
    }
}

function authReducer(state=false,action){
    switch(action.type){
        case "LOGIN":
            return true;
        case "LOGOUT":
            return false;
        default:
            return state;

    }
}

const rootreducer = combineReducers({
    theme:themeReducer,
    login:authReducer
});
const store = createStore(rootreducer);

store.subscribe(() => {
    console.log("details are",store.getState());
    
})
store.dispatch({ type: "LOGIN" });
store.dispatch({ type: "SET_THEME", payload: "dark" });
store.dispatch({ type: "LOGOUT" });
store.dispatch({ type: "SET_THEME", payload: "light" });