import React, { useEffect } from "react";
import { View } from 'react-native'
import { SplashIconSvg } from "../../assets/images/svg";
import ScreenContainer from "../../components/screenContainer";
import { splashAction } from "../../redux/splash/action";
import styles from "./styles";


const SplashScreen = () => {
    useEffect(() => {
        splashAction()
    }, [])
    return (
        <ScreenContainer>
            <View style={styles.container}>
                <SplashIconSvg />
            </View>
        </ScreenContainer>
    )
}

export default SplashScreen