import React from 'react'
import Child from './Child'

export default function Parent() {
  return (
    <div>
      <h4>This parent component</h4>
      <Child  regions={["xi'an","wuwei"]}/>
    </div>
  )
}
