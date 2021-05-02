import React from 'react';
import axios from 'axios';



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuary: '',
      data: '',
      view: false,
      p1: '',
      p2: '',
      c: ''

    };
  }
  getSite = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=pk.a2a65c09040e2f28766f692614e18035&q=${this.state.searchQuary}&format=json`;
    const request = await axios.get(url);
    this.setState({

      data: request.data[0],
      view: true
    });
  };

  updateSearchQuary = (event) => {
    this.setState({
      searchQuary: event.target.value
    });


  }
  render() {
    return (
      <div>
        <div class='header'>
          <h1>City Explorer</h1><h4>Enter a location below to learn about the weather, resturants, movies, and more!</h4>

        </div>

        <form onSubmit={this.getSite}>
          <label for='city name'>
            where would you like to explore?
          </label>
          <br></br>
          <input
            onChange={this.updateSearchQuary} type='text' placeholder='city name' />


          <button
            type='submit' value='get site' >Explore!</button>


          {this.state.data ? <p class='p1'> Welcome To {this.state.data.display_name}</p> : ''}

          {this.state.data ? <p>{this.state.data.display_name}  {this.state.data.lat}  {this.state.data.lon}</p> : ''}

          {this.state.data ? <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} /> : ''}
        </form>
        <p> &copy; Code Fellows</p>

      </div >
    );
  }
}






export default App;

