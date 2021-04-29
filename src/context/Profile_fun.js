import React from 'react'
import {UserContext, ThemeContext} from './App'

export default function Profile() {
  return (
    <div>
      <ProfileHeader />
    </div>
  )
}

function ProfileHeader(){

  //针对函数组件

  // Context.Consumer
  // <MyContext.Consumer>
  //   {value => /* 基于 context 值进行渲染*/}
  // </MyContext.Consumer>
     return(
       <UserContext.Consumer>
         {
           value => {
            return (
              <ThemeContext.Consumer>
                {
                  color => {
                    console.log(color);
                    return (
                      <div>
                        <h3>Name : {value.nickname}</h3>
                        <h3>Level : {value.level}</h3>
                        <h3>Color: {color.color}</h3>
                      </div>
                    )
                   }
                }
              </ThemeContext.Consumer>
            )
           }
         }
       </UserContext.Consumer>
     )
 }