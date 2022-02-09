const redux = require('redux');

//if state is undefined, state will be equals to a obj with counter: 0
const counterReducer = (state = {counter: 0}, action) => {
    return {
        counter: state.counter + 1
    };
};

const store = redux.createStore(counterReducer);

//we are reaching out the redux store and then submitting the new state to any component
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

//here we are just pointing to Redux where he needs to look for our state
store.subscribe(counterSubscriber);

//dispatch is a function that send to redux a action.
//they are a object that has a key called type
store.dispatch({type: 'increment'});