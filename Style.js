
/*公共样式*/

'use strict';

// 适配不同分辨率设备
import { ScaledSheet } from 'react-native-size-matters';

/*
* width: 100@s = scale(100)
* height: 100@vs = verticalScale(100)
* margin: 5@ms = moderateScale(5) / 5@ms0.3 = moderateScale(5,0.3)
*/

const Styles = ScaledSheet.create({
    // 实列
    box: {
        width: '100@s', // = scale(100)
        height: '100@vs', // = verticalScale(100)
    },
    // 公共容器
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        position: 'relative'
    },
    // 居中处理
    flexCenter: {
        justifyContent:"center",
        alignItems:'center'
    },
    // 内边距公用
    paddingHorizontal15: {
        paddingHorizontal: '15@ms',
    },
    paddingVertical15: {
        paddingVertical: '15@ms'
    },
    padding15: {
        padding: '15@ms',
    },
    paddingLeft15: {
        paddingLeft: '15@ms',
    },
    paddingRight15: {
        paddingRight: '15@ms',
    },
    paddingBottom15: {
        paddingBottom: '15@ms',
    },
    paddingTop15: {
        paddingTop: '15@ms',
    },
    // 外边距公用
    marginHorizontal15: {
        marginHorizontal: '15@ms',
    },
    marginVertical15: {
        marginVertical: '15@ms'
    },
    margin15: {
        margin: '15@ms',
    },
    marginLeft15: {
        marginLeft: '15@ms',
    },
    marginRight15: {
        marginRight: '15@ms',
    },
    marginBottom15: {
        marginBottom: '15@ms',
    },
    marginTop15: {
        marginTop: '15@ms',
    },
    // 公共的行
    row: {
        position: 'relative',
        flexDirection: 'row',
    },
    // 公共的线
    line: {
        height: '10@vs',
        position: 'relative',
    },
    // flex - 1
    flex1: {
        flex: 1,
    },
    // 相对定位
    relative: {
        position: 'relative',
    },
    // 绝对定位
    absolute: {
        position: 'absolute',
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
});

const Fonts = ScaledSheet.create({
    // 字体类型
    fontFamily: {
        fontFamily: 'PingFangSC-Medium',
    },
    // 字体大小集合
    fontSize12: {
        fontSize: '12@ms'
    },
    fontSize14: {
        fontSize: '14@ms'
    },
    fontSize15: {
        fontSize: '15@ms'
    },
    fontSize16: {
        fontSize: '16@ms'
    },
    fontSize18: {
        fontSize: '18@ms'
    },
    fontSize20: {
        fontSize: '20@ms'
    },
    fontSize24: {
        fontSize: '24@ms'
    },
    fontSize36: {
        fontSize: '36@ms',
    },
    fontWeightBold: {
        fontWeight: 'bold'
    },
});

const Colors = ScaledSheet.create({
    gray_808080:{
        color: '#808080',
    },
    gray_404040: {
        color: '#404040',
    },
    gray_b2b2b2: {
        color: '#b2b2b2',
    },
    gray_4c4c4c: {
        color: '#4C4C4C'
    },
    gray_c0c0c0: {
        color: '#c0c0c0',
    },
    gray_993333:{
        color:'#993333',
    },
    orange_f3916b: {
        color: '#f3916b',
    },
    orange_ff5a5a: {
        color: '#ff5a5a'
    },
    white_FFF: {
        color: '#FFF'
    }
});

const Img = ScaledSheet.create({
    resizeModeContain: {
        resizeMode: 'contain'
    },
    resizeModeCover: {
        resizeMode: 'cover'
    },
    resizeModeStretch: {
        resizeMode: 'stretch',
    },
});


const BackgroundColor = {
    bg_b2b2b2:'#b2b2b2',
    bg_e5e5e5: '#e5e5e5',
    bg_f1f1f1: '#f1f1f1',
    bg_f3916b: '#f3916b',
    bg_fff: '#ffffff',
    bg_ff5a5a: '#ff5a5a',
    bg_00bc0c: '#00bc0c',
    bg_808080: '#808080',
    bg_000000_7: 'rgba(0,0,0,7)',
    bg_transparent: 'transparent',
};

export { Styles, ScaledSheet, Fonts, Colors, Img, BackgroundColor };

// Valid keys: [
//     "display",
//     "width",
//     "height",
//     "start",
//     "end",
//     "top",
//     "left",
//     "right",
//     "bottom",
//     "minWidth",
//     "maxWidth",
//     "minHeight",
//     "maxHeight",
//     "margin",
//     "marginVertical",
//     "marginHorizontal",
//     "marginTop",
//     "marginBottom",
//     "marginLeft",
//     "marginRight",
//     "marginStart",
//     "marginEnd",
//     "padding",
//     "paddingVertical",
//     "paddingHorizontal",
//     "paddingTop",
//     "paddingBottom",
//     "paddingLeft",
//     "paddingRight",
//     "paddingStart",
//     "paddingEnd",
//     "borderWidth",
//     "borderTopWidth",
//     "borderStartWidth",
//     "borderEndWidth",
//     "borderRightWidth",
//     "borderBottomWidth",
//     "borderLeftWidth",
//     "position",
//     "flexDirection",
//     "flexWrap",
//     "justifyContent",
//     "alignItems",
//     "alignSelf",
//     "alignContent",
//     "overflow",
//     "flex",
//     "flexGrow",
//     "flexShrink",
//     "flexBasis",
//     "aspectRatio",
//     "zIndex",
//     "direction",
//     "shadowColor",
//     "shadowOffset",
//     "shadowOpacity",
//     "shadowRadius",
//     "transform",
//     "transformMatrix",
//     "decomposedMatrix",
//     "scaleX",
//     "scaleY",
//     "rotation",
//     "translateX",
//     "translateY",
//     "backfaceVisibility",
//     "backgroundColor",
//     "borderColor",
//     "borderTopColor",
//     "borderRightColor",
//     "borderBottomColor",
//     "borderLeftColor",
//     "borderStartColor",
//     "borderEndColor",
//     "borderRadius",
//     "borderTopLeftRadius",
//     "borderTopRightRadius",
//     "borderTopStartRadius",
//     "borderTopEndRadius",
//     "borderBottomLeftRadius",
//     "borderBottomRightRadius",
//     "borderBottomStartRadius",
//     "borderBottomEndRadius",
//     "borderStyle",
//     "opacity",
//     "elevation"
// ]















