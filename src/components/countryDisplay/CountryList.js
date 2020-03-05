import React from 'react';
import CountryItem from './CountryItem';
import short from 'short-uuid';

class CountryList extends React.Component {
  renderCountries() {
    const countries = this.props.queriedCountries;
    return countries.map(country => {
      return <CountryItem key={short.uuid()} country={country} />;
    });
  }

  render() {
    return <div className="ui cards">{this.renderCountries()}</div>;
  }
}

export default CountryList;
