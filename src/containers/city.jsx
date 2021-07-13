import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {

  handleClick = () => {
    this.props.setActiveCity(this.props.city);
    console.log(this.props);
  }

  render() {
    return(
      <div className="cities" onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispacth) {
  return bindActionCreators(
    { setActiveCity },
    dispacth
  );
}

export default connect(null, mapDispatchToProps)(City);
