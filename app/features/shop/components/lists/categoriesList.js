import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  Text,
} from '@components';

class CategoriesList extends Component {
  renderItem({ item }) {
    return (
      <View style={styles.chip}>
        <Text small>{ item.name }</Text>
      </View>
    )
  }

  keyExtractor({ item, index }) {
    return item.name;
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        renderItem={this.renderItem}
        numColumns={2}
        data={[{ name: 'Hoodies'},{name: 'Sweatshirts'}, {name: 'Tees'}, {name: 'Bags'}]}
      />
    )
  }
}

const styles = StyleSheet.create({
  chip: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgb(234, 235, 237)',
    borderRadius: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  list: {
    marginLeft: 22.5,
    marginRight: 22.5,
    marginTop: 5,
  }
});

export default CategoriesList;