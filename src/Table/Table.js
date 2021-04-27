import React from 'react'

class Table extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          books:[
          {
              name: '懒神大战哥斯拉',
              price: 29,
              date: 2021 - 11 - 1,
              count: 1
          }, {
              name: '哥斯拉大战金刚',
              price: 49,
              date: 2021 - 13 - 1,
              count: 1
          }, {
              name: '懒神大战卢本伟',
              price: 56,
              date: 2024 - 11 - 1,
              count: 1
          }, {
              name: '懒神大战uzi',
              price: 69,
              date: 2011 - 11 - 1,
              count: 1
          }
      ]
      }
  }
  normalRender(){
      return (
          <div> 
              <table>
              <thead>
                  <tr>
                      <th></th>
                      <th>书籍名称</th>
                      <th>价格</th>
                      <th>出版日期</th>
                      <th>购买数量</th>
                      <th>操作</th>
                  </tr>
              </thead>
              <tbody>
                 {
                     this.state.books.map((item,index) => {
                          return(
                              <tr key={item.name}>
                                  <td>{index +1}</td>
                                  <td>{item.name}</td>
                                  <td>{this.formatPrice(item.price)}</td>
                                  <td>{item.date}</td>
                                  <td>
                                      <button onClick = {()=>{this.modifyCount(index,0,1)}} disabled={item.count <= 1}>-</button>
                                      <span className = "count">{item.count}</span>
                                      <button onClick = {()=>{this.modifyCount(index,1,1)}}>+</button>
                                  </td>
                                  <td>
                                      <button onClick={e => this.removeItem(index)}>移除</button>
                                  </td>
                            </tr>
                          )
                     })
                 }
              </tbody>
          </table>
          <h3>Total Price:{this.formatPrice(this.getTotalPrice())}</h3>
      </div>
      )
  }
  emptyRender(){
      return <h3>This is empty!!</h3>
  }
  render() {
    return  this.state.books.length ? this.normalRender() : this.emptyRender();
  }
  modifyCount(index,type,step){
    let newBooks = [...this.state.books]
    type ? newBooks[index].count+=step:newBooks[index].count-=step;
    this.setState({
        books:newBooks
    })
       
  }
  getTotalPrice(){
  // this.state.books.reduce((prev,curr)=>{
  //     return 
  // },totalPrice) 
  // for(let i = 0;i<this.state.books.length;i++){
  //     totalPrice += this.state.books[i].price * this.state.books[i].count;
  // }
  // return totalPrice;
  return this.state.books.reduce((prev,curr)=>{
      return prev + curr.price*curr.count;
  },0)

}

  formatPrice(price){
      if(typeof price != 'number'){
          price = price || 0;
      }
      return `￥${Number(price).toFixed(2)}`
  }

  removeItem(index){
      let newBooks = [...this.state.books];
      newBooks.splice(index,1);
      this.setState({
          books:newBooks
      })
  }
}

export default Table;