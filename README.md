# react-native-text-transition

## Getting started

`$ npm install react-native-text-transition --save`

`$ npm install react-native-linear-gradient --save`

`$ react-native link react-native-linear-gradient`

## Link
[react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)

## Note

### iOS

Then either:

##### Cocoapods
add the following line to your Podfile:

```sh
pod 'React', :path => '../node_modules/react-native'
pod 'BVLinearGradient', :path => '../node_modules/react-native-linear-gradient'
```

or:

1. Open your project in XCode, right click on `Libraries` and click `Add
   Files to "Your Project Name"` Look under `node_modules/react-native-linear-gradient` and add `BVLinearGradient.xcodeproj`.  [(Screenshot)](http://url.brentvatne.ca/g9Wp).
2. Add `libBVLinearGradient.a` to `Build Phases -> Link Binary With Libraries`
   [(Screenshot)](http://url.brentvatne.ca/g9Wp).
3. Click on `BVLinearGradient.xcodeproj` in `Libraries` and go the `Build
   Settings` tab. Double click the text to the right of `Header Search
   Paths` and verify that it has `$(SRCROOT)/../react-native/React` - if it
   isn't, then add it. This is so XCode is able to find the headers that
   the `BVLinearGradient` source files are referring to by pointing to the
   header files installed within the `react-native` `node_modules`
   directory. [(Screenshot)](http://url.brentvatne.ca/7wE0).

**If you're having trouble, you can point your `package.json` at github to see if the issue has been fixed.  Simply change the dependency**

`"react-native-linear-gradient": "react-native-community/react-native-linear-gradient",`

**to get the data right from github instead of npm and then `npm install`**

For instance the podspec file does not contain the right data (author attributes etc..) in npm while it does in the github repo.

#### Android

Then:

1. in `android/settings.gradle`
```
...
include ':react-native-linear-gradient'
project(':react-native-linear-gradient').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-linear-gradient/android')
```

2. in `android/app/build.gradle` add:
```
dependencies {
    ...
    compile project(':react-native-linear-gradient')
}
```

3. and finally, in `android/src/main/java/com/{YOUR_APP_NAME}/MainActivity.java` for react-native < 0.29,
   or `android/src/main/java/com/{YOUR_APP_NAME}/MainApplication.java` for react-native >= 0.29 add:
```java
//...
import com.BV.LinearGradient.LinearGradientPackage; // <--- This!
//...
@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new MainReactPackage(),
    new LinearGradientPackage() // <---- and This!
  );
}
```

## Usage
```javascript
import TextTransition from 'react-native-text-transition';

render() {
    return (
        <View style={styles.container}>      
            <TextTransition
                text={'Here is the text content'}
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
