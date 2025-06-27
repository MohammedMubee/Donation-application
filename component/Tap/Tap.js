import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import { horizontalScale } from '../../assets/styles/scaling';
import { useRef, useState } from 'react';

const Tap = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      style={[style.button, props.inActive && style.inactive, tabWidth]}
      onPress={() => props.onPress(props.tabId)}>    
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, props.inActive && style.inactiveTitle]}
      >
        {props.title}
      </Text>
    </Pressable>
  );
};

Tap.defaultProps = {
  inActive: false,
  onPress: () => {},
};

Tap.propTypes = {
  tapId:PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  inActive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tap;
