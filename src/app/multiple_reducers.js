import { createStore, combineReducers } from 'redux';

var initialProductState = {
    product: 'Chair',
        price: 1000,
}

var initialDealerState = {
    name: 'Super Shoppie',
    numberOfProducts: 500,
}

const productReducer = (state = initialProductState, action) => {

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

const dealerReducer = (state = initialDealerState, action) => {

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
};

const store = createStore(combineReducers({productReducer, dealerReducer}));

store.subscribe (() => {
    console.log("state=", store.getState());
})

console.log("initial state=", store.getState())
store.dispatch({type: "INCREASE_PRICE", value: 100});
store.dispatch({type: "DECREASE_PRICE", value: 200});
store.dispatch({type: "INCREASE_PRODUCTS", value: 200});
store.dispatch({type: "DECREASE_PRODUCTS", value: 200});

