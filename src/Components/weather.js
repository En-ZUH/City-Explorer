import React from 'react';

export default class weather extends React.Component {
  render() {
    // this.props.dataWeather.map(data => {
    return (
      <div>
        <p>{this.props.dataWeather}</p>
        {/* <p>{data.description}</p> */}
      </div>
    );

  }
}
