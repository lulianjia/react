import React, { Component } from 'react'
import './navigationBar.css'

export default class NavigationBar2 extends Component {
  render() {
    console.log(this.props);
    const {leftSlot,centerSlot,rightSlot} = this.props;// 方式２: 把需要传递的slot内容通过props的方式传给子组件({...props}),子组件结构
    // 方式１：每个组件都可以获取到 props.children。它包含组件的开始标签和结束标签之间的内容。this.props.children[0]...
    return (
      <div className="nav-container">
          <div className="nav-left">
             {leftSlot}
          </div>
          <div className="nav-center">
              {centerSlot}
          </div>
          <div className="nav-right">
             {rightSlot}
          </div>
      </div>
    )
  }
}
