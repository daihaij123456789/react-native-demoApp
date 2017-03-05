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
  Platform,   //判断系统
  Navigator,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/DHhome')
var Shop = require('../Shop/DHshop')
var Mine = require('../Mine/DHmine')
var More = require('../More/DHmore')
var Main =React.createClass({
  getInitialState(){
    return{
      selectedTab:'home',
    }    
  },
  render() {
    return (
      <TabNavigator>
        {/* 首页*/}
        
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            renderIcon={() => <Image source={{uri:'icon_tabbar_merchant'}} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
            onPress={() => this.setState({ selectedTab: 'home' })}
           >
            <Navigator 
              initialRoute = {{name:'首页', component:Home}}
              configureScene={() =>{
                return Navigator.SceneConfigs.PushFromRight
              }}
              renderScene={
                (route,navigator)=>{
                  let Compenton = route.component;
                  return <Compenton {...route.passProps} navigator={navigator}/>
                }
              }
              />
          </TabNavigator.Item>
        {/* 商店*/}
       
          <TabNavigator.Item
            selected={this.state.selectedTab === 'shop'}
            title="商店"
            renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
            onPress={() => this.setState({ selectedTab: 'shop' })}
           >
            <Navigator 
              initialRoute = {{name:'商店', component:Shop}}
              configureScene={() =>{
                return Navigator.SceneConfigs.PushFromRight
              }}
              renderScene={
                (route,navigator)=>{
                  let Compenton = route.component;
                  return <Compenton {...route.passProps} navigator={navigator}/>
                }
              }
              />
          </TabNavigator.Item>
        {/* 我的*/}
        
          <TabNavigator.Item
            selected={this.state.selectedTab === 'mine'}
            title="我的"
            renderIcon={() => <Image source={{uri:'icon_tabbar_mine'}} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
            onPress={() => this.setState({ selectedTab: 'mine' })}
           >
           <Navigator 
              initialRoute = {{name:'我的', component:Mine}}
              configureScene={() =>{
                return Navigator.SceneConfigs.PushFromRight
              }}
              renderScene={
                (route,navigator)=>{
                  let Compenton = route.component;
                  return <Compenton {...route.passProps} navigator={navigator}/>
                }
              }
              />
          </TabNavigator.Item>
        {/* 更多*/}
        
          <TabNavigator.Item
            selected={this.state.selectedTab === 'more'}
            title="更多"
            renderIcon={() => <Image source={{uri:'icon_tabbar_misc'}} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}
            onPress={() => this.setState({ selectedTab: 'more' })}>
            <Navigator 
              initialRoute = {{name:'更多', component:More}}
              configureScene={() =>{
                return Navigator.SceneConfigs.PushFromRight
              }}
              renderScene={
                (route,navigator)=>{
                  let Compenton = route.component;
                  return <Compenton {...route.passProps} navigator={navigator}/>
                }
              }
              />
          </TabNavigator.Item>

        </TabNavigator>
    );
  }
}) 


const styles = StyleSheet.create({
  iconStyle:{
    width:Platform.os==='ios' ? 30 : 25,
    height:Platform.os==='ios' ? 30 : 25
  }
});

module.exports=Main
