import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import NavigationBar2 from './NavigationBar2'


export default class App extends Component {

  state = {
    leftSlot:<span>aaa</span>,
    centerSlot:<strong>bbb</strong>,
    rightSlot:<a href="/#">ccc</a>
  }

  render() {
    
    return (
        <div>
          <NavigationBar>
           <span>aaa</span>
           <strong>bbb</strong>
           <a href="/#">ccc</a>
         </NavigationBar>

         <NavigationBar2 {...this.state}/>
        </div>
    )
  }
}
