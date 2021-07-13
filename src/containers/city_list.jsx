import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
import City from './city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  renderList = () => {
    return (
      this.props.cities.map((city, index) => {
        return (
          <City city={city} key={city.name} index={index} />
        );
      })
    );
  }


  render() {
    return (
      <div className="list-group-item">
        {this.renderList()}
      </div>
    );
  }
}

function mapDispatchToProps(dispacth) {
  return bindActionCreators(
    { setCities },
    dispacth
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
