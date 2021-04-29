import React, { Component } from 'react'
import Profile from './Profile_fun'

// 在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，
// 但此种用法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），
// 这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，
// 而不必显式地通过组件树的逐层传递 props。

// API

// React.createContext
// Context.Provider
// Class.contextType
// Context.Consumer
// Context.displayName
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。

// 1.默认值,当向上没有找到context 如 line 35，<Profile />写在Provider外面的时候会展示默认值

export const UserContext = React.createContext({
  nickname : "xxxx",
  level:-1
})
export const ThemeContext = React.createContext({color:""})


export default class App extends Component {
  render() {
    return (
      <div>
        {/* 2.实际传递的数据 */}
       <UserContext.Provider value={{nickname:"lebron james",level:23}}>  
         <ThemeContext.Provider value={{color:"skyblue"}}>
            <Profile />
         </ThemeContext.Provider>
       </UserContext.Provider>

       {/* <Profile /> */}
      </div>
    )
  }
}
