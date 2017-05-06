import { createStore } from 'redux';

const reducer = function reducer(state = {
    product: 'Chair',
    price: 1000,
}, action) {

    if(action.type === 'INCREASE_PRICE') {
        return {
            ...state,
            price: state.price + action.value,
        }
    }
    else if (action.type === 'DECREASE_PRICE') {
        return {
           ...state,
           price: state.price - action.value,
       };
    }
    return state;
}

const store = createStore(reducer);

store.subscribe (() => {
    console.log("store changed=", store.getState());
})

store.dispatch({type: "INCREASE_PRICE", value: 100});
store.dispatch({type: "DECREASE_PRICE", value: 200});

