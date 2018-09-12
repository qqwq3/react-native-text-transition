
// 本组件做了样式适配

import React,{ Component } from 'react';
import { View, Animated, TouchableWithoutFeedback, Text, Image } from 'react-native';
import { Styles, ScaledSheet, Fonts, BackgroundColor, Colors, Img } from "./Style";

type Props = {
    text?: string,
    minHeight?: number,
    friction?: ?number,
    tension?: number,
    maxHeight?: number,
    show?: boolean,
    indent?: boolean,
    contentBackgroundColor?: boolean,
    iconUp: number,
    iconDown: number,
    iconColor: ?string,
    textStyle?: Array<any> | Object<any>,
    arrowViewStyle?: Array<any> | Object<any>,
    arrowImageStyle?: Array<any> | Object<any>,
    animatedViewStyle?: Object<any>
};

type State = {
    expanded: boolean,
    MinHeight: number,
    MaxHeight: number,
    isShow: boolean,
    animation: any,
};

const icons = {
    up: require('./images/arrow_top.png'),
    down: require('./images/arrow_bottom.png')
};

const styles = ScaledSheet.create({
    box: {
        flexDirection: 'column'
    },
    arrowIcon: {
        width: '12@s',
        height: '8@vs'
    },
    arrow: {
        flexDirection: 'row',
        height: '30@vs',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: BackgroundColor.bg_e5e5e5,
        borderStyle: 'solid'
    },
    description: {
        lineHeight: '18@vs',
    },
});

class TextFold extends Component<Props, State>{
    static defaultProps = {
        text: '',
        tension: 0,
        friction: 50,
        minHeight: 58,
        maxHeight: 0,
        show: false,
        indent: true,
        contentBackgroundColor: '#FFFFFF',
        iconUp: icons.up,
        iconDown: icons.down,
        iconColor: '#cccccc',
        textStyle: [styles.description, Fonts.fontSize12, Colors.gray_808080],
        arrowViewStyle: [styles.arrow, Styles.marginHorizontal15],
        arrowImageStyle: [Img.resizeModeContain, styles.arrowIcon],
        animatedViewStyle: Styles.paddingHorizontal15,
    };
    state = {
        expanded: true,
        animation: new Animated.Value(),
        MinHeight: this.props.minHeight, // 默认值可改动
        MaxHeight: this.props.maxHeight,
        isShow: this.props.show,
    };
    constructor(props){
        super(props);
        this.icons = {
            'up'  : this.props.iconUp,
            'down': this.props.iconDown
        };
    }
    componentDidMount() {
        const { MinHeight, animation } = this.state;
        animation.setValue(MinHeight);
    }
    // 最大的text动画内容 - function
    _maxHeight(e) {
        let MaxHeight = e.nativeEvent.layout.height;
        const {MinHeight} = this.state;

        this.setState({MaxHeight: MaxHeight});
        // Number(MaxHeight) >= MinHeight && this.setState({isShow: true});
        Number(MaxHeight) >= MinHeight && this.setState({isShow: !this.state.isShow});
    }
    // text动画切换 - function
    _toggle() {
        const {expanded, MaxHeight, MinHeight, animation} = this.state;
        this.setState({expanded: !expanded});
        let changeValue = expanded ? MaxHeight : MinHeight;

        Animated.spring(animation, {
            toValue: changeValue,
            friction: this.props.friction, // 摩擦力 （越小 振幅越大）
            tension: this.props.tension,   // 拉力
        }).start();
    }
    render(){
        // 箭头方法默认向下
        let icon = this.icons['down'], expended = this.state.expanded, isShow = this.state.isShow;

        if (!expended) {
            icon = this.icons['up'];
        }

        return (
            <TouchableWithoutFeedback onPress={() => isShow ? this._toggle() : null}>
                <View style={[styles.box, {backgroundColor: this.props.contentBackgroundColor}]}>
                    <Animated.View
                        style={[{ height: isShow ? this.state.animation : this.state.MaxHeight}, this.props.animatedViewStyle]}
                    >
                        <Text onLayout={this._maxHeight.bind(this)}>
                            <Text style={this.props.textStyle}>
                                { this.props.indent ? '\u3000\u3000' : null }
                                { this.props.text }
                            </Text>
                        </Text>
                    </Animated.View>
                    {
                        isShow ?
                        <View style={this.props.arrowViewStyle}>
                            <Image
                                source={icon}
                                style={this.props.arrowImageStyle}
                                tintColor={this.props.iconColor}
                            />
                        </View> : null
                    }
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default TextFold;
