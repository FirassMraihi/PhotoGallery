
import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { InputCommentProps } from './interfaces';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/colors';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { SAVE_COMMENT } from '../redux/actions';
import { scaleFont } from '../utils/mixins';

const InputComment: React.FC<InputCommentProps> = (inputProps: InputCommentProps) => {

  const [text, setText] = useState<string>()

  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.userReducer)

  useEffect(() => {
    if (inputProps.value) {
      setText(inputProps.value)
    }
  }, [inputProps.value])

  const resetInput = () => setText('')

  const handlePress = () => {

    dispatch({ type: SAVE_COMMENT, payload: { comments: inputProps.comments, imageId: inputProps.imageId, newComment: { id: user, content: text } } })
    resetInput()
  }

  const onChangeText = (e: any) => setText(e)

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder='Write comment...'
        onChangeText={(e) => onChangeText(e)}
        value={text}
      />
      <TouchableOpacity onPress={() => inputProps.handleSubmit ? inputProps.handleSubmit(text) : handlePress()}>
        <Icon name="send" size={scaleFont(20)} color={colors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

export default InputComment;
