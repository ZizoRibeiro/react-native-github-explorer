/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { ScrollView } from 'react-native';
import Repository from 'components/Repository';

import styles from './styles';

export default class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus Favoritos',
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Repository style={{ marginBottom: 20 }} />
        <Repository style={{ marginBottom: 20 }} />
        <Repository style={{ marginBottom: 20 }} />
        <Repository style={{ marginBottom: 20 }} />
      </ScrollView>
    );
  }
}
