import React from 'react';

export default class Dim extends React.Component {
  render() {
    return (
      <div>
        <p class='p1'> Welcome To {this.props.data.display_name} </p>

        <p>{this.props.data.display_name} Located at {this.props.data.data.lat} by{this.props.data.data.lat}
        </p>
      </div>
    );
  }
}
