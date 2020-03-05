import React from 'react';
import CountryItem from './CountryItem';
import short from 'short-uuid';
import '../../styles/countryList.css';

class CountryList extends React.Component {
  renderCountries() {
    const countries = this.props.queriedCountries;
    return countries.map(country => {
      return (
        <div className="column link">
          <div className="ui segment center aligned grow">
            <CountryItem key={short.uuid()} country={country} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui five column doubling grid">
        {this.renderCountries()}
      </div>
    );
  }
}

export default CountryList;
