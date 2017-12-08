/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from 'components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'redux/actions/favourites';

import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    searchAndAddRepository: PropTypes.func.isRequired,
    favourites: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })).isRequired,
  };

  state = {
    newRepositoryName: '',
  };

  addNewFavourite = () => {
    this.props.searchAndAddRepository(this.state.newRepositoryName);
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Icon name="github-alt" size={48} style={styles.logoIcon} />
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Insert the repository name"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.newRepositoryName}
            onChangeText={text => this.setState({ newRepositoryName: text })}
          />
          <Button
            style={styles.button}
            color="success"
            onPress={this.addNewFavourite}
          >
            Add New Repository
          </Button>
        </View>

        <View style={styles.userInformation}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => { navigate('Favorites') }}>
            <Text style={styles.favoritesText}>
              My Favourites({this.props.favourites.length});
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
