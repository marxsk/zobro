import React from 'react';
import {connect} from 'react-redux';
import MainMenuScene from '../components/mainMenuScene';

const mapStateToProps = (state) => {
  return {
    configuration: state.configuration,
  }
}

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <MainMenuScene navigator={this.props.navigator} {...this.props.configuration} />
      );
    }
}

export default connect(mapStateToProps)(MainMenu)
