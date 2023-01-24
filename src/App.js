import { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Buttons"
import "./styles.css"

class App extends Component{
  constructor (props){
    super(props)

    this.state = {
      counter: 0
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSubtract = this.handleSubtract.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

 
  
  handleAdd(){
    this.setState(state => ({ counter: state.counter + 1}))
  }

  handleSubtract(){
    this.setState(state => ({ counter: state.counter - 1}))    
  }

  handleReset(){
    this.setState({ counter: 0})
  }

  render(){
    return (
       <div className="container">
          <Header/>

          <main>
            <div className="display">
              <span>{this.state.counter}</span>
            </div>

            <div className="buttons-container">
              <Button label="-1" changeCounter={this.handleSubtract} backgroundColor="red"/>
              <Button label="Zerar" changeCounter={this.handleReset}/>
              <Button label="+1" changeCounter={this.handleAdd} backgroundColor="green"/>
            </div>
          </main>

          <Footer/>
      </div>
    );
  }
}

export default App;
