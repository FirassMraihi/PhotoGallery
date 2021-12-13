import React from 'react'
import { ImageBackground } from 'react-native'
import { ImageThumbnailProps } from './interfaces'
import styles from './style'
import ThumbnailFooter from './thumbnailFooter'



const ImageThumbnail = (data: ImageThumbnailProps) => {


    return (
        <ImageBackground
            imageStyle={styles.imageBorders}
            source={{ uri: data.uri }}
            style={styles.imageContainer}
        >
            <ThumbnailFooter id={data.id} name={data.description.name} comments={data.comments} />
        </ImageBackground >
    )
}

export default ImageThumbnail
