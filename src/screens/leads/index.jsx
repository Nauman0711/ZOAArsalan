import React, { useEffect } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ActivityLoader from "../../components/loader/activityLoader";
import { SearchIcon } from "../../assets/images/svg";
import ScreenContainer from "../../components/screenContainer";
import styles from "./styles";
import { onMount } from "../../redux/leads/action";
import Content from "./components/content";
import ModalView from "./components/modalView";
import { setIsShowModal } from "../../redux/leads/reducer";

const Leads = ({ }) => {
    const dispatch = useDispatch()
    const { leadsData, isLoading, isShowModal } = useSelector((state) => state.leadsReducer);
    useEffect(() => {
        onMount()
    }, [])
    return (
        <ScreenContainer>
            <ModalView onClose={() => dispatch(setIsShowModal(false))} visible={isShowModal} />
            <ActivityLoader animating={isLoading} />
            <View style={styles.searchBarContainer}>
                <SearchIcon />
                <TextInput placeholder="Search" onChangeText={(e) => console.log(e)} style={styles.textInputStyle} />
            </View>
            <>
                <Text style={styles.headerTitle}>My Leads</Text>
                <FlatList
                    data={leadsData}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => <Content {...item} />}
                />
            </>
        </ScreenContainer>
    )
}
export default Leads