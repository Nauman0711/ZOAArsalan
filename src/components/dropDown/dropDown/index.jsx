import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment-timezone";
import styles from './styles'
import DropDownModal from '../components';
import colors from '../../../theme/color';

const DropDown = (data) => {
    // const { title, titleStyle, LeftChild, RightChild, containerStyle, innerContainerStyle, disabled, innerContainerStyle, placeholder, style, calendar, maximumDate, onConfirm, onPress, mode, inlineOption, inlineData, keyExtractor } = props
    const { value, error, LeftChild, containerStyle, RightChild, innerContainerStyle, title, titleStyle, placeholder, style, onPress, calendar, onConfirm, maximumDate, inlineOption, inlineData, isSearchable, onChangeText, mode, onEndReached, onEndReachedThreshold, searchValue, listLoader, clearSearch, onRefresh, refreshing, multiSelect, selectedValues, disabled, keyExtractor } = data
    const [openCalendar, setOpenCalendar] = useState(false)
    const [open, setOpen] = useState(false)
    const [localValue, setLocalValue] = useState('')
    const timezone = moment.tz.guess();
    const format = mode === 'datetime' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';

    const isHeighLight = () => {
           return localValue ? true : false
    }
    useEffect(() => {
        if (selectedValues?.length > 0) {
            if (multiSelect) {
                setLocalValue(selectedValues?.map((item) => item.value).join(', '))
            } else {
                setLocalValue(selectedValues[0]?.value)
            }
        } else {
            setLocalValue('')
        }
    }, [selectedValues])


    const confirm = (e) => {
        if (multiSelect) {
            onConfirm(e)
            setLocalValue(e?.map((item) => item.value).join(', '))
        } else {
            onConfirm(e[0])
            setLocalValue(e[0]?.value)
        }
    }
    return (
        <View style={containerStyle}>
            {calendar &&
                <DateTimePickerModal
                    isVisible={openCalendar}
                    mode={mode ? mode : "date"}
                    maximumDate={maximumDate}
                    onConfirm={(date) => {
                        const localDateTime = moment.tz(date, timezone).format(format);
                        onConfirm(date);
                        setLocalValue(localDateTime);
                        setOpenCalendar(false);
                    }}
                    onCancel={() => setOpenCalendar(false)}
                />
            }
            <View>
            <DropDownModal keyExtractor = {keyExtractor} value={data?.value} selectedValues={selectedValues} multiSelect={multiSelect} onRefresh={onRefresh} refreshing={refreshing} clearSearch={clearSearch} listLoader={listLoader} searchValue={searchValue} onEndReached={onEndReached} onEndReachedThreshold={onEndReachedThreshold} onChangeText={onChangeText} isSearchable={isSearchable} title={data.title} data={data.data} loading={data.loading} visible={open} onConfirm={confirm} setVisible={setOpen} />
                <Text style={[styles.titleTxt, titleStyle, isHeighLight() && styles.titleHasValue]}>{title}</Text>
                {inlineOption ?
                    <View style={styles.inlineOptionContainer}>
                        {inlineData?.map((item, index) => (
                            <TouchableOpacity onPress={() => { setLocalValue(item.key), onConfirm(item) }} activeOpacity={0.8} key={item?.key} style={item.key == localValue ? styles.selectedInlineItemContainer : styles.inlineItemContainer}>
                                <item.Icon isSelected={item.key == localValue} />
                                <Text style={[styles.inlineTitle, item.key == localValue && styles.selectedInlineItemText]}>{item.value}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    :
                    <TouchableOpacity style={[styles.innerContainer, innerContainerStyle]} disabled={disabled} onPress={() => { onPress ? onPress() : (calendar ? setOpenCalendar(previousState => !previousState) : setOpen(previousState => !previousState)) }} activeOpacity={0.8} >
                        {LeftChild &&
                            LeftChild
                        }
                        {value || localValue ?
                            <Text style={style}>{value ? value : localValue}</Text>
                            :
                            <Text style={[style, styles.placeholderTextColor]}>{placeholder}</Text>
                        }
                        {RightChild ?
                            RightChild : !disabled &&
                            <MaterialIcons disabled={disabled} color={colors.contentGray} size={28} onPress={() => { (calendar ? setOpenCalendar(previousState => !previousState) : setOpen(previousState => !previousState)) }} name={open ? "arrow-drop-up" : "arrow-drop-down"} />
                        }
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}
export default DropDown