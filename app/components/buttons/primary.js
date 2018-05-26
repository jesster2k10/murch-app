import React from 'react';
import {
  TouchableHighlight,
} from 'react-native';
import {
  fonts,
  colors,
} from '@styles';
import {
  Bold,
} from '@components';
import glamorous from 'glamorous-native';

const { View } = glamorous

export const PrimaryButton = ({ onPress, title, style, textStyle, width, marginRight }) => (
  <TouchableHighlight onPress={onPress}>
    <View
      justifyContent="center"
      alignItems="center"
      shadowColor="black"
      shadowOpacity={0.13}
      shadowOffset={{ y: 2, x: 0 }}
      shadowRadius={4}
      width={width ? width : 'auto'}
      height={48}
      borderRadius={48/2}
      marginRight={marginRight}
      backgroundColor={colors.primary}>
      <Bold color="white">{ title }</Bold>
    </View>
  </TouchableHighlight>
);
