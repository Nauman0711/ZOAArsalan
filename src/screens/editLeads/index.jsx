import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ScreenContainer from "../../components/screenContainer";
import styles from "./styles";
import TabButtons from "./components/tabButtons";
import Data from "./components/data";
import Comments from "./components/comments";
import { resetStates } from "../../redux/editLeads/action";
import ConstantData from "./components/constantData";

const EditLeads = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const { code, id, view, leadCode, leadId } = route?.params
    const { selectedBtn, openImageIndex, openImage, isLoading, files, note, refreshing } = useSelector((state) => state.editLeadsReducer);
    useEffect(() => {
        navigation.setOptions({
            headerBackTitle: code,
        });
        return resetStates
    }, [navigation]);
    return (
        <ScreenContainer>
            <View style={styles.container}>
                {view ?
                    <>
                        <TabButtons />
                        {selectedBtn == 'Data' ?
                            <ConstantData refreshing={refreshing} openImageIndex={openImageIndex} openImage={openImage} isLoading={isLoading} files={files} note={note} view={view} leadCode={code} leadId={id} />
                            :
                            <Comments leadDataId={id} leadCode={leadCode} leadId={leadId} />
                        }
                    </>
                    :
                    <Data leadCode={code} leadId={id} />
                }
            </View>
        </ScreenContainer>
    )
}
export default EditLeads