/* @flow */

import React, { PureComponent } from 'react';
import { I18nManager, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import type { TextStyleProp } from 'react-navigation/src/TypeDefinition';
import { iOSUIKit } from 'react-native-typography';

type Props = {
  onPress?: () => void,
  title?: ?string,
  titleStyle?: ?TextStyleProp,
  tintColor?: ?string,
};

let styles;

/**
 * Copied from react-navigation/src/views/Header/HeaderBackButton.
 *
 * The component has been modified so that it is displayed the same on both iOS and Android. It has been modified to
 * fill the entire container width, instead of shrinking to fit a small container width based on being displayed
 * alongside the header title. The title styles have been modified to use the appropriate styles from
 * `react-native-typography`.
 */
class HeaderLargeBackButton extends PureComponent<Props> {
  static defaultProps = {
    tintColor: '#037aff',
  };

  render() {
    const { onPress, title, titleStyle, tintColor } = this.props;

    const backButtonTitle = title;

    // Use the `back-icon.png` image(s) from our own project source folder. Note that these are just the back icon
    // images for iOS copied from react-navigation/src/views/assets/ and renamed so that the iOS back icon image will be
    // used on both iOS and Android. You will need to create a new folder within your project source folder, and then
    // copy the `back-icon.png` file and also the files ending in `.ios.png`, and then rename these files so that they
    // just end in `.png`. For example, you'd copy `back-icon@2x.ios.png`, and rename it to `back-icon@2x.png`.
    // eslint-disable-next-line global-require
    const asset = require('@assets/react-navigation/back-icon.png');

    return (
      <TouchableOpacity
        accessibilityComponentType="button"
        accessibilityLabel={backButtonTitle}
        accessibilityTraits="button"
        testID="header-back"
        onPress={onPress}
        style={styles.container}
      >
        <View style={styles.contentContainer}>
          <Image style={[styles.icon, !!title && styles.iconWithTitle, !!tintColor && { tintColor }]} source={asset} />

          {typeof backButtonTitle === 'string' && (
            <Text style={[styles.title, titleStyle, !!tintColor && { color: tintColor }]} numberOfLines={1}>
              {backButtonTitle}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  contentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  title: {
    ...iOSUIKit.bodyObject,
    paddingRight: 20,
  },
  icon: {
    height: 21,
    width: 13,
    marginLeft: 10,
    marginRight: 22,
    marginVertical: 12,
    resizeMode: 'contain',
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
  iconWithTitle: {
    marginRight: 5,
  },
});

export default HeaderLargeBackButton;