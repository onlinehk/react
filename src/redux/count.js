// Type
const INCREMENT = 'INCREMENT';
const DECREASE = 'DECREASE';
const GET_DATA = 'GET_DATA';

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
export function getDataAction(params) {
    let url;
    if (params === 1) {
        url = 'https://jsonplaceholder.typicode.com/todos/1';
    } else {
        url = 'https://jsonplaceholder.typicode.com/todos';
    }
    return (dispatch) => {
        fetch(url, { method: 'get' })
            .then(response => response.json())
            .then(json => {
                if (params === 1) {
                    json = [json];
                }
                dispatch({
                    type: GET_DATA,
                    payload: { data: json }
                })
            })
    }
    
}


// Reducer
const initialState = {
    value: 10,
    get_data: false,
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
        case GET_DATA:
            return {
                ...state,
                get_data: action.payload.data
            };
        default:
            return state;
    }
}

export default addReducer;
