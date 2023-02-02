const rolesReducer =(state:any = [1,2,3], action:{type:String,data:any}) => {
    switch (action.type) {
        case 'SET_ROLES':
            return action.data
        default:
            return state
    }
    
    
}
export default rolesReducer