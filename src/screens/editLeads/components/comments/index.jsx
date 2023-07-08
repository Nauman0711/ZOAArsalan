import React from "react";
import { FlatList, TextInput, View, Platform, KeyboardAvoidingView } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { useSelector, useDispatch } from "react-redux";
import ActivityLoader from "../../../../components/loader/activityLoader";
import NoData from "../../../../components/noData";
import { onRefreshComment, postComment, shouldDisablePostComment } from "../../../../redux/editLeads/action";
import { setComment } from "../../../../redux/editLeads/reducer";
import colors from "../../../../theme/color";
import Content from "./components/content";
import styles from "./styles";

const Comments = ({ leadDataId, leadCode, leadId }) => {
    const dispatch = useDispatch()
    const { comment, comments, commentIsLoading, isRefreshComment } = useSelector((state) => state.editLeadsReducer);
    return (
        <View style={styles.container}>
            <ActivityLoader animating={commentIsLoading} />
            <FlatList
                data={comments}
                refreshing={isRefreshComment}
                ListEmptyComponent={!commentIsLoading && <NoData />}
                onRefresh={() => onRefreshComment(leadDataId)}
                ItemSeparatorComponent={<View style={styles.seprator} />}
                renderItem={({ item }) => <Content {...item} />}
            />
            <KeyboardAvoidingView
                style={styles.keyboardAvoidView}
                behavior={Platform.OS === "ios" ? "padding" : 'height'}
            >
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} value={comment} onChangeText={(e) => dispatch(setComment(e))} multiline={true} placeholder="Post a comment" />
                    <Feather onPress={() => postComment({ leadDataId, leadCode, leadId, comment })} disabled={shouldDisablePostComment({ leadDataId, leadCode, leadId, comment })} color={shouldDisablePostComment({ leadDataId, leadCode, leadId, comment }) ? colors.fontGray : colors.yellow} size={22} name="send" />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
export default Comments