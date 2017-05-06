import { createStore, combineReducers } from 'redux';

const productReducer = (state = {
    product: 'Chair',
    price: 1000,
}, action) => {

    switch(action.type){
        case 'INCREASE_PRICE':
            state = {
                ...state,
                price: state.price + action.value,
            }
        break;
        case 'DECREASE_PRICE':
            state = {
                ...state,
                price: state.price - action.value,
            }
        break;
    }
    return state;
}

const dealerReducer = (state = {
    name: 'Super Shoppie',
    numberOfProducts: 500,
}, action) => {

    switch (action.type) {
        case 'INCREASE_PRODUCTS':
            state = {
                ...state,
                numberOfProducts: state.numberOfProducts + action.value,
            };
            break;
        case 'DECREASE_PRODUCTS':
            state = {
                    ...state,
                    numberOfProducts: state.numberOfProducts + action.value,
                };
            break;
    }
    return state;
}

const store = createStore(combineReducers({productReducer, dealerReducer}));

store.subscribe (() => {
    console.log("store changed=", store.getState());
})

store.dispatch({type: "INCREASE_PRICE", value: 100});
store.dispatch({type: "DECREASE_PRICE", value: 200});
store.dispatch({type: "INCREASE_PRODUCTS", value: 200});
store.dispatch({type: "DECREASE_PRODUCTS", value: 200});

