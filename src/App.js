import React from "react";
import PropTypes from "prop-types";


class App extends React.Component{
  state={
    count: 0
  };
  add=()=>{
    // this.state.count=1;
    // console.log(this.state.count);

    // =>setState쓰면 자동으로 render함수 호출됨(새로운 state를 가지고)/ 
    // this.state.count이런식으로 쓰는건 나중에 성능문제 생김
    //this.setState({count:this.state.count+1});

    this.setState(current => ({ count: current.count + 1 }));
  };
  minus=()=>{
    // this.state.count--;
    // console.log(this.state.count);   
    // this.render();

    // =>setState쓰면 자동으로 render함수 호출됨
    //this.setState({count:this.state.count-1});

    this.setState(current => ({ count: current.count - 1 }));
  };
  render(){
    return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>);
  }
}

export default App;
