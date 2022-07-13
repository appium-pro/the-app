import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { Input, Button } from 'react-native-elements';
import baseStyles from '../styles/base';
import { testProps } from '../lib/utils';

export default function ClipboardScreen({componentId}) {
  const [clipboardText, setClipboardText] = useState('');
  const [curText, setCurText] = useState('');

  async function refresh() {
    try {
      setClipboardText(await Clipboard.getString());
    } catch (ign) {
      setClipboardText('');
    }
  }

  function setText() {
    Clipboard.setString(curText);
  }

  useEffect(() => {(async() => {
    // if we're already logged in, just go to the secret area already
    await refresh()
  })()}, [componentId]);

  return (
    <View style={styles.main}>
      <View style={{...baseStyles.flexCenter}}>
        <Text style={styles.echoHeader}>Here&apos;s the clipboard text:</Text>
        <Text style={styles.savedEcho} testId="clipboardText" accessibilityLabel={clipboardText}>{clipboardText}</Text>
        <Button {...testProps('refreshClipboardText')} title="Refresh Clipboard Text"
          onPress={refresh}
        />
      </View>
      <View style={styles.form}>
        <Input
          placeholder="Enter text"
          style={styles.formControl}
          onChangeText={(text) => setCurText(text)}
          {...testProps('messageInput')}
        />
        <Button
          title="Set Clipboard Text" style={styles.formControl}
          onPress={setText}
          {...testProps('setClipboardText')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: baseStyles.margin * 5
  },
  echoHeader: {
    fontSize: baseStyles.fontSizeMed,
    margin: baseStyles.margin,
  },
  savedEcho: {
    margin: baseStyles.margin,
    color: '#999',
    fontSize: baseStyles.fontSizeBig,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
  },
  formControl: {
    margin: baseStyles.margin,
    height: 50,
    width: '90%',
  },
});
