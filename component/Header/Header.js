import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {style} from './style';
const Header = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
    }
  };
  return (
    <View>
      <Text style={styleToApply()}>{props.title}</Text>
    </View>
  );
};

//accidentally types default in the video, but should actually be defaultProps
Header.defaultProps = {
  title: '',
  type: 1,
};

Header.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
};

export default Header;