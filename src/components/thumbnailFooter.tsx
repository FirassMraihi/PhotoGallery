import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colors from '../assets/colors'
import { ThumbnailDescriptionProps } from './interfaces'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TOOGLE_COMMENTS } from '../redux/actions'
import { useAppDispatch } from '../hooks/reduxHooks'
import { scaleFont } from '../utils/mixins'

const ThumbnailFooter = (description: ThumbnailDescriptionProps) => {
    const dispatch = useAppDispatch()

    const handlePress = () => dispatch({ type: TOOGLE_COMMENTS, payload: { operation: 'open', id: description.id } })

    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerLabel}>{description.name}</Text>

            <TouchableOpacity style={styles.footerLabelContainer} onPress={handlePress}>
                <Icon name="comment-multiple" size={scaleFont(20)} color={colors.WHITE} />
            </TouchableOpacity>
        </View>
    )
}

export default ThumbnailFooter
