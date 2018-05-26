import React from 'react';
import {
  FlatList,
} from 'react-native';
import { navigateToProduct } from '@navigation';
import screenNames from '@screen-names';
import ShopCard from '../shopCard';

class FeaturedItemsList extends React.Component {
  renderItem(data) {
    return <ShopCard data={data} onPress={() => navigateToProduct()} />
  }

  render() {
    const {
      styles,
    } = this.props;

    return (
      <FlatList
        style={{ ...styles, }}
        renderItem={this.renderItem}
        numColumns={2}
        data={[{key: 1},{key: 2},{key: 3},{key: 4}, {key: 5}, {key: 5}]}
      />
    )
  }
}

export default FeaturedItemsList;