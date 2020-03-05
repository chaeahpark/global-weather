import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import openweathermap from '../../apis/openweathermap';
import Modal from 'react-modal';
import modalStyle from '../../styles/modalStyle';
import '../../styles/countryItem.css';

Modal.setAppElement('#root');

class CountryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, weatherData: {} };
  }

  //when a user click the card
  onhandleClick = () => {
    this.openModal();
    this.getWeather();
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  // this.props.country.latlng[1]
  getWeather = async () => {
    try {
      const response = await openweathermap.get('/data/2.5/weather', {
        params: {
          appid: 'fcab4ff532a5db32c9fbceb08c5b7e86',
          lat: this.props.country.latlng[0],
          lon: this.props.country.latlng[1]
        }
      });
      const { weather, main } = response.data;
      let weatherData = {
        icon: this._getIcon(weather[0].id),
        description: weather[0].description,
        celsius: main.temp,
        fahrenheit: this._toFahrenheit(main.temp)
      };

      this.setState({ weatherData: weatherData });
    } catch (err) {
      console.log('ERROR: ' + err);
    }
  };

  _getIcon = id => {
    if (id >= 200 && id < 300) {
      return 'RAIN';
    } else if (id >= 300 && id < 500) {
      return 'SLEET';
    } else if (id >= 500 && id < 600) {
      return 'RAIN';
    } else if (id >= 600 && id < 700) {
      return 'SNOW';
    } else if (id >= 700 && id < 800) {
      return 'FOG';
    } else if (id === 800) {
      return 'CLEAR_DAY';
    } else if (id >= 801 && id < 803) {
      return 'PARTLY_CLOUDY_DAY';
    } else if (id >= 802 && id < 900) {
      return 'CLOUDY';
    } else if (id === 905 || (id >= 951 && id <= 956)) {
      return 'WIND';
    } else if (id >= 900 && id < 1000) {
      return 'RAIN';
    }
  };

  _toFahrenheit = c => {
    return (c * 9) / 5 + 32;
  };

  renderWeather = () => {
    return (
      <Modal
        isOpen={this.state.showModal}
        onRequestClose={this.closeModal}
        style={modalStyle}
      >
        <h2 className="ui header">Weather in {this.props.country.name}</h2>
        <ReactAnimatedWeather
          icon={this.state.weatherData.icon}
          color={'black'}
        />
        <p>{this.state.weatherData.description}</p>
        <p>{this.state.weatherData.celsius}</p>
        <button className="mini ui button negative" onClick={this.closeModal}>
          X
        </button>
      </Modal>
    );
  };

  renderCountry = () => {
    let {
      name,
      capital,
      languages,
      population,
      alpha2Code
    } = this.props.country;

    population = population.toLocaleString();

    return (
      <div onClick={this.onhandleClick}>
        <div className="header">{name.toUpperCase()}</div>
        <img
          className="ui centered mini image"
          src={`https://www.countryflags.io/${alpha2Code}/flat/64.png`}
          alt={name}
        />
        <div className="description">Capital: {capital}</div>
        <div className="description">Language: {languages[0]}</div>
        <div className="description">Population: {population}</div>
      </div>
    );
  };

  render() {
    return (
      <div className="card">
        {this.renderCountry()}
        <div>{this.renderWeather()}</div>
      </div>
    );
  }
}

export default CountryItem;
