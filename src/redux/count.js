// Type
const INCREMENT = 'INCREMENT';
const DECREASE = 'DECREASE';

// Action
export function incrementAction(num) {
    return {
        type: INCREMENT, payload: { num: num }
    };
}
export function decreaseAction() {
    return {
        type: DECREASE
    };
}


// Reducer
const initialState = {
    value: 10,
};

function addReducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload.num
            };
        case DECREASE:
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}

export default addReducer;
