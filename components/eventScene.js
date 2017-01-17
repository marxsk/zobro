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

import styles from '../styles/styles';
import Dimensions from 'Dimensions';
import Modal from 'react-native-modalbox';
import events from '../events.js';

var modalWindow;
var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class EventItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.event.id == 'nothing') {
      return <View style={[styles.eventItem, {flex:1, flexDirection: 'row', backgroundColor: 'red'}]}>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.eventItemText}>Je nám líto,</Text>
          <Text style={styles.eventItemTextTime}>dnes už jsme nakrmení.</Text>
        </View>
      </View>
    }

    return (
      <TouchableHighlight
        underlayColor='#aaaaaa'
        onPress={this.props.onPress}
        style={[styles.eventItem, {backgroundColor: this.props.bgColor}]}
      >
        <View style={{flex:1, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.eventItemText}>{this.props.event.name}</Text>
            <Text style={styles.eventItemTextTime}>dnes, {this.props.event.time}</Text>
          </View>
        </View>
    </TouchableHighlight>
  );}
};

export default class EventsScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTime: 10,
      selectedEvent: null,
    }
  }

  componentWillMount() {
    this.props.bg();
  }

  isTimeSelected(time) {
    if (time === this.state.selectedTime) {
      return {backgroundColor: '#3cac54'};
    } else {
      return null;
    }
  }

  isEventSubscribed(event) {
    if (this.props.notifications[event.id]) {
      return {backgroundColor: '#3cac54'};
    } else {
      return null;
    }
  }

  isEventNotSubscribed(event) {
    if (!this.props.notifications[event.id]) {
      return {backgroundColor: '#3cac54'};
    } else {
      return null;
    }
  }


  render() {
    const backgroundColors = [
      '#37af54',
      '#2d9946',
      '#267f3b',
      '#20642f',
      '#267f3b',
      '#2d9946',
    ];
    const d = new Date();

    let myEvent = {};
    if (this.state.selectedEvent) {
      myEvent = events.filter((event) => {return event['id'] === this.state.selectedEvent;})[0];
    }

    const filteredEvents = events.filter((event) => {
      const matchingDay = event['weekdays'].includes(d.getDay());

      const eventHour = event['time'].split(":")[0];
      const eventMinutes = event['time'].split(":")[1];
      const SHOW_RUNNING = 30;
      const eventTime = 60 * parseInt(eventHour) + parseInt(eventMinutes) + SHOW_RUNNING
      const currentTime = 60 * d.getHours() + d.getMinutes();

      const startDate = new Date(event.startDate); // include this day
      const endDate = new Date(event.endDate);  // do not include this day

      const result = (
          matchingDay &&
          (eventTime >= currentTime) &&
          (+startDate <= +d) &&
          (+endDate > +d)
        );
      return result;
    });

    const emptyEvent = (filteredEvents.length === 0) ?
      (<EventItem event={{id: 'nothing'}}/>) : null
      ;

    return (
      <ScrollView style={localStyles.container}>
        {
          filteredEvents.map((event, index) => (
            <EventItem
              key={index}
              bgColor={backgroundColors[index % backgroundColors.length]}
              event={event}
              onPress={() => {
                this.setState({selectedEvent: event.id});
                this.refs.modal2.open(event);
              }}
            />
          ))
        }
        {emptyEvent}
        <Modal
          swipeThreshold={10}
          swipeToClose={true}
          backdrop={true}
          style={localStyles.eventModal}
          position='top'
          ref='modal2'
          onRequestClose={() => {}}
          >
        <View style={{backgroundColor: '#1d1b1b', height: 150}}>
          <Image
            resizeMode='contain'
            source={myEvent.thumbnail}
            style={{width: WIDTH, height: 120 }}
          />
          <Text style={{fontSize: 22, paddingBottom: 20, paddingTop: 20, color: 'white', textAlign: 'center'}}>
            {myEvent.place}
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
                this.props.addNotification(myEvent);
/*                PushNotificationIOS.scheduleLocalNotification(
                {
                  alertBody: (myEvent.name + ' ' + myEvent.place),
                  fireDate: new Date(Date.now() + (10 * 1000)).getTime(),
                  userInfo: {id: myEvent.id},
                }
              );
              PushNotificationIOS.addEventListener(
                'localNotification',
                (notif) => {
                  let mNot = events.filter((event) => {return event['id'] === notif._data.id;})[0];

                  Alert.alert(mNot.name + '\n' + mNot.place + '\n' + mNot.time);
                }
              );
*/              this.refs.modal2.close();
            }} style={[localStyles.button, this.isEventSubscribed(myEvent)]}>
            <Text style={localStyles.buttonText}>Ano</Text>
            </TouchableHighlight>

            <TouchableHighlight
            underlayColor='#aaaaaa'
            onPress={() => {
              this.props.removeNotification(myEvent);
              this.refs.modal2.close();
            }} style={[localStyles.button, this.isEventNotSubscribed(myEvent)]}>
            <Text style={localStyles.buttonText}>Ne</Text>
            </TouchableHighlight>
          </View>
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
    backgroundColor: '#1d1b1b',
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

EventsScene.propTypes = {
    bg: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
};
