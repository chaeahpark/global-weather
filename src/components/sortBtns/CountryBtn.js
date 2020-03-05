import React from 'react';

class CountryBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCountryAtoZ: true
    };
  }

  //handle button click
  onBtnClick = () => {
    if (this.state.isCountryAtoZ === false) {
      this.props.arrangeCountryAtoZ();
      this.setState({ isCountryAtoZ: true });
    } else {
      this.props.arrangeCountryZtoA();
      this.setState({ isCountryAtoZ: false });
    }
  };

  render() {
    return (
      <button className="tiny ui teal basic button" onClick={this.onBtnClick}>
        Country
      </button>
    );
  }
}

export default CountryBtn;
