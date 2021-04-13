import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import * as constant from '../../constants';

const RNButton = (props) => {
  const {
    onPress,
    backgroundColor,
    title,
    titleColor,
    width,
    height,
    borderRadius,
    alignSelf,
    fontSize,
  } = props;

  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <View
        style={[
          style.container,
          {
            alignSelf: alignSelf ? alignSelf : null,
            width: width,
            height: height ? height : 45,
            backgroundColor: backgroundColor
              ? backgroundColor
              : constant.BLUE_COLOR,
            borderRadius: borderRadius ? borderRadius : 5,
          },
        ]}>
        <Text
          style={[
            style.title,
            {
              color: titleColor ? titleColor : constant.PRIMARY_COLOR,
              fontSize: fontSize ? fontSize : 12,
            },
          ]}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    elevation: 7,
    paddingHorizontal: 5,
    marginVertical: 10,
    justifyContent: 'center',
  },
  title: {
    color: constant.PRIMARY_COLOR,
    fontWeight: 'bold',
  },
});

export default RNButton;
