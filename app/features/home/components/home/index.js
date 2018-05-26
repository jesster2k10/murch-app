import React from 'react';
import {
  View,
  SectionList,
} from 'react-native';
import {
  Text,
  SmallTitle,
  Title,
  TitleContainer,
  Bold,
  Section,
} from '@components';
import {
  Icon
} from '@shoutem/ui';
import HomeCard from '../homeCard';
import moment from 'moment';
import styles from './styles';

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: <Icon name="home" />
  }

  renderItem = ({ item }) => {
    return <HomeCard data={item} />
  }

  renderSectionHeader = ({ section }) => {
    let date = moment(section.date);
    let formattedDate = date.format('D MMM');
    let today = moment().clone().startOf('day');
    let yesterday = moment().clone().subtract(1, 'days').startOf('day');

    let smallTitle = date.format('dddd');

    if (date.isSame(today, 'd')) {
      smallTitle = 'Today';
    }

    if (date.isSame(yesterday, 'd')) {
      smallTitle = 'Yesterday';
    }

    return (
      <TitleContainer>
        <Section top={10}>
          <Bold color="grey">{ formattedDate }</Bold>
        </Section>
        <Section top={10} bottom={10}>
         <SmallTitle>{ smallTitle }</SmallTitle>
        </Section>
      </TitleContainer>
    )
  }
  
  renderHeader = () => {
    return (
      <TitleContainer>
        <Title color="black">Home</Title>
      </TitleContainer>
    )
  }

  render = () => {
    return (
      <View style={styles.container}>
        <SectionList
          style={styles.list}
          sections={[
            { date: moment(), data: [{key: 'Devin'},
            {key: 'Jackson'},] }, 
            { date: moment('2018-05-03'), data: [{key: 'Devin'},] }, 
            { date: moment('2018-05-01'), data: [{key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},] }, 
          ]}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    )
  }
}

export default Home;