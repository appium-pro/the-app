import {Navigation} from 'react-native-navigation';

import HomeScreen from './HomeScreen';
//import EchoScreen from './EchoScreen';
//import LoginScreen from './LoginScreen';
//import SecretScreen from './SecretScreen';
//import VerifySMSScreen from './VerifySMSScreen';
//import ClipboardScreen from './ClipboardScreen';
//import HybridScreen from './HybridScreen';
//import Hybrid2Screen from './Hybrid2Screen';
//import ListScreen from './ListScreen';
//import PhotoScreen from './PhotoScreen';
//import LocationScreen from './LocationScreen';
//import PickerScreen from './PickerScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  //Navigation.registerComponent('EchoScreen', () => EchoScreen);
  //Navigation.registerComponent('LoginScreen', () => LoginScreen);
  //Navigation.registerComponent('SecretScreen', () => SecretScreen);
  //Navigation.registerComponent('VerifySMSScreen', () => VerifySMSScreen);
  //Navigation.registerComponent('ClipboardScreen', () => ClipboardScreen);
  //Navigation.registerComponent('HybridScreen', () => HybridScreen);
  //Navigation.registerComponent('Hybrid2Screen', () => Hybrid2Screen);
  //Navigation.registerComponent('ListScreen', () => ListScreen);
  //Navigation.registerComponent('PhotoScreen', () => PhotoScreen);
  //Navigation.registerComponent('LocationScreen', () => LocationScreen);
  //Navigation.registerComponent('PickerScreen', () => PickerScreen);
}
