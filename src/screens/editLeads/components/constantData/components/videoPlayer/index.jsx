import React, { Fragment, useState } from "react";
import Video from 'react-native-video';
import { ActivityIndicator } from "react-native";
import { baseURL } from "../../../../../../api/baseURL";
import styles from "./styles";

const VideoPlayer = ({ filename }) => {
    const [isLoading, setIsloading] = useState(true)
    const handleLoad = () => {
        setIsloading(false)
    }
    return (
        <Fragment>
            <ActivityIndicator animating={isLoading} />
            <Video
                source={{ uri: baseURL + "/uploads/" + filename }}
                onLoad={handleLoad}
                control={true}
                fullscreen={true}
                style={styles.video}
            />
        </Fragment>
    )
}
export default VideoPlayer