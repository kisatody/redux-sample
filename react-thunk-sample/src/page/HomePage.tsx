import React, { useEffect } from 'react'
//引入获取redux存储状态机数据的Hooks
//引入修改状态机数据的Hooks
import { useSelector, useDispatch } from 'react-redux'
import { getRolesAsync } from '../store/roles/action'

const HomePage = () => {
  //获得dispath方法
  const dispatch:any = useDispatch()
  //定义修改状态机数据方法
  // const updateRoles = async() => {
  //   //可写其它异步请求
  //   //调用dispath修改数据
  //   dispatch({
  //     type:'SET_ROLES',
  //     payload: [{
  //       name:'钉针',
  //       address: '妈妈生的'
  //     }]
  //   })
  // }
  //异步修改状态机数据
  const updateRolesSync = () => {
    dispatch(getRolesAsync())
  }
  const roles = useSelector((state:any) => {
    return state.roles
  })
  //生命周期里调用方法
  useEffect(()=>{
    // updateRoles()
    updateRolesSync()
  })
  return (
    <div>HomePage</div>
  )
}

export default HomePage