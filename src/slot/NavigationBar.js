import React, { Component } from 'react'
import './navigationBar.css'

export default class NavigationBar extends Component {
  render() {
    console.log(this.props);
    // 每个组件都可以获取到 props.children。它包含组件的开始标签和结束标签之间的内容。
    return (
      <div className="nav-container">
          <div className="nav-left">
              {this.props.children[0]}
          </div>
          <div className="nav-center">
              {this.props.children[1]}
          </div>
          <div className="nav-right">
              {this.props.children[2]}
          </div>
      </div>
    )
  }
}
