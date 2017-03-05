/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
 class loginView extends Component {
   
  render() {
    return (
      <View style={styles.container}>
          <Image />
          <TextInput/>
          <TextInput/>  
          <View>
              <Text>登陆</Text>
              <Text></Text>
          </View>
          <View>
              <Text>无法登陆</Text>
              <Text>新用户</Text>
          </View>
          <View>
              <Text>其它登陆</Text>
              <Image />
              <Image />
              <Image />
          </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flex:1,
    backgroundColor:'#ddd'
  }
});

module.exports = loginView
