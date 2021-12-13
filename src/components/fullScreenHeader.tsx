import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colors from '../assets/colors'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons';
import { fullScreenHeaderProps } from './interfaces';
import { scaleFont } from '../utils/mixins';


const FullScreenHeader: React.FC<fullScreenHeaderProps> = (headerTitle: fullScreenHeaderProps) => {


    const handlePress = () => headerTitle.handleClose()

    return (
        <View style={styles.fullScreenHeaderContainer}>
            <Text style={styles.fullScreenHeaderTitle}>{headerTitle.title}</Text>
            <TouchableOpacity onPress={handlePress}>
                <Icon name="ios-close-outline" size={scaleFont(30)} color={colors.WHITE} />
            </TouchableOpacity>

        </View>
    )
}

export default FullScreenHeader
