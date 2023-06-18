import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView, View, Modal, FlatList, ActivityIndicator } from "react-native";
import Footer from "./components/footer";
import Header from "./components/header";
import Content from "./components/content";
import styles from "./styles";
import colors from "../../../theme/color";
import ListEmptyComponent from "./components/listEmptyComponent";

const DropDownModal = ({ visible, searchValue, setVisible, loading, data, title, onConfirm, isSearchable, onChangeText, onEndReached, onEndReachedThreshold, listLoader, clearSearch, onRefresh, refreshing, multiSelect, selectedValues, value, keyExtractor }) => {
    const [selectedItem, setSelectedItem] = useState([])
    const onPressConfirm = () => {
        if (selectedItem) {
            onConfirm(selectedItem)
        }
        setVisible(false)
    }
    useEffect(() => {
        setSelectedItem(selectedValues)
    }, [selectedValues])

    const onSelect = useCallback((e) => {
        if (selectedItem?.some(object => JSON.stringify(object) === JSON.stringify(e))) {
            setSelectedItem(selectedItem?.filter((data) => JSON.stringify(data) !== JSON.stringify(e)))
        } else {
            if (multiSelect) {
                setSelectedItem(prev => [...prev, e])
            } else {
                setSelectedItem([e])
            }
        }
    }, [])
    const isSelected =(item) => {
        if (selectedItem) {
            return selectedItem?.some(e => JSON.stringify(e) === JSON.stringify(item))
        } else {
            return value === item?.value
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Modal animationType='fade' onRequestClose={() => { setVisible(false) }} transparent={true} visible={visible} >
                <View style={styles.mainContainer}>
                    <View style={styles.internalContainer}>
                        <Header clearSearch={clearSearch} value={searchValue} onChangeText={onChangeText} isSearchable={isSearchable} title={title} />
                        <FlatList
                            data={data}
                            onRefresh={onRefresh}
                            refreshing={refreshing}
                            ListEmptyComponent={<ListEmptyComponent loading={loading} />}
                            keyExtractor={keyExtractor}
                            onEndReachedThreshold={onEndReachedThreshold}
                            onEndReached={onEndReached}
                            ListFooterComponent={<ActivityIndicator color={colors.yellow} animating={listLoader ? listLoader : false} />}
                            contentContainerStyle={styles.contentContainerStyle}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => <Content isSelected={() => isSelected(item)} item={item} onSelect={onSelect} index={index} />}
                        />
                        <Footer onPressCancel={() => { setVisible(false), setSelectedItem(selectedValues) }} onPressOk={onPressConfirm} />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
export default DropDownModal