import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { styles } from './style';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Image, AsyncStorage, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { IMAGES } from '../../config/constants';
import { heightPercentageToDP } from '../../common/function';

class SideMenu extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    logout = () => {
        AsyncStorage.clear();
        this.props.navigation.navigate('Auth')
        // this.navigateToScreen('Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View>
                            <Image
                                style={{ height: heightPercentageToDP(20), width: '100%' }}
                                source={IMAGES.SIDE_BAR}
                            />
                        </View>
                        <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('Home')}>
                            <Text style={styles.navItemStyle} >
                                Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.navSectionStyle} onPress={this.navigateToScreen('User')}>
                            <Text style={styles.navItemStyle} >
                                User</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.navSectionStyle, { height: heightPercentageToDP(10), justifyContent: 'center' }]} onPress={this.logout}>
                            <Text style={styles.navItemStyle} >
                                Logout</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;