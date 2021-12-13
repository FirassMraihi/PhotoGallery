import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors';
import { useAppDispatch } from '../hooks/reduxHooks';
import { DELETE_COMMENT } from '../redux/actions';
import { scaleFont } from '../utils/mixins';
import { Comment } from './interfaces';
import styles from './style';

const ActionsBox: React.FC<Comment> = (comment) => {

    const dispatch = useAppDispatch()

    const handleDelete = () => dispatch({ type: DELETE_COMMENT, payload: comment })


    const handleEdit = () => {
        if (comment.toggleUpdate)
            comment.toggleUpdate();
    }


    return (
        <View style={styles.actionBoxContainer}>
            <TouchableOpacity onPress={handleEdit}>
                <Icon name="comment-edit" size={scaleFont(25)} color={colors.BLACK} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
                <Icon name="delete" size={scaleFont(25)} color={colors.BLACK} />
            </TouchableOpacity>
        </View>
    )
}

export default ActionsBox
