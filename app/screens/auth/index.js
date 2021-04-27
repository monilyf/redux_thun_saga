import React, { Component } from 'react'
import { AsyncStorage, Text, View } from 'react-native'

export class Auth extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        this.getStatus()
        this.focusListener = navigation.addListener("didFocus", () => {
            this.getStatus()
        });
    }


    getStatus = () => {
        const { navigation } = this.props;
        AsyncStorage.getItem('status').then(res => {
            if (res == "true") {
                setTimeout(() => {
                    navigation.navigate('AfterDefined');
                }, 2000);
            } else {
                setTimeout(() => {
                    navigation.navigate('BeforeDefined');
                }, 2000);
            }
        })

    }

    render() {
        return (
            <View>
                <Text> Loading.... </Text>
            </View>
        )
    }
}

export default Auth
