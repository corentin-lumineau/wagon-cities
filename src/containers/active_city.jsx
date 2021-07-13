import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {

  render() {

    if(!this.props.activeCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      )
    }

    const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;

    return(
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.adress}</p>
        <img src={url} width="100%" />
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  };
}

export default connect(mapReduxStateToProps)(ActiveCity);

