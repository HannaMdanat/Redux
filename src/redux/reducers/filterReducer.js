const iniState = [];

export default function filterReducer(state = iniState, action) {
    switch (action.type) {
        case 'GET_FILTERED':
            return action.payload.filter(i => i.specs === action.run);
        default:
            return state;
    }
}
