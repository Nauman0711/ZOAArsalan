import React, { useEffect } from "react";
import { FlatList, TextInput, View, Text, Image } from "react-native";
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from "react-redux";
import { setFiles } from "../../redux/editLeads/reducer";
import ActivityLoader from "../../components/loader/activityLoader";
import { AddBtnIcon } from "../../assets/images/svg";
import colors from "../../theme/color";
import { updateProfilePicture } from "../../redux/editLeads/action";
import ScreenContainer from "../../components/screenContainer";
import styles from "./styles";

const EditLeads = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const { code } = route?.params
    const { leadsData, isLoading, files } = useSelector((state) => state.editLeadsReducer);
    useEffect(() => {
        navigation.setOptions({
            headerBackTitle: code,
        });
    }, [navigation]);

    useEffect(() => {
        // dispatch(setFiles([]))
    }, [])
    return (
        <ScreenContainer>
            <ActivityLoader animating={isLoading} />
            <View style={styles.searchBarContainer}>
                <TextInput multiline={true} placeholder="Note..." onChangeText={(e) => console.log(e)} style={styles.textInputStyle} />
            </View>
            <AddBtnIcon onPress={updateProfilePicture} />
            <View>
                <FlatList
                    data={files}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, justifyContent: 'center' }}>
                            <Image blurRadius={item.progress < 1 ? 200 : 0} style={{ height: 60, width: 60, borderRadius: 10 }} source={{ uri: item.uri }} />
                            {item.progress < 1 &&
                                <Progress.Bar color={colors.yellow} style={{ position: 'absolute', }} progress={item.progress} width={50} />
                            }
                        </View>
                    )}
                />
            </View>
        </ScreenContainer>
    )
}
export default EditLeads