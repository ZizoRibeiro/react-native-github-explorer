/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { ScrollView } from 'react-native';
import Repository from 'components/Repository';

/* Redux */
import { connect } from 'react-redux';

import styles from './styles';

class Favourites extends Component {
  static navigationOptions = {
    title: 'My Favourites',
  };

  static propTypes = {
    favourites: PropTypes.arrayOf(Repository.propTypes.repository).isRequired,
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        { this.props.favourites.map(repository => (
          <Repository key={repository.id} repository={repository} />
        )) }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites,
});

export default connect(mapStateToProps)(Favourites);
