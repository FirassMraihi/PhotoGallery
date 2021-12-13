import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';
import { useAppDispatch } from '../hooks/reduxHooks';
import { TOOGLE_COMMENTS } from '../redux/actions';
import { scaleFont } from '../utils/mixins';
import styles from './style'

const ListHeader = () => {
    const dispatch = useAppDispatch()

    const handlePress = () => dispatch({ type: TOOGLE_COMMENTS, payload: { operation: 'close' } })

    return (
        <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeaderTitle}>Comments :</Text>
            <TouchableOpacity onPress={handlePress}>
                <Icon name="ios-close-outline" size={scaleFont(30)} color={colors.BLACK} />
            </TouchableOpacity>
        </View>
    )
}

export default ListHeader
