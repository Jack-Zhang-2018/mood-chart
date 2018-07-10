import React, { Component } from 'react';


class DropDown extends Component {

  render() {
    return (
      <form>
        <fieldset>
            <div class="form-group">
              <label for={this.props.Name}>{this.props.Name}</label><br/>
              <select class="form-control" id="exampleSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </select>
            </div>
        </fieldset>
      </form>
    );
  }
}

export default DropDown;
