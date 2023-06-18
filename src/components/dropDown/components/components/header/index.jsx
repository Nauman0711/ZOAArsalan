import React from "react";
import { View, Text, TextInput } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from "../../../../../theme/color";
import styles from "./styles";

const Header = ({ title, isSearchable, onChangeText, value, clearSearch }) => {
    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            {isSearchable &&
                <View style={styles.searchableContainer}>
                    <AntDesign color={colors.black} size={16} name="search1" />
                    <TextInput value={value} onChangeText={onChangeText} placeholderTextColor={colors.fontGray} style={styles.searchText} placeholder="Search" />
                    {value &&
                        <Entypo onPress={clearSearch} size={18} color={colors.fontGray} name='circle-with-cross' />
                    }
                </View>
            }
        </>
    )
}
export default Header