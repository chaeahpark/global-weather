import React from 'react';

class CapitalBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCapitalAtoZ: false
    };
  }

  //handle button click
  onBtnClick = () => {
    if (this.state.isCapitalAtoZ === false) {
      this.props.arrangeCapitalAtoZ();
      this.setState({ isCapitalAtoZ: true });
    } else {
      this.props.arrangeCapitalZtoA();
      this.setState({ isCapitalAtoZ: false });
    }
  };

  render() {
    return (
      <button className="tiny ui teal basic button" onClick={this.onBtnClick}>
        Capital
      </button>
    );
  }
}

export default CapitalBtn;
