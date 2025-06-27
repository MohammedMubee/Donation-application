import { Text, TextInput, View } from 'react-native';

import PropTypes from 'prop-types';

const TextBox = ({
  value,
  onChangeText,
  placeholder,
  editable = true,
  label,
  style,
}) => {
  return (
    <View style={{ marginVertical: 8 }}>
      {label && (
        <Text style={{ marginBottom: 4, color: '#36455A' }}>{label}</Text>
      )}
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderBottom: 5,
          color: '#969AA8',

          height: 63,
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable}
      />
    </View>
  );
};

TextInput.PropTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  editable: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object,
};

export default TextBox;
