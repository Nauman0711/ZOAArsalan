import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Entypo from 'react-native-vector-icons/Entypo';
import { HeaderIconSvg } from "../../../assets/images/svg";
import BtnGreen from "../../../components/buttons/btnGreen";
import GenericFormInput from "../../../components/formInput/genericFormInput";
import ActivityLoader from "../../../components/loader/activityLoader";
import ScreenContainer from "../../../components/screenContainer";
import { onSubmit, shouldDisabled } from "../../../redux/authentication/login/action";
import { setEmail, setErrorText, setPassword, setIsSecure } from "../../../redux/authentication/login/reducer";
import styles from "./styles";
import colors from "../../../theme/color";

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const { email, password, isLoading, isSecure, error } = useSelector((state) => state.loginReducer);
    return (
        <ScreenContainer>
            <ActivityLoader animating={isLoading} />
            <View style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.keyboardAvoidView}
                    behavior={Platform.OS === "ios" ? "padding" : 'height'}
                >
                    <HeaderIconSvg style={styles.logo} />
                    <GenericFormInput
                        title="Email Address"
                        keyboardType="email-address"
                        onChangeText={(e) => { dispatch(setErrorText("")), dispatch(setEmail(e)) }}
                        placeholder="Please enter your email"
                        value={email}
                        error={error == "Please Enter Your Email" ? "Please Enter Your Email" : error == 'Please Enter a Valid Email' ? "Please Enter a Valid Email" : null}
                    />
                    <GenericFormInput
                        title="Password"
                        onChangeText={(e) => { dispatch(setErrorText("")), dispatch(setPassword(e)) }}
                        placeholder="Please enter your password"
                        secureTextEntry={isSecure}
                        RightChild={<Entypo onPress={() => dispatch(setIsSecure())} size={22} color={colors.green} name={isSecure ? 'eye-with-line' : "eye"} />}
                        value={password}
                        error={error == "Please Enter Your Password" ? "Please Enter Your Password" : error == 'Password Must be atleast 8 Characters Long' ? "Password Must be atleast 8 Characters Long" : null}
                    />
                    <BtnGreen style={styles.btnStyle} disabled={shouldDisabled()} onPress={() => onSubmit({ navigation })} title={"Login"} />
                </KeyboardAvoidingView>
            </View>
        </ScreenContainer>
    )
}
export default Login