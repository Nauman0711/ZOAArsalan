import React, { useEffect } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ActivityLoader from "../../components/loader/activityLoader";
import { SearchIcon } from "../../assets/images/svg";
import ScreenContainer from "../../components/screenContainer";
import colors from "../../theme/color";
import styles from "./styles";
import { loadMore, onMount, onRefresh } from "../../redux/leads/action";
import Content from "./components/content";
import ModalView from "./components/modalView";
import { setIsShowModal } from "../../redux/leads/reducer";
import NoData from "../../components/noData";

const Leads = ({ }) => {
    const dispatch = useDispatch()
    const { leadsData, isLoading, isShowModal, refreshing } = useSelector((state) => state.leadsReducer);
    useEffect(() => {
        onMount()
    }, [])
    return (
        <ScreenContainer>
            <ModalView onClose={() => dispatch(setIsShowModal(false))} visible={isShowModal} />
            <ActivityLoader animating={isLoading} />
            <View style={styles.searchBarContainer}>
                <SearchIcon />
                <TextInput
                    placeholderTextColor={colors.placeholderColor}
                    placeholder="Search"
                    onChangeText={(e) => console.log(e)}
                    style={styles.textInputStyle}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.headerTitle}>My Leads</Text>
                <FlatList
                    data={leadsData}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    ListEmptyComponent={!isLoading && <NoData />}
                    keyExtractor={({ id }) => id}
                    onEndReachedThreshold={0.1}
                    onEndReached={loadMore}
                    renderItem={({ item }) => <Content {...item} />}
                />
            </View>
        </ScreenContainer>
    )
}
export default Leads