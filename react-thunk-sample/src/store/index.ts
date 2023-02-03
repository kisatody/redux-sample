import { combineReducers, legacy_createStore } from 'redux'

//配置中间件
import { applyMiddleware } from 'redux'
//使用中间件redux-thunk
import thunk from 'redux-thunk'

//引入仓库资源
import rolesReducer from './roles/reducer';
//合并所有仓库资源
const reducers = combineReducers({
    roles: rolesReducer
})

const store = legacy_createStore(reducers,applyMiddleware(thunk));
export default store
