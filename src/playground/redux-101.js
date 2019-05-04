import  { createStore } from 'redux';

console.log("101");

// action generator
const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// reducers
// 1. Reducers are pure functions
// 2. Never change state or action


const countReducer = createStore((state = { count: 0}, action) => {
    
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
        return {
                count: state.count - action.decrementBy
            };    
        case 'RESET':
            return {
                count: 0
            };   
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }

});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// /actions - an action is an object taht gets sent to the store

// actions: increment, decrement, reset, etc.

// i'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount( {incrementBy: 5} ));


//unsubscribe();

store.dispatch(incrementCount());

store.dispatch(decrementCount( {decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(incrementCount());

store.dispatch(setCount( {count: 101 }));

