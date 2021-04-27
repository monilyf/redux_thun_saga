import { StyleSheet } from 'react-native'
import { COLOR } from '../../config/constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      navItemStyle: {
        padding: 10,
        color:'white'
      },
      navSectionStyle: {
        backgroundColor: COLOR.BUTTON_COLOR,
        borderTopWidth:1,
        borderColor:'white'
      }
});