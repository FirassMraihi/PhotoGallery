import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import ActionsBox from './actionsBox'
import { Comment } from './interfaces'
import styles from './style'
import InputComment from './inputComment'
import { UPDATE_COMMENT } from '../redux/actions'
import colors from '../assets/colors'


const CommentBlock: React.FC<Comment> = (data: Comment) => {
    const { user } = useAppSelector(state => state.userReducer)

    const dispatch = useAppDispatch()
    const [toggleUpdate, setToggleUpdate] = useState(false)


    const handleSubmit = (text: string | undefined) => {
        if (text) {
            dispatch({ type: UPDATE_COMMENT, payload: { imageId: data.imageId, updatedComment: { id: user, content: text } } })
            setToggleUpdate(false)
        }

    }

    return <View style={toggleUpdate === false ? styles.commentBlockContainer : { backgroundColor: colors.WHITE }}>
        {toggleUpdate === false && <>
            <Text style={styles.userLabel}>{data.user}</Text>
            <Text
                style={styles.commentContent}
            >{data.content}</Text>
        </>}
        {
            toggleUpdate && <InputComment imageId={0} value={data.content} handleSubmit={handleSubmit} />
        }
        {data.id === user && toggleUpdate === false && <ActionsBox toggleUpdate={() => setToggleUpdate(prevState => !prevState)} comment={data} />}
    </View>

}

export default CommentBlock
