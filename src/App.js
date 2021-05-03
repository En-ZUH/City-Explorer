import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Footer from './Components/Footer';




// import Header from './Components/Header';
// import Main from './Components/Main';
// import Footer from './Components/Footer';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>

    );
  }
}



