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
      <div className="sortBtn">
        <button className="mini ui teal basic button" onClick={this.onBtnClick}>
          Country
        </button>
      </div>
    );
  }
}

export default CountryBtn;
