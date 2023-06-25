import React, { useState } from "react";
import { Image } from "react-native";
import { ActivityIndicator } from "react-native";
import { baseURL } from "../../../../../../api/baseURL";
import colors from "../../../../../../theme/color";
import styles from "./styles";

const ImageViewer = ({ filename }) => {
    const [isLoading, setIsloading] = useState(true)
    const handleLoad = () => {
        setIsloading(false)
    }
    return (
        <>
            <ActivityIndicator color={colors.yellow} style={{ position: 'absolute', top: '50%', right: '50%' }} animating={isLoading} />
            <Image
                source={{ uri: baseURL + "/uploads/" + filename }}
                onLoad={handleLoad}
                resizeMode="cover"
                style={styles.video}
            />
        </>
    )
}
export default ImageViewer