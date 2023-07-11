import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ActivityLoader from "../../components/loader/activityLoader";
import ScreenContainer from "../../components/screenContainer";
import { onMount, resetStates } from "../../redux/submissions/action";
import DropDownSubmission from "./components/dropdown";
import styles from "./styles";

const Submissions = ({ navigation, route }) => {
    const { isLoading, leadsSubmission } = useSelector((state) => state.submissionReducer);
    const { code, id } = route?.params
    useEffect(() => {
        onMount({ id })
        return resetStates
    }, [])
    useEffect(() => {
        navigation.setOptions({
            headerTitle: code,
        });
    }, [navigation]);
    return (
        <ScreenContainer>
            <ActivityLoader animating={isLoading} />
            <FlatList
                data={leadsSubmission}
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={<View style={styles.itemSeprator} />}
                renderItem={({ item }) => <DropDownSubmission {...item} />}
            />
        </ScreenContainer>
    )
}
export default Submissions