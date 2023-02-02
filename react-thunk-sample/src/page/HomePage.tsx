import React, { useEffect } from 'react'
//引入获取redux存储状态机数据的Hooks
//引入修改状态机数据的Hooks
import { useSelector, useDispatch } from 'react-redux'

const HomePage = () => {
  //获得dispath方法
  const dispath = useDispatch()
  var roles = useSelector((state:any) => {
    return state.roles
  })
  //定义修改状态机数据方法
  const updateRoles = async() => {
    //可写其它异步请求
    //调用dispath修改数据
    dispath({
      type:'SET_ROLES',
      data: [{
        name:'钉针',
        address: '妈妈生的'
      }]
    })
    setTimeout(()=>{
      console.log(roles);
    },1000)
  }
  //生命周期里调用方法
  useEffect(()=>{
    updateRoles()
  },[])
  return (
    <div>HomePage</div>
  )
}

export default HomePage