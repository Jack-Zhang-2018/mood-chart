import React, { Component } from 'react';
import DropDown from './components/dropdown'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
          <DropDown Name = {"Choose Your Mood For Today: "}/>
          <DropDown Name = {"What Was Your Coffee Intake Today: "}/>
          <DropDown Name = {"How Many Hours of Sleep Did You Get: "}/>
      </div>
    );
  }
}

export default App;
