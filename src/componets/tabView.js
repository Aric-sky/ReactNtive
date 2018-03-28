
import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';


export default class TabView extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      
    }
  }

  render() {
    return (
    <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={1}
      renderTabBar={() => <DefaultTabBar />}
    >
      <Text tabLabel='Tab #1'>My</Text>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
    </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({


});


module.exports = TabView;