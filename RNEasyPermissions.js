import React, { PureComponent } from "react";
import {
  ViewPropTypes,
  NativeModules,
  Platform,
  PermissionsAndroid
} from "react-native";
import PropTypes from "prop-types";

const { RNEasyPermissions } = NativeModules;

class EasyPermissions extends PureComponent {
  static propTypes = {
    ...ViewPropTypes
  };

  static defaultProps = {};

  static Show(props) {
    if (Platform.OS === "android") {
      PermissionsAndroid.requestMultiple(props.permissions).then(granted => {
        props.onDone && props.onDone(granted);
      });
    } else {
      RNEasyPermissions.Show(props, (...args) => {
        props.onDone && props.onDone(...args);
      });
    }
  }
}

export { EasyPermissions as RNEasyPermissions };
