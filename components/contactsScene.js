import React from 'react';
import {
  View,
  Text,
} from 'react-native';

class ContactsScene extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.props.bg();
    }

    render() {
      return (
        <View><Text>Kontaktne informacie</Text></View>
      );
    }
};

module.exports = ContactsScene;
