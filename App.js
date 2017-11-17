/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
   AppRegistry,
   Text,
   View,
   StyleSheet,
   Image,
   Button,
   ScrollView,
}  from 'react-native';

import { 
	     DrawerNavigator ,
         DrawerItems ,
         } from 'react-navigation';

class MyHomeScreen extends React.Component {

  static navigationOptions = {
  	//{ focused: boolean, tintColor: string }
    drawerLabel: 'Home',
    //{ focused: boolean, tintColor: string }
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./img/icon_1.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title=" MyHomeScreen ----> open drawer"
      />
    );
  }
}


const MyNotificationsScreen = ({navigation}) => (
    <View>
        <Button
          onPress={() => navigation.navigate('DrawerOpen')}
          title="MyNotificationsScreen ---> open drawer  "
        />
        <Text></Text>
	</View>
);


MyNotificationsScreen.navigationOptions = {
   drawerLabel: 'Notifications',
    drawerIcon: () => (
    	<View>
            <Image
                source={require('./img/icon_1.png')}
                style={styles.icon}
            />
    	</View>
      
    ),
};


const MyFirstProject = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
         screen: MyNotificationsScreen,
    },
},{
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
      initialRouteName: 'Home', // 默认页面组件
      activeItemKey : 'Notifications',
      labelStyle : {//标签样式
           // color : 'red',
           height : 30,
      },
      activeTintColor: 'white',  // 选中文字颜色
      activeBackgroundColor: '#ff8500', // 选中背景颜色
      inactiveTintColor: '#666',  // 未选中文字颜色
      inactiveBackgroundColor: '#fff', // 未选中背景颜色
      style: {  // 样式
         marginVertical: 0, 
      },
      //没有作用
      onItemPress : (route) => {
      	 console.log('-------->' + JSON.stringify(route))
      },
      
   },

   contentComponent: props => {
        console.log('contentComponent');
        console.log(props);
        return (
            <ScrollView>
                <View>
                    <View style={{paddingVertical: 20, paddingHorizontal: 15, backgroundColor:'#000'}}>
                        <Text style={{color:'#FFF'}}>ser Name</Text>
                    </View>
                    <DrawerItems {...props} />
                </View>
            </ScrollView>
        )
    },
});

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

AppRegistry.registerComponent('MyFirstProject' , () => MyFirstProject );
