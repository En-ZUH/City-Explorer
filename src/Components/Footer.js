import React from 'react';
import '../index.css';
import love from './asset/love.png';


export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <p class='Footer'> &copy; Enas_Zuhair <img src={love} alt='img' className='img'></img></p>


      </div >
    );
  }
}
