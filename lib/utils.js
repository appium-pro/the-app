import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigation } from 'react-native-navigation';

export const USER_KEY = '@TheApp:LoggedInUser';

const VALID_LOGINS = [['alice', 'mypassword'], ['bob', 'totallysecure']];

export function navigate(curComponentId, nextScreen) {
  Navigation.push(curComponentId, {component: {name: nextScreen}});
}

export async function login(username, password) {
  // clear any current session before trying to log in
  await AsyncStorage.setItem(USER_KEY, '');

  const isValid =
    VALID_LOGINS.filter(l => {
      return l[0] === username && l[1] === password;
    }).length === 1;

  if (isValid) {
    await AsyncStorage.setItem(USER_KEY, username);
    return true;
  }

  return false;
}

export async function logout() {
  await AsyncStorage.setItem(USER_KEY, '');
}

export async function getLoginUser() {
  return (await AsyncStorage.getItem(USER_KEY)) || null;
}

export function testProps(id) {
  return {
    testID: id,
    accessibilityLabel: id,
  };
}
