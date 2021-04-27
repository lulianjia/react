import React, { Component } from 'react'
import Tab from './Tab'
import './tab.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title:['经典','新款','流行'],
      showContent:'经典'
    }
  }
  render() {
    return (
      <div>
        <Tab title={this.state.title} getTabIndex={this.getTabIndex.bind(this)}/>
        <h3　style={{'paddingLeft':'40px'}}>{this.state.showContent}</h3>
      </div>
    )
  }

  getTabIndex(index){
    this.setState({
      showContent:this.state.title[index]
    })
  }
}
