import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AnimalScene from '../components/animalScene';
import {setLastAnimal, setReaderLevel} from '../actions'

const mapStateToProps = (state) => {
  return {
    configuration: state.configuration,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setLastAnimal,
    setReaderLevel,
  }, dispatch);
}

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <AnimalScene
          animal={this.props.animal}
          bg={this.props.bg}
          navigator={this.props.navigator}
          {...this.props.configuration}
          setLastAnimal={this.props.setLastAnimal}
          setReaderLevel={this.props.setReaderLevel}
        />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)
