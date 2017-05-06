import { createStore } from 'redux';

const reducer = function reducer(state, action) {
    if(action.type === 'INCREMENT') {
        return state + action.value;
    }
    else if (state.action === 'DECREMENT') {
        return state - action.value;
    }
    return state;
}

const store = createStore(reducer, 0);

store.subscribe (() => {
    console.log("store changed", store.getState());
})

store.dispatch({type: "INCREMENT", value: 100});
store.dispatch({type: "DEREMENT", value: 10});
store.dispatch({type: "INCREMENT", value: 1000});
store.dispatch({type: "INCREMENT", value: 90});
