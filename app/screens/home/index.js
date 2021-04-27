import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './style'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { counterUpdate } from '../../redux/reducers/home/actions';

export class Home extends Component {

    counterPlus = () => {
        let { counter } = this.props.home;
        this.props.counterUpdate(counter + 1);
    }

    render() {
        let { counter } = this.props.home;
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Counter : {counter} </Text>
                <TouchableOpacity style={styles.nextButton}
                    onPress={this.counterPlus}
                >
                    <Text style={styles.buttonTitle}>Counter +</Text>
                </TouchableOpacity>
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
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
