const defaultState = {
    inputValue:'gae',
    list: [
        {things: '1234'}
    ]
}

export default (state = defaultState, actions: any) => {
    console.log(actions);
    if (actions.type === 'changeInput') {
        let newState = {...state}
        newState.inputValue = actions.value
        return newState
    }
    
    if (actions.type === 'addList') {
        let newState = {...state}
        newState.list.push({things:newState.inputValue})
        newState.inputValue = ''
        return newState
    }
    return state
}