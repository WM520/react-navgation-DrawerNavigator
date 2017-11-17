import React from 'react';
import {
   AppRegistry,
   Text,
   View,
   StyleSheet,
   Image,
   Button,
   ScrollView,
   Dimensions
}  from 'react-native';

import { 
	     DrawerNavigator ,
         DrawerItems ,
         } from 'react-navigation';


var width = Dimensions.get('window').width
var height = Dimensions.get('window').height


const BTCScreen = ({navigation}) => (
    <View style={styles.containter}>
        <Button
          onPress={() => navigation.navigate('DrawerOpen')}
          title="BTC ---> open drawer  "
        />
        <Text></Text>
	</View>
);


BTCScreen.navigationOptions = {
   drawerLabel: 'BTC',
    drawerIcon: () => (
    	<View>
            <Image
                // source={require('./img/icon_1.png')}
                style={styles.icon}
            />
    	</View>
      
    ),
};
const ETHScreen = ({navigation}) => (
    <View style={styles.containter}>
        <Button
          onPress={() => navigation.navigate('DrawerOpen')}
          title="ETH ---> open drawer  "
        />
        <Text></Text>
	</View>
);


ETHScreen.navigationOptions = {
   drawerLabel: 'ETH',
    drawerIcon: () => (
    	<View>
            <Image
                // source={require('./img/icon_1.png')}
                style={styles.icon}
            />
    	</View>
      
    ),
};


const BCCScreen = ({navigation}) => (
    <View style={styles.containter}>
        <Button
          onPress={() => navigation.navigate('DrawerOpen')}
          title="BCC ---> open drawer  "
        />
        <Text></Text>
	</View>
);


BCCScreen.navigationOptions = {
   drawerLabel: 'BCC',
    drawerIcon: () => (
    	<View>
            <Image
                // source={require('./img/icon_1.png')}
                style={styles.icon}
            />
    	</View>
      
    ),
};

const LCCScreen = ({navigation}) => (
    <View style={styles.containter}>
        <Button
          onPress={() => navigation.navigate('DrawerOpen')}
          title="LCC ---> open drawer  "
        />
        <Text></Text>
	</View>
);


LCCScreen.navigationOptions = {
   drawerLabel: 'LCC',
    drawerIcon: () => (
    	<View>
            <Image
                // source={require('./img/icon_1.png')}
                style={styles.icon}
            />
    	</View>
      
    ),
};


const MyFirstProject = DrawerNavigator({
    BTC: {
        screen: BTCScreen,
    },
    ETH: {
        screen: ETHScreen,
    },
    BCC: {
        screen: BCCScreen,
    },
    LCC: {
    screen: LCCScreen,
    }
    },{
        drawerWidth: 200, // 抽屉宽
        drawerPosition: 'right', // 抽屉在左边还是右边
        // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
        contentOptions: {
        //   initialRouteName: 'Notifications', // 默认页面组件
        //   activeItemKey : 'Notifications',
        labelStyle : {//标签样式
            color : 'red',
            height : 30,
        },
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式
            marginVertical: 0, 
        },
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
  containter: {
      backgroundColor: 'red',
      width: width,
      height: height
  },
  button: {
    top: 30,
    width : width,
    height: 40
  }
});

AppRegistry.registerComponent('demo' , () => MyFirstProject );