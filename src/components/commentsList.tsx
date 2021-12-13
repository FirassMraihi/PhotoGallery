import React, { useLayoutEffect, useRef } from 'react'
import { View, FlatList, ListRenderItem, Text } from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet';
import { useAppSelector } from '../hooks/reduxHooks';
import { scaleSize } from '../utils/mixins';
import CommentBlock from './commentBlock';
import InputComment from './inputComment';
import { Comment } from './interfaces';
import ListHeader from './listHeader';
import styles from './style';

const CommentsList: React.FC = () => {

    const RBref = useRef<RBSheet | null>();

    const { isOpen, comments, id } = useAppSelector(state => state.commentsListReducer)

    useLayoutEffect(() => {
        const { current } = RBref;
        if (isOpen === true) { if (current !== null && current !== undefined) current.open() }
        else if (current !== null && current !== undefined) current.close()

    }, [isOpen])

    const renderItem: ListRenderItem<Comment> = ({ item }) => {
        return (
            <View style={styles.commentBlockPadding}>
                <CommentBlock imageId={id} id={item.id} user={item.user} content={item.content} />
            </View>
        )
    }


    return (
        <View>
            <RBSheet
                ref={ref => RBref.current = ref}
                openDuration={250}
                height={scaleSize(400)}
                closeOnPressMask={false}
                animationType={"slide"}
                customStyles={{
                    container: {
                        paddingTop: scaleSize(5),
                        paddingHorizontal: scaleSize(5),
                        justifyContent: comments === undefined ? "flex-start" : "center",
                        alignItems: "center"
                    }
                }}
            >

                {comments && comments.length > 0 ? <FlatList
                    ListHeaderComponent={<ListHeader />}
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    data={comments}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    ListFooterComponent={<InputComment imageId={id} comments={comments} placeholder={'Write a comment ....'} />}
                /> : <View style={styles.emptyCommentsContainer}>
                    <View style={styles.emptyCommentsHeader}>
                        <ListHeader />
                    </View>
                    <View style={styles.emptyCommentsLabelContainer}>
                        <Text style={styles.emptyCommentsLabel}>No comments to show</Text>
                    </View>
                    <View style={styles.emptyCommentsInputContainer}>
                        <InputComment imageId={id} comments={comments} placeholder={'Write a comment ....'} />
                    </View>
                </View>}
            </RBSheet>
        </View>
    )
}

export default CommentsList
