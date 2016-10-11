import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  PushNotificationIOS,
  Alert,
} from 'react-native';

import styles from '../styles/styles.ios';
import Dimensions from 'Dimensions';

var Modal = require('react-native-modalbox');
const events = require('../events.js').default;
var modalWindow;
var WIDTH = Dimensions.get('window').width;

class EventItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor='#aaaaaa'
        onPress={this.props.onPress}
        style={[styles.eventItem, {backgroundColor: this.props.bgColor}]}
      >
        <View style={{flex:1, flexDirection: 'row'}}>
          <View style={{flex: 0.7, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.eventItemText}>{this.props.event.name}</Text>
            <Text style={styles.eventItemText}>Dnes ve {this.props.event.time}</Text>
          </View>
          <Text style={{flex: 0.3, textAlign: 'right'}}>GHI</Text>
        </View>
    </TouchableHighlight>
  );}
};

class EventsScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTime: 10,
    }
  }

  componentWillMount() {
    this.props.bg();
  }

  isTimeSelected(time) {
    if (time === this.state.selectedTime) {
      return {backgroundColor: 'blue'};
    } else {
      return null;
    }
  }

  render() {
    const backgroundColors = [ '#e49c42', '#be8237', '#98672a', '#6f4c1e' ];
    const d = new Date();

    return (
      <ScrollView style={localStyles.container}>
        {
          events.filter((event) => {return event['weekdays'].includes(d.getDay());})
              .map((event, index) => (
            <EventItem
              key={index}
              bgColor={backgroundColors[index % 4]}
              event={event}
              onPress={() => {this.refs.modal2.open(event);}}
            />
          ))
        }
        <Modal
          swipeThreshold={10}
          swipeToClose={true}
          backdrop={true}
          style={localStyles.eventModal}
          position='top'
          ref='modal2'>
          <Image
            resizeMode='cover'
            source={require('../images/animals/medvedKamcatsky/image00.png')}
            style={{width: WIDTH, height: 120 }}
          />
          <Text style={{fontSize: 16, paddingBottom: 20, paddingTop: 20, color: 'white'}}>
            Nullam fringilla est arcu, at interdum nulla aliquet maximus. Maecenas et lobortis libero, imperdiet porttitor nibh. Maecenas ac porttitor purus, quis luctus est. Aliquam quis lectus ac risus vehicula accumsan ac sit amet urna. Duis sit amet vestibulum elit. Aenean dignissim dolor ipsum. Pellentesque erat ex, aliquam ut viverra ac, efficitur at urna. Vivamus cursus nec dolor nec lobortis.
          </Text>
          <Text style={{fontSize: 16, width: WIDTH, textAlign: 'center', paddingBottom: 20, paddingTop: 20, color: 'white'}}>
            Chcete být upozorněni na začátek krmení?
          </Text>

          <View style={{height: 50, flexDirection: 'row'}}>
            <TouchableHighlight underlayColor="#aaaaaa" onPress={() => {this.setState({selectedTime: 5});}} style={[localStyles.button, this.isTimeSelected(5)]}>
              <Text style={localStyles.buttonText}> 5 minut </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#aaaaaa" onPress={() => {this.setState({selectedTime: 10});}} style={[localStyles.button, this.isTimeSelected(10)]}>
              <Text style={localStyles.buttonText}> 10 minut </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#aaaaaa" onPress={() => {this.setState({selectedTime: 15});}} style={[localStyles.button, this.isTimeSelected(15)]}>
              <Text style={localStyles.buttonText}> 15 minut </Text>
            </TouchableHighlight>
          </View>

          <View style={{height: 50, flexDirection: 'row', marginTop: 30, backgroundColor: '#BE8237'}}>
            <TouchableHighlight
            underlayColor='#aaaaaa'
            onPress={() => {
                PushNotificationIOS.getScheduledLocalNotifications(
                  (notif) => {
                    Alert.alert(JSON.stringify(notif));
                  }
                );

                PushNotificationIOS.scheduleLocalNotification(
                {
                  alertBody: 'Hello',
                  fireDate: new Date(Date.now() + (30 * 1000)).getTime()
                }
              );
              PushNotificationIOS.addEventListener(
                'localNotification',
                (notif) => {
                  Alert.alert(JSON.stringify(notif));
                }
              );
              PushNotificationIOS.checkPermissions((permissions) => {
                if (permissions.alert == 0) {
                  PushNotificationIOS.requestPermissions({alert: true}) ;
                }
              });
              this.refs.modal2.close();
            }} style={localStyles.button}>
            <Text style={localStyles.buttonText}>Ano</Text>
            </TouchableHighlight>

            <TouchableHighlight
            underlayColor='#aaaaaa'
            onPress={() => {
              this.refs.modal2.close();
            }} style={localStyles.button}>
            <Text style={[localStyles.buttonText, {backgroundColor: 'white'}]}>Ne</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eventItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  eventModal: {
    width: WIDTH,
    backgroundColor: '#1d1b1bAA',
  },
  button: {
    flex: 1,
    padding: 15,
    height: 50,
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '300',
    textAlign: 'center',
    color: 'black',
  }
});

module.exports = EventsScene;
