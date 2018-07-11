import React, { Component } from 'react';
import {
  fieldset,
  select
} from 'react-bootstrap'

class DropDown extends Component {

    render() {
        return (
            <fieldset>
                <div class="form-group">
                  <label for={this.props.Name}>{this.props.Name}</label><br/>
                  <select onChange={this.props.changeHandler} class="form-control" id="exampleSelect1">
                      {this.props.options}
                  </select>
                </div>
            </fieldset>
        );
    }
}

export default DropDown;
