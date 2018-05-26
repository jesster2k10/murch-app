import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
  Text,
  Light,
  Subtitle,
  Strikethrough,
  Bold,
  Section,
} from '@components';
import {
  TouchableOpacity,
} from '@shoutem/ui';
import styles from './styles';

const ShopCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={{ uri: 'https://cdn.shopify.com/s/files/1/1800/2587/products/hoodie-s17-pink-unisex-hoodie-5_540x.jpg?v=1511799916' }}
            style={styles.featureImage} />
        </View>
        <View style={styles.details}>
          <Bold>S17 Pink Hoodie</Bold>
          <Light small>One Plus One Clothing</Light>
        </View>
        <View style={styles.price}>
          <Subtitle small>$44.99</Subtitle>
          <Section left={2}>
            <Strikethrough small color="grey" style={styles.compareAt}>$69.99</Strikethrough>
          </Section>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ShopCard;