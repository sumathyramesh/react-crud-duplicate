const initialState = {
    view: 'list',
    selectedPersonId: undefined,
    people: [
        { id: 1, firstName: 'Brent', lastName: 'Gardner' },
        { id: 2, firstName: 'Rachel', lastName: 'Koldenhoven' }
    ]
};

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;