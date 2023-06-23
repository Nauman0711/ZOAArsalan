import React, { useEffect } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../../../api/baseURL";
import ActivityLoader from "../../../../components/loader/activityLoader";
import { onMount } from "../../../../redux/editLeads/action";
import styles from "./styles";

const ConstantData = ({ view, leadId }) => {
    const { isLoading, files, note, } = useSelector((state) => state.editLeadsReducer);
    useEffect(() => {
        onMount({ leadId })
    }, [])
    return (
        <>
            <ActivityLoader animating={isLoading} />
            <View style={styles.container}>
                <>
                    <Text style={styles.noteTitle}>Note</Text>
                    <Text style={styles.description}>{note}</Text>
                </>
                <FlatList
                    data={files}
                    style={styles.style}
                    ItemSeparatorComponent={<View style={styles.itemSeprator} />}
                    horizontal
                    renderItem={({ item }) => (
                        <Image style={styles.thumbnailImage} source={{ uri: baseURL + "/uploads/" + item.filename }} />
                    )}
                />
            </View>
        </>

    )
}
export default ConstantData