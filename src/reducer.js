// const initialState = {
//     age: 0
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//           return { ...state, age: state.age + 1 };
//         case 'DECREMENT':
//           return { ...state, age: state.age - 1 };
//         default:
//           return state;
//     }
// }

// export default reducer

const initialState = {
    age: 35
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return {...state, age: state.age + 1}
        case 'SUBSTRACT': 
            return {...state, age: state.age - 1}
        default:
            return state
    }
}

export default reducer