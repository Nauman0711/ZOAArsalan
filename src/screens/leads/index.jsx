import React, { useEffect } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import ActivityLoader from "../../components/loader/activityLoader";
import { SearchIcon } from "../../assets/images/svg";
import ScreenContainer from "../../components/screenContainer";
import styles from "./styles";
import { onMount } from "../../redux/leads/action";
import Content from "./components/content";

const Leads = ({ }) => {
    const { leadsData, isLoading } = useSelector((state) => state.leadsReducer);
    useEffect(() => {
        onMount()
    }, [])
    return (
        <ScreenContainer>
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
                    renderItem={({item}) => <Content {...item} />}
                />
            </>
        </ScreenContainer>
    )
}
export default Leads