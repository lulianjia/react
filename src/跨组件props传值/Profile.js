import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader {...this.props} />
        <ul>
          <li>11111</li>
          <li>22222</li>
          <li>33333</li>
          <li>44444</li>
        </ul>
      </div>
    )
  }
}

function ProfileHeader(props) {
  return (
    <div>
      <h3>Name : {props.nickname}</h3>
      <h3>Level : {props.level}</h3>
    </div>
  )
}