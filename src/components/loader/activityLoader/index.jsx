import React from "react";
import colors from "../../../theme/color";
import { ActivityIndicator, Modal } from "react-native";

const ActivityLoader = ({ animating }) => {
    return (
        <Modal visible={animating} transparent={true}>
            <ActivityIndicator style={{ flex: 1 }} size="large" color={colors.green} animating={animating} />
        </Modal>
    )
}

export default ActivityLoader