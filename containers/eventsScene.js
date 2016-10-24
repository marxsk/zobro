import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import EventScene from '../components/eventScene';
import {addNotification, removeNotification} from '../actions';
import {Alert} from 'react-native';

const mapStateToProps = (state) => {
  return {
    configuration: state.configuration,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addNotification,
    removeNotification,
  }, dispatch);
}

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <EventScene
          bg={this.props.bg}
          navigator={this.props.navigator}
          {...this.props.configuration}
          addNotification={this.props.addNotification}
          removeNotification={this.props.removeNotification}
        />
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)
