<h1 align="center">

  <p align="center">
    <a href="https://www.npmjs.com/package/react-native-easy-permissions"><img src="http://img.shields.io/npm/v/react-native-easy-permissions.svg?style=flat" /></a>
    <a href="https://github.com/prscX/react-native-easy-permissions/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
    <a href="https://github.com/prscX/react-native-easy-permissions#License"><img src="https://img.shields.io/npm/l/react-native-easy-permissions.svg?style=flat" /></a>
  </p>

    ReactNative: Native Easy Permissions Library (Android/iOS)

If this project has helped you out, please support us with a star 🌟

</h1>

This library is a React Native bridge around native library providing Dialog for permissions.

| **iOS: [ivanvorobei/SPPermissions](https://github.com/ivanvorobei/SPPermissions)**                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/ivanvorobei/SPPermissions/blob/master/Assets/Readme/Preview%20-%205.0.jpg" width="300" height="600" /> |

| **Android: [Facebook/ReactNative.PermissionsAndroid](https://facebook.github.io/react-native/docs/permissionsandroid)** |
| ----------------------------------------------------------------------------------------------------------------------- |


> This library is support RN61+

## 📖 Getting started

`$ npm install react-native-easy-permissions --save`

## **RN61 >= RNAT V1 >**

> RN60 above please use `react-native-easy-permissions` V1 and above

- **iOS**

> **iOS Prerequisite:** Please make sure `CocoaPods` is installed on your system

    - Add the following to your `Podfile` -> `ios/Podfile` and run pod update:

```
  use_native_modules!

  pod 'RNEasyPermissions', :path => '../node_modules/react-native-easy-permissions/ios'

  use_frameworks!

  pod 'SPPermissions', :git => 'https://github.com/prscX/SPPermissions', :branch => 'react-native'
```

    - [Permissions Pods - follow](https://github.com/ivanvorobei/SPPermissions/#cocoapods)
    - [Keys in Info.plist - follow](https://github.com/ivanvorobei/SPPermissions/#keys-in-infoplist)

- **Android**

> [Supported Permissions - follow](https://facebook.github.io/react-native/docs/permissionsandroid)

> No configuration is required

## 🎨 Usage

```
import { RNEasyPermissions } from 'react-native-easy-permissions'

RNEasyPermissions.Show({
    // iOS Permissions
    permissions: ['Camera', 'Contacts', 'Calendar', 'PhotoLibrary', 'Notification', 'Microphone', 'Reminders', 'SpeechRecognizer', 'Location', 'Motion',    'MediaLibrary', 'Bluetooth']
    // Android Permissions
    // permissions: [
    //   'android.permission-group.CALENDAR',
    //   'android.permission-group.CAMERA',
    //   'android.permission-group.LOCATION',
    //   'android.permission.READ_SMS',
    //   'android.permission.ACCESS_FINE_LOCATION'
    // ]
});

```

## 💡 Props

- **General(iOS & Android)**

| Prop                        | Type   | Default | Note                                |
| --------------------------- | ------ | ------- | ----------------------------------- |
| `Show({ permissions: [] })` | `func` |         | It invoke native permissions dialog |

## ✨ Credits

- iOS: [ivanvorobei/SPPermissions](https://github.com/ivanvorobei/SPPermissions)

## 🤔 How to contribute

Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/react-native-easy-permissions/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?

If you are using this library in one of your projects, add it in this list below. ✨

## 📜 License

This library is provided under the Apache 2 License.

RNAppTour @ [prscX](https://github.com/prscX)

## 💖 Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

- Starring and sharing the projects you like 🚀
- If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >
