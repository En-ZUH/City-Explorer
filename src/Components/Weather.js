// import React from 'react';
// export default class Weather extends React.Component {
//   render() {
//     return (
//       this.props.weath.map(data => {
//         return (
//           <div >
//             <p>{data.description}</p>
//             <p>{data.date}</p>
//           </div>
//         );
//       })
//     );
//   }
// }
import React, { Component } from 'react';
export class Weather1 extends Component {
  render() {
    return (
      this.props.weath.map(value1 => {
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
