const initState = {
    projects: [
        { id: '1', title: 'Collect all stars', content: 'bla bla bla' },
        { id: '2', title: 'Egg Hunt', content: 'bla bla bla' },
        { id: '3', title: 'Sleep', content: 'bla bla bla' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created poject', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state
        default:
            return state
    }
}

export default projectReducer