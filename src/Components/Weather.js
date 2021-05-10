import React, { Component } from 'react';

export class Weather1 extends Component {
  render() {
    console.log(this.props.weath);
    return (
      this.props.weath.map(value1 => { // to target the date and description for each obj
        return (<div>
          <p>{value1.date}</p>
          <p>{value1.description}</p>
        </div>
        );
      })
    );
  }

}
export default Weather1;
