import React from 'react';
import {
  metrics,
} from '@styles';
import glamorous from 'glamorous-native';
const { View } = glamorous;

class Card extends React.Component {
  render = () => {
    return (
      <View
        backgroundColor="white"
        borderRadius={20}
        height={metrics.screen.height}
        padding={this.props.padding}
      >
        { this.props.children }
      </View>
    )
  }
}

export { Card };