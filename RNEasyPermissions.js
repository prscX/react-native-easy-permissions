import React, { PureComponent } from "react";
import { ViewPropTypes, NativeModules, Platform } from "react-native";
import PropTypes from "prop-types";

const { RNEasyPermissions } = NativeModules;

class EasyPermissions extends PureComponent {
    static propTypes = {
        ...ViewPropTypes,
    };

    static defaultProps = {
    };

    static Show(props) {
        RNEasyPermissions.Show(
            props,
            (...args) => {
                props.onDone && props.onDone(...args);
            },
            (...args) => {
                props.onCancel && props.onCancel(...args);
            }
        );
    }
}

export { EasyPermissions as RNEasyPermissions }