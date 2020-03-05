import React from 'react';

class PopulationBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopulationAscending: false
    };
  }

  //handle button click
  onBtnClick = () => {
    if (this.state.isPopulationAscending === false) {
      this.props.arrangePopulation0to9();
      this.setState({ isPopulationAscending: true });
    } else {
      this.props.arrangePopulation9to0();
      this.setState({ isPopulationAscending: false });
    }
  };

  render() {
    return (
      <div className="sortBtn">
        <button className="mini ui teal basic button" onClick={this.onBtnClick}>
          Population
        </button>
      </div>
    );
  }
}

export default PopulationBtn;
