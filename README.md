# react-native-text-transition

## Getting started

`$ npm install react-native-text-transition --save`

## Usage
```javascript
import TextTransition from 'react-native-text-transition';

render() {
    return (
        <View style={styles.container}>      
            <TextTransition
                text={'这里是文本内容'}
            />
        </View>
    );
}
```

## Available props

| Name                           | Type             | Default        | Description                                                                                  |
| ------------------------------ | ---------------- | -------------- | -------------------------------------------------------------------------------------------- |
| text                           | string           | ''             | Some text content                                                                             |
| minHeight                      | number           | 58             | Minimum initial height of folding                                                             |
| maxHeight                      | number           | 0              | Maximum initial height of folding                                                             |
| friction                       | number           | 50             | Friction (the smaller the amplitude)                                                         |
| tension                        | number           | 0              | Move the modal up if the keyboard is open                                                     |
| show                           | boolean          | false          | The minimum height is less than the minimum value, and the arrow icon is hidden                                                    |                                                  
| indent                         | boolean          | true           | Do you want text to be indented?   |
| contentBackgroundColor         | string           | '#FFFFFF'      | Background color of content                                   |
| iconUp                         | number           | icons.up       | Default up Icon            |
| iconDown                       | number           | icons.down     | Default down Icon            |
| iconColor                      | string           | '#cccccc'      | Default color settings for icons|
| textStyle                      | array or object  | [styles.description, Fonts.fontSize12, Colors.gray_808080] | Style of folding text  |
| arrowViewStyle                 | array or object  | [styles.arrow, Styles.marginHorizontal15] | Arrowhead style |
| arrowImageStyle                | array or object  | [Img.resizeModeContain, styles.arrowIcon] | The style of Arrow Icon |
| animatedViewStyle              | object           | Styles.paddingHorizontal15 | Style of animation box |
