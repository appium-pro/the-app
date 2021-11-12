import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Button, Text } from 'react-native-elements';
import baseStyles from '../styles/base';
import { testProps, getLoginUser, logout } from '../lib/utils';

export default function SecretScreen({componentId}) {
  const [user, setUser] = useState('');

  useEffect(() => {(async () => {
    const user = await getLoginUser();
    if (!user) {
      Navigation.pop(componentId);
      return;
    }

    setUser(user);
  })()}, [user, componentId]);

  async function doLogout() {
    await logout();
    Navigation.pop(componentId);
  }

  return <View style={styles.view}>
    <Text h2>Secret Area</Text>
    <Text style={styles.message}>You are logged in as <Text style={styles.username} {...testProps(`Logged in as ${user}`)}>{user}</Text></Text>
    <Button title="Logout" style={styles.button}
      onPress={doLogout} />
  </View>;
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: baseStyles.margin * 5,
  },
  message: {
    marginTop: baseStyles.margin * 2,
    marginBottom: baseStyles.margin * 2,
  },
  username: {
    fontWeight: 'bold',
  }
});
