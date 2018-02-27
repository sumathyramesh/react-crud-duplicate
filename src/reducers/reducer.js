const initialState = {
    view: 'list',
    selectedPersonId: undefined,
    people: [
        { id: 1, firstName: 'Brent', lastName: 'Gardner' },
        { id: 2, firstName: 'Rachel', lastName: 'Koldenhoven' }
    ]
};

const reducer = (state, action) => {
    if(!state) {
        state = initialState;
    }
    console.log('action!', action);
    switch(action.type) {
        case 'PERSON_SELECTED': return personSelected(state, action);
        default: return state;
    }
}

const personSelected = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.view = 'edit';
    newState.selectedPersonId = action.id;
    return newState;
}

export default reducer;