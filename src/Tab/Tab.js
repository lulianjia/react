import React, { Component } from 'react'

export default class Tab extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentInex:0
    }
  }
  render() {
    const {title} = this.props;
    const {currentInex} = this.state;
    return (
      <div className="tab-container">
       {
         title.map((item,index) => {
           return <div
            key={item}
            onClick = {()=>{this.getCurrentIndex(index)}} 
            className={"tab-item " +(index === currentInex ? "active" : "")}>
            <span> {item}</span>
            </div>
         })
       }
      </div>
    )
  }

  getCurrentIndex(index){
    const {getTabIndex} = this.props;
    console.log(index);
    this.setState({
      currentInex:index
    })
    getTabIndex(index)
  }
}
