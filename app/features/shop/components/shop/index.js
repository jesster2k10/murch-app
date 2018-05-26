import React, { Component } from 'react';
import {
  ScrollView,
  Flatlist,
  View,
} from 'react-native';
import {
  TitleContainer,
  SmallTitle,
  Section,
  Title,
} from '@components';
import ShopCard from '../shopCard';
import FeaturedItemsList from '../lists/featuredItems';
import CategoriesList from '../lists/categoriesList';
import styles from './styles';

class Shop extends Component {
  static navigationOptions = {
    tabBarLabel: 'Shop'
  };
  
  state = {
    sections: [
      {
        name: 'Categories',
        key: 'categories',
        data: [
          {
            id: 0,
            name: 'T-Shirts',
          }
        ]
      },
      {
        name: 'Featured',
        key: 'featured',
        data: []
      }
    ]
  }

  renderItem = ({ item }) => {
    return <ShopCard data={item} />
  }

  renderSectionHeader = (name) => {
    return (
      <TitleContainer>
        <SmallTitle>{ name }</SmallTitle>
      </TitleContainer>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TitleContainer>
            <Title>Shop</Title>
          </TitleContainer>
          <Section bottom={20} top={15}>  
            <TitleContainer>
              <SmallTitle>Categories</SmallTitle>
            </TitleContainer>
            <CategoriesList />
          </Section>
          <Section bottom={15} top={15}>  
            <TitleContainer>
              <SmallTitle>Featured</SmallTitle>
            </TitleContainer>
            <FeaturedItemsList />
          </Section>
        </ScrollView>
      </View>
    );
  }
}

export default Shop;