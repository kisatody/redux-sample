import { combineReducers, legacy_createStore } from 'redux'
//引入仓库资源
import rolesReducer from './roles/reducer';
//合并所有仓库资源
const reducers = combineReducers({
    roles: rolesReducer
})

const store = legacy_createStore(reducers);
export default store
