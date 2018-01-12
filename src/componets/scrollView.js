
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class Scroll extends Component{
 
  constructor(props, context) {
    super(props, context);
    this.state = {
      
    }
  }

  render(){
    return(
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      >
        {this.renderChild()}
      </ScrollView>
    )
  }

  renderChild(){
    var childView = [];
    var colors = ['red', 'green', 'blue', 'yellow', 'purple'];

    for(var i=0;i<colors.length; i++){
      childView.push(
        <View key={i} style={{width:750, backgroundColor:colors[i], height: 300}}>
          <Text>{i}</Text>
        </View>
      )
    }
    return childView;

  }




}



