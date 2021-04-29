import React, { Component } from 'react'

export default function Profile() {
  return (
    <div>
      <ProfileHeader />
    </div>
  )
}

 export class ProfileHeader extends Component{

   // 指定 contextType 读取当前的 User context。
  // React 会往上找到最近的 User Provider，然后使用它的值。
  // static contextType = UserContext;

   render(){
     console.log(this.context);
     const {nickname, level} = this.context;
     return(
       <div>
         <h3>Name : {nickname}</h3>
         <h3>Level : {level}</h3>
       </div>
     )
   }
 }