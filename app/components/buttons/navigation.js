import React from 'react';
import {
  TouchableHighlight,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import styled from 'styled-components';
import { colors } from '@styles';
import screenNames from '../../navigation/screen_names';

class _NavigationButton extends React.Component {
  handlePress() {
    const navigation = this.props.navigation;
    if (!navigation) return;

    if (this.props.back) {
      navigation.goBack();
    } else if (this.props.cart) {
      navigation.navigate(screenNames.CART);
    } 
  }

  render() {
    return (
      <TouchableHighlight onPress={this.handlePress}>
        <Container>
          <Icon size={22.5} name={this.props.icon} color={colors.headerButton} />
        </Container>
      </TouchableHighlight>
    )
  }
}

const Back = props => <_NavigationButton back icon="ios-arrow-back" {...props} />
const Cart = props => <_NavigationButton cart icon="ios-cart" {...props} />
const Close = props => <_NavigationButton back icon="ios-close" {...props} />

const Container = styled.View`
  width: 40;
  height: 40;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NavigationButton = {
  Back,
  Cart,
  Close,
};
