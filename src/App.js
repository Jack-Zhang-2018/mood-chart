import React, { Component } from 'react';
import DropDown from './components/dropdown'
import {form, input} from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {


    }
  }
  setOptions(array){
    let options = array.map((element)=> {
      return <option value={element}>{element}</option>
      })
    return options
  }

  handleSubmit(event){
    console.log("handleSubmit is running");
    console.log(event)
  }

  itemSelected(event){
    console.log(event.target.value)
  }

  render() {
    return (
      <form onSubmit = {()=>this.handleSubmit()}>

              <DropDown Name = {"Choose Your Mood For Today: "} options = {this.setOptions([1,2,3,4,5,6,7])} changeHandler={this.itemSelected.bind(this)}/><br/>
              <DropDown Name = {"What Was Your Coffee Intake Today: "} options = {this.setOptions(["0 cups", "1/2 cup", "1 cup", "1 1/2 cups", "2 cups"])}/><br/>
              <DropDown Name = {"How Many Hours of Sleep Did You Get: "} options = {this.setOptions(["4 hours", "5 hours", "6 hours", "7 hours"])}/><br/>
              <input type="submit" value="Submit"/>

      </form>
    );
  }
}


export default App;
