import React, { Component } from 'react'
import Profile from './Profile'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nickname:'morris',
      level:22
    }
  }
  render() {
    return (
      <div>
        <Profile  {...this.state}/>
      </div>
    )
  }
}
