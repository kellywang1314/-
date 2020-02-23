export const reducer = (state = 0 ,action) => {
    const { type } = action
    switch(type){
        case 'add':
            return state + 1
        case 'less':
            return state - 1
        default: 
            return state
    }
}