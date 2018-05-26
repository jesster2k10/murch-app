import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
  LinearGradient,
} from 'expo';
import {
  SmallTitle,
  LargeText,
  SmallBold,
  Section,
} from '@components';
import styles from './styles';

const HomeCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://cdn.shopify.com/s/files/1/1800/2587/files/Group_Sand_Red_2.JPG?16746915481161498835' }}
        resizeMode="cover"
      />
      <LinearGradient
          colors={['rgba(0,0,0,0)', '#000']}
          style={styles.overlay}
        >
          <View style={styles.inner}>
            <View style={styles.top}>
              <SmallBold color="white">One Plus One Clothing</SmallBold>
            </View>
            <SmallTitle color="white">Save 30%</SmallTitle>
            <LargeText color="white">Flash Sale On Now. Limited Stock Remains</LargeText>
            <Section top={5} bottom={5}>
              <SmallBold color="white">SHOP NOW</SmallBold>
            </Section>
          </View>
        </LinearGradient>
    </View>
  )
};

export default HomeCard;