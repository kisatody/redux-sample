
import { getRolesApi } from '../../api/roles/roles'

export const getRolesAsync = () => {
    return async (dispatch:any) => {
        const res:any = await getRolesApi()
        if(res) {
            dispatch({
                type:'SET_ROLES',
                payload: res.rows
            })
        }
    }
}