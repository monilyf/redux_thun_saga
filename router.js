import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerActions } from "react-navigation-drawer";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { widthPercentageToDP } from './app/common/function';
import Home from './app/screens/home';
import Login from './app/screens/login';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SideMenu from './app/components/sidemenu';
import { TouchableOpacity } from 'react-native';
import User from './app/screens/user';
import { COLOR } from './app/config/constants';
import Auth from './app/screens/auth';


const homeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: "Home",
            headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()} >
                <Icon name="menu" size={30} color="#000" />
            </TouchableOpacity>
        })
    }
},
);

const userstackNavigator = createStackNavigator({
    User: {
        screen: User,
        navigationOptions: ({ navigation }) => ({
            title: "User",
            headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()} >
                <Icon name="menu" size={30} color="#000" />
            </TouchableOpacity>
        })
    },
});




const tabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: homeNavigator,
            navigationOptions: {
                tabBarIcon: ({ focused }) => <Icon name="home" size={30} color={focused ? "#fff" : "#000"} />
            },
        },
        User: {
            screen: userstackNavigator,
            navigationOptions: {
                tabBarIcon: ({ focused }) => <Icon name="face-profile" size={30} color={focused ? "#fff" : "#000"} />
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: COLOR.BUTTON_COLOR,
            labelStyle: {
                fontSize: 12,
            },
            inactiveBackgroundColor: 'white'

        }
    }
);

const drawerNavigator = createDrawerNavigator({
    Home: {
        screen: tabNavigator
    }
}, {
    contentComponent: SideMenu,
    drawerWidth: widthPercentageToDP(100) - 120
});

const stackNavigator2 = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            title: 'User profile'
        }
    },
},
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    });

export default createAppContainer(
    createSwitchNavigator(
        {
            Auth: Auth,
            AfterDefined: drawerNavigator,
            BeforeDefined: stackNavigator2,
        },
        {
            initialRouteName: 'Auth',
        }
    )
);

// const AppContainer = createAppContainer(tabNavigator);
// export default AppContainer;