
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  ScrollView
} from 'react-native';

import Home from './src/pages/home'
import User from './src/pages/user'
import DataBase from './src/pages/dataBase'

import Resolution from "./Resolution";
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';

// console.ignoredYellowBox = ['Remote debugger'];


export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="home" size={22} color="#666"/>}
          renderSelectedIcon={() => <Icon name="home" size={22} color="#3496f0"/>}
          badgeText="1"
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'others'}
          title="others"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="database" size={22} color="#666"/>}
          renderSelectedIcon={() => <Icon name="database" size={22} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'others'})}>
          <DataBase/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="user" size={22} color="#666"/>}
          renderSelectedIcon={() => <Icon name="user" size={22} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'profile'})}>
          <User/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});
