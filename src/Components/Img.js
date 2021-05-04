import React from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import '../index.css';
import Form from 'react-bootstrap/Form';

export default class Img extends React.Component {
  render() {
    return (
      <div><>
        <Form onSubmit={this.handleSubmit}>

          <p class='p1'>{this.props.w} {this.props.display_name}</p>

          <p>  {this.props.display_name} {this.props.i} {this.props.lat} {this.props.by}  {this.props.lon}</p>
        </Form>

        <Image src={this.props.imageSrc1} fluid />

      </>
      </div >
    );
  }
}
