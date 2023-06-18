import React, { memo, useCallback } from "react";
import { Text, Pressable } from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto';
import colors from "../../../../../theme/color";
import styles from "./styles";

const Content =({ item, onSelect, isSelected }) => {
    const handleOnSelect = useCallback(() => {
        onSelect(item)
    },[])
    return (
        <Pressable
            onPress={handleOnSelect}
            style={({ pressed }) => [
                styles.selectableBtnContainer,
                pressed && styles.pressedBtn
            ]}
            disabled={!item.key}
        >
            {() => (
                <>
                    {item.key &&
                        <Fontisto
                            size={20}
                            color={colors.yellow}
                            name={isSelected(item) ? "radio-btn-active" : 'radio-btn-passive'}
                        />
                    }
                    <Text style={[item.key ? styles.listText : styles.listDisableText]}>
                        {item?.value}
                    </Text>
                </>
            )}
        </Pressable>
    )
};

export default memo(Content);
