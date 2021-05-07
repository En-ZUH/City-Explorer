import React from 'react';

export default class Movie extends React.Component {
  render() {
    return (
      this.props.mov.map(value2 => { // to target the date and description for each obj
        return (
          <div>
            <p>{value2.title}</p>
            <p>{value2.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${value2.movieImage}`} alt='' width={'300px'} width={'200px'} />

          </div>
        );
      })

    );
  }
}


