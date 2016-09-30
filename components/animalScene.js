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
  }

  render() {
    const AnimalDetail = animals[this.props.animal].content;

    // @fix: styles should be defined elsewhere
    return (
      <TabBarIOS
          unselectedTintColor="yellow"
          tintColor="white"
          barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Pro dospělé"
          selected={this.state.selectedTab === 'adultTab'}
        onPress={() => {this.setState({selectedTab: 'adultTab'});}}
        >
          <AnimalDetail bg={this.props.bg}/>
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
