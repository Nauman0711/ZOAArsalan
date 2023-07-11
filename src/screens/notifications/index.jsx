import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ActivityLoader from "../../components/loader/activityLoader";
import ScreenContainer from "../../components/screenContainer";
import { loadMore, onMount, onRefresh } from "../../redux/notifications/action";
import Content from "./components/content";
import styles from "./styles";
const Notifications = () => {
    const { notifications, isLoading, refreshing, notificationCount } = useSelector((state) => state.notificationsReducer);
    useEffect(() => {
        onMount()
    }, [notificationCount])
    return (
        <ScreenContainer>
            <ActivityLoader animating={isLoading} />
            <FlatList
                data={notifications}
                refreshing={refreshing}
                contentContainerStyle={styles.contentContainer}
                onRefresh={onRefresh}
                onEndReached={loadMore}
                onEndReachedThreshold={0.2}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <Content {...item} />}
            />
        </ScreenContainer>
    )
}
export default Notifications