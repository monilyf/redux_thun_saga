import { StyleSheet } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from '../../common/function';
import { COLOR } from '../../config/constants';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    nextButton:{
        height:heightPercentageToDP(10),
        width:widthPercentageToDP(40),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLOR.BUTTON_COLOR
    },
    buttonTitle:{
        fontSize:20,
        color:'white'
    }
   
});

