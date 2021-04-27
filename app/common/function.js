import { Dimensions, PixelRatio } from 'react-native';

const dpi = PixelRatio.get();

export const getDpiFontSizeFromPx = pixcelSize => {
    let fontSizeDpi = pixcelSize / dpi;
    return PixelRatio.getPixelSizeForLayoutSize(fontSizeDpi);
}

export const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

export const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};




