import {legacy_createStore} from "redux";

const initialState = {
    scrollFr: 0
}

const reducer = (state, {type, payload}) =>{
    switch (type) {
        case "SCROLL_CHANGE": return {
            ...state,
            scrollFr: payload
        }

        default: return state
    }
}

const store = legacy_createStore(reducer, initialState);

export default store;