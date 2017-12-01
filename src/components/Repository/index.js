/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from 'components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Repository extends Component {
  static propTypes = {
    style: View.propTypes.style,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    return (
      <View style={[styles.box, this.props.style]}>
        <View style={styles.headerContainer}>
          <View style={styles.ownerContainer}>
            <Image
              style={styles.ownerImage}
              source={{ uri: 'https://avatars3.githubusercontent.com/u/69631?v=4' }}
            />
            <View style={styles.ownerInformationContainer}>
              <Text style={styles.ownerTitle}>CRIADOR</Text>
              <Text style={styles.ownerText}>facebook</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.linkContainer}
            activeOpacity={0.6}
            onPress={() => {}}
          >
            <Text style={styles.linkText}>Acessar</Text>
            <Icon name="angle-right" size={14} style={styles.linkIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.repositoryContent}>
          <Text style={styles.repositoryTitle}>facebook/react</Text>
          <Text style={styles.repositoryDescription}>
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Text>

          <View style={styles.repositoryInformationContainer}>
            <View style={styles.infoContainer}>
              <Icon name="star" size={14} style={styles.infoIcon} />
              <Text style={styles.infoText}>23</Text>
            </View>
            <View style={styles.infoContainer}>
              <Icon name="code-fork" size={14} style={styles.infoIcon} />
              <Text style={styles.infoText}>220</Text>
            </View>
            <View style={styles.infoContainer}>
              <Icon name="eye" size={14} style={styles.infoIcon} />
              <Text style={styles.infoText}>100</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            color="success"
            style={styles.leftButton}
            onPress={() => {}}
          >
            Gostei!
          </Button>
          <Button
            color="danger"
            style={styles.rightButton}
            onPress={() => {}}
          >
            Hoje não
          </Button>
        </View>
      </View>
    );
  }
}
