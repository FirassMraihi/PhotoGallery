import React, { useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, FlatList, ListRenderItem, Text } from 'react-native';
import CommentsList from '../components/commentsList';
import FullScreen from '../components/fullScreen';
import ImageThumbnail from '../components/imageThumbnail';
import { ImageThumbnailProps } from '../components/interfaces';
import styles from '../components/style';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { CREATE_USER, FETCH_IMAGES } from '../redux/actions';
import { useNetInfo } from "@react-native-community/netinfo";
import globalStyles from './style';

const Home: React.FC = () => {

    const [toggleFullScreen, setToggleFullScreen] = useState(false)
    const [fullScreenItem, setFullScreenItem] = useState<ImageThumbnailProps>()
    const netInfo = useNetInfo();


    const { images } = useAppSelector(state => state.imagesReducer)
    const { user } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()


    const checkConnection = useCallback(
        () => {
            if (netInfo.isConnected) dispatch({ type: FETCH_IMAGES })
        },
        [])


    useEffect(() => {
        checkConnection();
    }, [netInfo])

    useEffect(() => {
        if (images === undefined || images.length === 0) dispatch({ type: FETCH_IMAGES })
        if (user === undefined || Object.keys(user).length === 0) dispatch({ type: CREATE_USER })
    }, [])


    const handlePress = (item: ImageThumbnailProps) => {
        setToggleFullScreen(true);
        setFullScreenItem(item)
    }
    const renderSeperator = () => <View style={globalStyles.seperator} />


    const renderItem: ListRenderItem<ImageThumbnailProps> = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handlePress(item)} style={styles.imageCardContainer}>
                <ImageThumbnail id={item.id} uri={item.uri} description={item.description} comments={item.comments} />
            </TouchableOpacity>)
    }
    return (
        <View style={globalStyles.homeContainer}>
            <FlatList
                ItemSeparatorComponent={renderSeperator}
                ListHeaderComponent={<Text style={globalStyles.imagesListHeader}>Pictures</Text>}
                columnWrapperStyle={globalStyles.rowContainer}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={images}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}

            />
            <CommentsList />
            <FullScreen
                setToggleFullScreen={setToggleFullScreen}
                toggleFullScreen={toggleFullScreen} item={fullScreenItem} />
        </View>
    );
};


export default Home
