import React from 'react';
import SearchBar from './SearchBar';
import CapitalBtn from './sortBtns/CapitalBtn';
import CountryBtn from './sortBtns/CountryBtn';
import PopulationBtn from './sortBtns/PopulationBtn';
import CountryList from './countryDisplay/CountryList';
import restcountries from '../apis/restcountries';
import '../styles/app.css';

// Refactoring
// 1. change the class component to functional one.
// -----------------------------------------------
// 2. States:
// 2.1. queiredCountreis state is used
//      in Components -> CountryList, CapitalBtn, CountryBtn, PopulationBtn
// 2.2. countries state is to get queriedCountries
// 2.3. query state is used to get queriedCountries
// -----------------------------------------------
// 3.Functions:
// 3.1 App: getCountries,
// 3.2 SearchBar: handleQueryChange, filterQueriedCountries(?)
// 3.3 CountryBtn: arrangeCountryAtoZ, arrangeCountryZtoA
// 3.4 CapitalBtn: arrangeCapitalAtoZ, arrangeCapitalZtoA
// 3.5 Population: arrangePopulation0to9, arrangePopulation9to0
// -----------------------------------------------
// 4.CountryItem Components

class App extends React.Component {
  state = {
    countries: [],
    query: '',
    queriedCountries: []
  };

  componentDidMount() {
    this.getCountries();
  }

  getCountries = async () => {
    const response = await restcountries.get('/rest/v2/all');
    const countries = await response.data;
    let countryList = countries.map(country => {
      let {
        name,
        alpha2Code,
        capital,
        languages,
        population,
        latlng
      } = country;

      // extact languages
      languages = languages.map(lang => {
        return lang.name;
      });

      return {
        name,
        alpha2Code,
        capital,
        languages,
        population,
        latlng
      };
    });

    this.setState({ countries: countryList, queriedCountries: countryList });
  };

  handleQueryChange = event => {
    let query = event.target.value;

    this.setState({ query: query });
    this.filterQueriedCountries(query);
  };

  filterQueriedCountries = query => {
    const countries = this.state.countries;

    if (query === '') {
      this.setState({ queriedCountries: countries });
    } else {
      const filteredCountries = countries.filter(country => {
        return (
          country.name.toUpperCase().includes(query.toUpperCase()) === true
        );
      });
      this.setState({ queriedCountries: filteredCountries });
    }
  };

  arrangeCountryAtoZ = () => {
    let queriedCountries = this.state.queriedCountries;

    queriedCountries = queriedCountries.sort((a, b) => {
      let countryA = a.name;
      let countryB = b.name;

      if (countryA < countryB) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({ queriedCountries: queriedCountries });
  };

  arrangeCountryZtoA = () => {
    let queriedCountries = this.state.queriedCountries;

    queriedCountries = queriedCountries.sort((a, b) => {
      let countryA = a.name;
      let countryB = b.name;

      if (countryB < countryA) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({ queriedCountries: queriedCountries });
  };

  arrangeCapitalAtoZ = () => {
    let queriedCountries = this.state.queriedCountries;

    queriedCountries = queriedCountries.sort((a, b) => {
      let countryA = a.capital;
      let countryB = b.capital;

      if (countryA < countryB) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({ queriedCountries: queriedCountries });
  };

  arrangeCapitalZtoA = () => {
    let queriedCountries = this.state.queriedCountries;

    queriedCountries = queriedCountries.sort((a, b) => {
      let countryA = a.capital;
      let countryB = b.capital;

      if (countryB < countryA) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({ queriedCountries: queriedCountries });
  };

  arrangePopulation0to9 = () => {
    let queriedCountries = this.state.queriedCountries;

    queriedCountries = queriedCountries.sort((a, b) => {
      let countryA = a.population;
      let countryB = b.population;

      if (countryA < countryB) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({ queriedCountries: queriedCountries });
  };

  arrangePopulation9to0 = () => {
    let queriedCountries = this.state.queriedCountries;

    queriedCountries = queriedCountries.sort((a, b) => {
      let countryA = a.population;
      let countryB = b.population;

      if (countryB < countryA) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({ queriedCountries: queriedCountries });
  };

  render() {
    return (
      <div className="ui container">
        <h1 className="ui center aligned header">
          World <i className="fas fa-globe-asia"></i> Weather
        </h1>

        <div className="searchbar">
          <SearchBar
            query={this.state.query}
            handleQueryChange={this.handleQueryChange}
          />
        </div>
        <div className="sortBtns">
          <div className="sortBtn">Sort by: </div>
          <CountryBtn
            arrangeCountryAtoZ={this.arrangeCountryAtoZ}
            arrangeCountryZtoA={this.arrangeCountryZtoA}
          />
          <CapitalBtn
            arrangeCapitalAtoZ={this.arrangeCapitalAtoZ}
            arrangeCapitalZtoA={this.arrangeCapitalZtoA}
          />
          <PopulationBtn
            arrangePopulation0to9={this.arrangePopulation0to9}
            arrangePopulation9to0={this.arrangePopulation9to0}
          />
        </div>
        <div className="countryList">
          <CountryList queriedCountries={this.state.queriedCountries} />
        </div>
      </div>
    );
  }
}

export default App;
