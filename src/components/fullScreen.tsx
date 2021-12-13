import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Image, Modal, Dimensions } from 'react-native'
import FullScreenHeader from './fullScreenHeader'
import { dimensions, fullScreenProps } from './interfaces'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors'
import { useAppDispatch } from '../hooks/reduxHooks'
import { TOOGLE_COMMENTS } from '../redux/actions'
import { scaleFont } from '../utils/mixins'


const { width, height } = Dimensions.get("window");

const FullScreen: React.FC<fullScreenProps> = (element: fullScreenProps) => {
    const [dimension, setDimension] = useState<dimensions>()

    const dispatch = useAppDispatch()

    const handlePress = () => dispatch({ type: TOOGLE_COMMENTS, payload: { operation: 'open', id: element.item?.id } })

    const handleClose = () => element.setToggleFullScreen(false)

    useEffect(() => {
        if (element.item)
            Image.getSize(element.item?.uri, (imgWidth, imgHeight) => {
                const ratio = Math.min(width / imgWidth, height / imgHeight);
                setDimension({ width: imgWidth * 0.3, height: imgHeight * ratio })
            })
    }, [element])
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={element.toggleFullScreen}
            onRequestClose={handleClose}>

            {element.item && <FullScreenHeader handleClose={handleClose} title={element.item?.description.name} />}

            <View style={styles.fullScreenContainer}>
                {element.item && <Image
                    style={[styles.originalSize, { width: dimension?.width, height: dimension?.height }]}
                    source={{ uri: element.item.uri }}
                />}

                <TouchableOpacity style={styles.footerLabelContainer} onPress={handlePress}>
                    <Icon name="comment-multiple" size={scaleFont(30)} color={colors.WHITE} />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default FullScreen
