import React, { Fragment } from "react";
import { Modal, SafeAreaView } from "react-native";
import Carousel from "pinar";
import Entypo from 'react-native-vector-icons/Entypo'
import colors from "../../../../../../theme/color";
import ImageViewer from "../imagePlayer";
import VideoPlayer from "../videoPlayer";
import styles from "./styles";

const ModalViewGallery = ({ visible, imageIndex, data, onRequestClose }) => {
    if (data.length > 0) {
        return (
            <Modal onRequestClose={onRequestClose} visible={visible} transparent={true}>
                <SafeAreaView style={styles.subContainer}>
                    <Entypo onPress={onRequestClose} size={25} style={styles.crossIcon} name="circle-with-cross" color={colors.white} />
                    <Carousel
                        showsControls={false}
                        index={imageIndex}
                    >
                        {data.map((item, key) => (
                            <Fragment key={key}>
                                {item.type?.startsWith("video") ?
                                    <VideoPlayer filename={item.filename} /> :
                                    <ImageViewer filename={item.filename} />
                                }
                            </Fragment>
                        ))}
                    </Carousel>
                </SafeAreaView>
            </Modal>
        )
    } else {
        return null
    }
}
export default ModalViewGallery