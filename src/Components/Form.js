import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Img from './Img';
import '../index.css';



export default class form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Location: '',
      searchQuary: '',
      data: [],
      view: false,
      not_valid: true,
      imageSrc: '',
      env1: process.env.REACT_APP_ENV

    };
  }


  getSite = async (event) => {
    try {
      event.preventDefault();
      const url = `${this.state.env1}key=pk.a2a65c09040e2f28766f692614e18035&q=${this.state.searchQuary}&format=json`;
      const request = await axios.get(url);
      const lat = request.data[0].lat;
      const lon = request.data[0].lon;
      this.setState({

        data: request.data[0],
        imageSrc: `https://maps.locationiq.com/v3/staticmap?key=pk.a2a65c09040e2f28766f692614e18035&center=${lat},${lon}&zoom=10&size=1000x300`
      }


      );
    }
    catch {
      this.setState({
        not_valid: false,
      });

    }
  }
  updateLoc = (event) => {
    this.setState({
      searchQuary: event.target.value,
    });

  };

  refresh = () => {
    window.location.reload();

  };


  render() {

    if (this.state.not_valid) {
      return (
        <>
          <div>
            <Form onSubmit={this.getSite}>

              <Form.Group  >
                <Form.Label> where would you like to explore?</Form.Label>
                <Form.Control type="text" placeholder="city name" onChange={this.updateLoc} />
              </Form.Group>

              <Button variant='primary' type='submit' >Explore!</Button>


            </Form>



          </div>
          <>
            <Img imageSrc1={this.state.imageSrc} lat={this.state.data.lat} lon={this.state.data.lon} display_name={this.state.data.display_name} />
          </>
        </>
      );
      // console.log('done');
    }
    else {
      return (
        <div>
          <Form>

            <Form.Group  >
              <h4> please Enter a valid data </h4>
            </Form.Group>

            <Button onSubmit={this.refresh} variant='primary' type='submit'>Try again</Button>

          </Form>
        </div>
      );


    }

  }
}





