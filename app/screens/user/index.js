import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './style'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { counterUpdate } from '../../redux/reducers/home/actions';

export class User extends Component {
    counterPlus = () => {
        let { counter } = this.props.home;
        this.props.counterUpdate(counter - 1);
    }

    render() {
        let { counter } = this.props.home;
        let { userData } = this.props.login;

        const UserData = () => {
            if (userData) {
                let item = [];
                let i = 0;
                for (var x in userData) {
                    item.push(<Text key={i} style={{ fontSize: 20 }}>{x + " : " + userData[x]} ,</Text>);
                    i++;
                }
                return item;
            }
            else
                return null
        }

        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Counter : {counter}</Text>
                <TouchableOpacity style={styles.nextButton}
                    onPress={this.counterPlus}
                >
                    <Text style={styles.buttonTitle}>Counter -</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 10, borderWidth: 1, borderColor: 'black', padding: 20 }}>
                    <UserData />
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            counterUpdate,
        },
        dispatch
    );

const mapStateToProps = state => ({
    home: state.home,
    login: state.login,
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

