import React from 'react';
import {TabBarIOS} from 'react-native';

import AnimalNeighbourScene from '../components/animalNeighbourScene';
import animals from '../animals';
import * as scenes from '../scenes';

class AnimalScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'adultTab'
    }
  }

  componentWillMount() {
    this.props.setLastAnimal(this.props.animal);

    this.setState({selectedTab: this.props.readerLevel + 'Tab'});
  }

  render() {
    const AnimalDetailAdult = animals[this.props.animal].contentAdult;
    const AnimalDetailChild = animals[this.props.animal].contentChild;

    // @fix: styles should be defined elsewhere
    return (
      <TabBarIOS
          unselectedTintColor="yellow"
          tintColor="white"
          barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Pro dospělé"
          selected={this.state.selectedTab === 'adultTab'}
          onPress={() => {
            this.setState({selectedTab: 'adultTab'});
            this.props.setReaderLevel('adult');
          }}
        >
          <AnimalDetailAdult bg={this.props.bg}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Pro děti"
          selected={this.state.selectedTab === 'childTab'}
          onPress={() => {
            this.setState({selectedTab: 'childTab'});
            this.props.setReaderLevel('child');
          }}
        >
          <AnimalDetailChild bg={this.props.bg}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="QR kód"
          icon={require('../images/icon/qr.png')}
          selected={false}
          onPress={() => {
            this.props.navigator.replace({
              id: scenes.QR_READER,
              title: 'Načíst QR kód',
            })
            this.setState({selectedTab: 'neighbourTab'});}}
        >
          <AnimalNeighbourScene navigator={this.props.navigator} animal={this.props.animal} bg={this.props.bg}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Sousedi"
          icon={require('../images/icon/neighb.png')}
          selected={this.state.selectedTab === 'neighbourTab'}
          onPress={() => {this.setState({selectedTab: 'neighbourTab'});}}
        >
          <AnimalNeighbourScene navigator={this.props.navigator} animal={this.props.animal} bg={this.props.bg}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};

module.exports = AnimalScene;
