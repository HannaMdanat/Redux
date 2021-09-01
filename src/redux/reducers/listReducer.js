const initState = [];

function listReducer(state = initState, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            action.payload.items.forEach(element => {
                element.specs = 'Admin'
            });
            return action.payload.items;
        case 'CHANGE_TYPE':
            action.payload.forEach(element => {
                if (element.id == action.runs) {
                    element.specs = action.run
                }
            });
            return action.payload;
        default:
            return state;
    }
}

export default listReducer
