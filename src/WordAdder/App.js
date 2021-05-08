
import React from 'react'
import ListOfWords from './ListOfWords'

export default class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marker']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    // 数组的拷贝
    
    //   var arr = [0,1,2,3,4,5,6];
      
    //   //方法1：for循环
    //   var newArr1 = [];
    //   for (var i = 0; i < arr.length; i++) {
    //     newArr1.push(arr[i]);
    //   }
    //   console.log(newArr1); //ok [0,1,2,3,4,5,6]
    //   //方法2：数组的concat方法
    //   var newArr2 = [].concat(arr);
    //   console.log(newArr2);
    //   //方法3：使用ES6的展开操作符
    //   var newArr3 = [...arr];
    //   console.log(newArr3);
    //   //方法4：字符串的split 数组的join方法：
    //   var newArr4 = arr.join(" ").split(" ").map(function(i){return parseInt(i);});
    //   console.log(newArr4);
    //   //方法5：Object.assign()
    //   let A = [ 1, 2, 3 ]
    //   let B = Object.assign( [], A );
    //   console.log(B);
    //   //方法4： slice()
    //   //  arrayObject.slice(start,end)，该方法返回一个新的数组，
    //   //包含从 start 到 end （不包括该元素）的 arrayObject 中的元素
    //   let A = [ 1, 2, 3 ]

    //   ————————————————
    //   版权声明：本文为CSDN博主「年轻即出发」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
    //   原文链接：https://blog.csdn.net/weixin_42246997/article/details/107341725 
    const words = this.state.words;
    let a = [...this.state.words];
    a.push('marker')
    console.log(words);
    this.setState({words: a});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}