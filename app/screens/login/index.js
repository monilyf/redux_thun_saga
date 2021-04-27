import React, { Component } from 'react'
import { Text, View, AsyncStorage, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './style'
import { loginProcess } from '../../redux/reducers/login/actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export class Login extends Component {

    state = {
        value: 0
    }
    loginProcess = () => {
        this.props.loginProcess(this.props)
    }
    onChange = (value) => {
        let arr = [0, 20, 40, 60, 80, 100];
        this.setState({ value: parseInt(arr[value]) })

    }
    render() {
        const { login } = this.props;
        console.log(login.status)
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.nextButton}
                    onPress={this.loginProcess}
                >
                    <Text style={styles.buttonTitle}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            loginProcess,
        },
        dispatch
    );

const mapStateToProps = state => ({
    login: state.login,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
