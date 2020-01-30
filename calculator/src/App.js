import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component
{


  constructor(props){
    let number1;
    let number2;
    let operation;
    super(props);
    this.state={
      cal:this.props.cal
    };
    // this.insert7=this.insert7.bind(this);
    // this.insert8=this.insert8.bind(this);
    // this.insert9=this.insert9.bind(this);
    // this.insert6=this.insert6.bind(this);
    // this.insert5=this.insert5.bind(this);
    // this.insert4=this.insert4.bind(this);
    // this.insert3=this.insert3.bind(this);
    // this.insert2=this.insert2.bind(this);
    // this.insert1=this.insert1.bind(this);
    // this.insert0=this.insert0.bind(this);
     this.TakeQuantity=this.TakeQuantity.bind(this);
     this.Backspace=this.Backspace.bind(this);
     this.add=this.add.bind(this);
     this.Equal=this.Equal.bind(this);
      this.number1= 0;
      this.number2=0;
      this.operation=0;

  }

  // insert7()
  // {
  //   this.setState(
  //     {
  //       cal:this.state.cal +'7'
  //     }
  //   );
  // }
  // insert8()
  // {
  //   this.setState(
  //     {
  //       cal:this.state.cal + '8'
  //     }
  //   );
  // }
  // insert9()
  // {
  //   this.setState(
  //     {
  //       cal:this.state.cal + '9'
  //     }
  //   );
  // }
  // insert6()
  // {
  //   this.setState(
  //     {
  //       cal:this.state.cal + '6'
  //     }
  //   );
  // }

  // insert5()
  // {
  //   this.setState(
  //     {
  //       cal:this.state.cal + '5'
  //     }
  //   );
  // }
  // insert4()
  // {
  //   this.setState(
  //     {
  //       cal:this.state.cal + '4'
  //     }
  //   );
  // }
  // insert3()
  // {
  //   this.setState(
  //     {
  //       cal:this.state.cal + '3'  
  //     }
  //   );
  // }
  // insert2()
  // {
  //   this.setState(
  //     {
  //       cal:this.state.cal + '2'   
  //     }
  //   );
  // }
  // insert1()
  // {
  //   this.setState(
  //     {
  //       cal:this.state.cal + '1' 
  //     }
  //   );
  // }
  // insert0()
  // {
  //   this.setState(
  //     {
  //       cal:this.state.cal + '0'
  //     }
  //   );
  // }
  TakeQuantity(event)
  {
    let cal=event.target.value;
    
    if(cal)
    {
      this.setState({
      cal:parseInt(cal)
     });
  }
  }
  Backspace(cal)
  {
    this.setState({
      cal:this.state.cal = 0
    });
    this.num1=0
    this.num2=0
  }
  add(operations)
  {    
    this.number1=this.state.cal
    this.operation=operations
    this.setState(
      {
        cal:'0'
      }

    );
     
      }
  
  Equal(cal)
  {
     this.number2=this.state.cal
     if(this.operation=='1') {
        this.setState({
          cal:parseInt(this.number1) + parseInt(this.number2)
          });
     
        }
        else if(this.operation=='2') {
          this.setState({
            cal:parseInt(this.number1) - parseInt(this.number2)
            });
       
          }
          else if(this.operation=='3') {
            this.setState({
              cal:parseInt(this.number1) * parseInt(this.number2)
              });
         
            }
            else if(this.operation=='4') {
              this.setState({
                cal:parseInt(this.number1) / parseInt(this.number2)
                });
           
              }
  }

  Nampad(cal)
  {
    this.setState({
      cal:this.state.cal +cal
    });
  }




  render(){
  return (
    <div>
     <div className="TopNumber">
             Calculator
      <input type="text"  className="input" value={this.state.cal} onChange={this.TakeQuantity}/>
      <div id ="top">
        <div>
      <button className='a' onClick ={(event) => this.Nampad('7')}> 7</button>
      <button className='a' onClick={() => this.setState({ cal:this.state.cal +'8'})}>8</button>
      <button className='a' onClick={() => this.setState({ cal:this.state.cal +'9'})}>9</button>
      <button className='a' onClick={this.Backspace}>C</button><br></br>
      <button className='a' onClick={() => this.setState({cal:this.state.cal +'4'})}>4</button>
      <button className='a' onClick={() => this.setState({cal:this.state.cal +'5'})}>5</button>
      <button className='a' onClick={() => this.setState({cal:this.state.cal +'6'})}>6</button>
      <button className='a' onClick={(event) => this.add('1')}>+</button><br></br>
      <button className='a' onClick={() => this.setState({cal:this.state.cal +'3'})}>3</button>
      <button className='a' onClick={() => this.setState({cal:this.state.cal +'2'})}>2</button>
      <button className='a' onClick={() => this.setState({cal:this.state.cal +'1'})}>1</button>
      <button className='a' onClick={this.Equal}>=</button><br></br>
      <button className='a' onClick={() => this.setState({cal:this.state.cal +'0'})}>0</button>
      <button className='a' onClick={(event) => this.add('3')}>*</button>
      <button className='a' onClick={(event) => this.add('4')}>/</button>
      <button className='a' onClick={(event) => this.add('2')}>-</button>
     
      
    </div>
    </div>
    </div>
    </div>

    
  );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator cal={0}></Calculator>
      </div>
    );
  }
}

export default App;

