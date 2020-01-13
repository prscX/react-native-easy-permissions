/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  DeviceEventEmitter
} from 'react-native'

import { RNEasyPermissions } from 'react-native-easy-permissions'

export default class App extends Component<{}> {
  constructor(props) {
    super(props)

    this.appTourTargets = []
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => {
          RNEasyPermissions.Show({
            // permissions: ['Camera', 'Contacts', 'Calendar', 'PhotoLibrary', 'Notification', 'Microphone', 'Reminders', 'SpeechRecognizer', 'Location', 'Motion', 'MediaLibrary', 'Bluetooth']
            permissions: [
              'android.permission-group.CALENDAR',
              'android.permission-group.CAMERA',
              'android.permission-group.LOCATION',
              'android.permission.READ_SMS',
              'android.permission.ACCESS_FINE_LOCATION'
            ]
          });
        }} title={'Tap Here'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})