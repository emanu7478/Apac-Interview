import React from 'react';
import {StatusBar} from 'react-native';
import * as constant from '../../constants';

const RNStatusBar = (props) => {
  const {backgroundColor, barStyle} = props;

  return (
    <StatusBar
      backgroundColor={
        backgroundColor ? backgroundColor : constant.PRIMARY_COLOR
      }
      barStyle={barStyle ? barStyle : 'dark-content'}
    />
  );
};

export default RNStatusBar;
