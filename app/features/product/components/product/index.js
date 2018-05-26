import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
} from 'react-native';
import {
  PrimaryButton,
  Title,
  Subtitle,
  Light,
  Text,
  Section
} from '@components';
import {
  appStyles,
  metrics,
} from '@styles';
import Parallax from 'react-native-parallax-view';
import styles from './styles';

class Product extends Component {
  static navigationOptions = {
    header: null,
  };

  render = () => {
    return (
      <Parallax
        backgroundSource={{ uri: 'https://cdn.shopify.com/s/files/1/1800/2587/products/hoodie-s17-pink-unisex-hoodie-5_540x.jpg?v=1511799916' }}
        windowHeight={400}
        scrollableViewStyle={styles.scrollViewInner}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {/* Buttons */}
          <Section bottom={25} top={0} row>
            <PrimaryButton
              title="Add To Cart" 
              width={metrics.screen.width - 60}
            />
          </Section>
          {/* Price */}
          <Subtitle>$44.99</Subtitle>
          {/* Title */}
          <Section top={5} bottom={10}>
            <Title>Water Lightweight Green Jacket</Title>
          </Section>
          {/* Vendor */}
          <Section top={5} bottom={10}>
            <Light>by One Plus One Clothing</Light>
          </Section>
          {/* Description */}
          <Section top={10} bottom={5}>
            <Light>Description</Light>
          </Section>
          <Section top={5} bottom={10}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor ex, laoreet quis finibus ut, iaculis non sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor ex, laoreet quis finibus ut, iaculis non sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor ex, laoreet quis finibus ut, iaculis non sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
          </Section>
        </View>
      </Parallax>
    )
  }
}

export default Product;
