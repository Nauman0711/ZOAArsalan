import React from "react";
import { FlatList, TextInput, View, Image } from "react-native";
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "../../../../redux/editLeads/reducer";
import ActivityLoader from "../../../../components/loader/activityLoader";
import { AddBtnIcon } from "../../../../assets/images/svg";
import colors from "../../../../theme/color";
import { updateProfilePicture, onSubmit, shouldDisable } from "../../../../redux/editLeads/action";
import BtnGreen from "../../../../components/buttons/btnGreen";
import styles from "./styles";

const Data = ({ leadCode, leadId }) => {
    const dispatch = useDispatch()
    const { isLoading, files, note, } = useSelector((state) => state.editLeadsReducer);

    return (
        <>
            <ActivityLoader animating={isLoading} />
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        value={note}
                        multiline={true}
                        placeholderTextColor={colors.placeholderColor}
                        placeholder="Note..."
                        onChangeText={(e) => dispatch(setNotes(e))}
                        style={styles.textInputStyle}
                    />
                </View>
                <AddBtnIcon onPress={updateProfilePicture} />
                <View>
                    <FlatList
                        data={files}
                        horizontal
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <Image blurRadius={item.progress < 1 ? 200 : 0} style={styles.thumbnailImage} source={{ uri: item.uri }} />
                                {item.progress < 1 &&
                                    <Progress.Bar color={colors.yellow} style={styles.progressBar} progress={item.progress} width={50} />
                                }
                            </View>
                        )}
                    />
                </View>
            </View>
            <BtnGreen onPress={() => onSubmit({ leadCode, leadId })} disabled={shouldDisable()} title={'Submit'} />
        </>

    )
}
export default Data