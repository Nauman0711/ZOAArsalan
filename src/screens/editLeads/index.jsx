import React, { useEffect } from "react";
import { FlatList, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import ActivityLoader from "../../components/loader/activityLoader";
import { AddBtnIcon } from "../../assets/images/svg";
import colors from "../../theme/color";
import ScreenContainer from "../../components/screenContainer";
import styles from "./styles";

const EditLeads = ({ navigation, route }) => {
    const { code } = route?.params
    const { leadsData, isLoading } = useSelector((state) => state.editLeadsReducer);
    useEffect(() => {
        navigation.setOptions({
            headerBackTitle: code,
        });
    }, [navigation]);
    return (
        <ScreenContainer>
            <ActivityLoader animating={isLoading} />
            <View style={styles.searchBarContainer}>
                <TextInput placeholder="Note..." onChangeText={(e) => console.log(e)} style={styles.textInputStyle} />
            </View>
            <AddBtnIcon />
            <FlatList

            />
        </ScreenContainer>
    )
}
export default EditLeads