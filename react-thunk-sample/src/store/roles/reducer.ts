const rolesReducer =(state:any = [1,2,3], action:{type:String,payload:any}) => {
    switch (action.type) {
        case 'SET_ROLES':
            return action.payload
        default:
            return state
    }
    
    
}
export default rolesReducer