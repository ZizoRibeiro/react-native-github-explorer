/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from 'components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Icon name="github-alt" size={48} style={styles.logoIcon} />
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do repositório"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Button
            style={styles.button}
            color="success"
            onPress={() => {}}
          >
            Adicionar repositório
          </Button>
        </View>

        <View style={styles.userInformation}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => { navigate('Favorites') }}>
            <Text style={styles.favoritesText}>
              MEUS FAVORITOS (14)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
