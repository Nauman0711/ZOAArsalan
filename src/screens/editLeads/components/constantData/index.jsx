import React, { useCallback, useEffect } from "react";
import { FlatList, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { baseURL } from "../../../../api/baseURL";
import ActivityLoader from "../../../../components/loader/activityLoader";
import { deleteImageAction, onMount } from "../../../../redux/editLeads/action";
import { setOpenImage, setOpenImageIndex } from "../../../../redux/editLeads/reducer";
import styles from "./styles";
import colors from "../../../../theme/color";
import ModalViewGallery from "./components/modalViewGallery";

const ConstantData = ({ leadId, isLoading, files, note, openImageIndex, openImage, }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        onMount({ leadId })
    }, [])
    const handleOpenImage = useCallback((index) => {
        dispatch(setOpenImageIndex(index))
        dispatch(setOpenImage(true))
    }, [])
    const onHoldPress = useCallback(({ item }) => {
        Alert.alert(
            'Delete',
            "Are you sure to Delete",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        deleteImageAction(item.filename)
                    }
                }
            ]
        )
    }, [])
    return (
        <>
            <ActivityLoader animating={isLoading} />
            <View style={styles.container}>
                <>
                    <Text style={styles.noteTitle}>Note</Text>
                    <Text style={styles.description}>{note}</Text>
                </>
                <View>
                    <FlatList
                        data={files}
                        style={styles.style}
                        ItemSeparatorComponent={<View style={styles.itemSeprator} />}
                        horizontal
                        renderItem={({ item, index }) => (
                            <>
                                <TouchableOpacity style={styles.itemContainer} onLongPress={() => onHoldPress({ item })} activeOpacity={0.8} onPress={() => handleOpenImage(index)}>
                                    <Image style={[styles.thumbnailImage, item.type?.startsWith("video") && styles.thumbnailVideo]} source={{ uri: baseURL + "/uploads/" + item.filename }} />
                                    {item.type?.startsWith("video") &&
                                        <AntDesign color={colors.white} style={styles.playBtn} name="playcircleo" size={20} />
                                    }
                                </TouchableOpacity>
                            </>
                        )}
                    />
                </View>
                <ModalViewGallery
                    data={files}
                    imageIndex={openImageIndex}
                    visible={openImage}
                    onRequestClose={() => dispatch(setOpenImage(false))}
                />
            </View>
        </>

    )
}
export default ConstantData