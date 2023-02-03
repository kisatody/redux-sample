import request from "../../utils/request";

//获得角色数据
export const getRolesApi = () => request.get('/role')
