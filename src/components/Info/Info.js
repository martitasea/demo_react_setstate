import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  constructor(props){
    super(props);
    this.state = {
      number:1,
      text: "texto del primer onBoarding",
      img: "./number-one.svg",
    };
    this.change=this.change.bind(this)
  }

  change(){
    let number=this.state.number;
    if(number===1){this.setState({text: "texto del segundo onBoarding", img:"./two.svg", number:2});}
    else if(number===2){this.setState({text: "texto del tercer onBoarding", img:"./third.svg", number:3});}
    else if(number===3){this.setState({text: "texto del cuarto onBoarding", img:"./four.svg", number:4});}
    else{}
  }

   render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <p>{this.state.text}</p>
        <img src={this.state.img} alt=""/><br/>
        <button onClick={this.change}>SIGUIENTE</button>
      </div>
    );
  }
}

export default Info;