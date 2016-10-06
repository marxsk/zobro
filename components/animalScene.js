import React from 'react';
import {TabBarIOS} from 'react-native';

import AnimalNeighbourScene from '../components/animalNeighbourScene';
import animals from '../animals';

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
          title="Sousedi"
          selected={this.state.selectedTab === 'neighbourTab'}
          onPress={() => {this.setState({selectedTab: 'neighbourTab'});}}
        >
          <AnimalNeighbourScene navigator={this.props.navigator} animal={this.props.animal} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};

module.exports = AnimalScene;
