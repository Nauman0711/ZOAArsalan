import { View, Text, TextInput } from 'react-native'
import styles from './styles'

const FormInput = (props) => {
    const { title, titleStyle, LeftChild, RightChild, containerStyle, innerContainerStyle, value, isForget, error, onPressForget } = props
    return (
        <View style={containerStyle}>
            <Text style={[styles.titleTxt, titleStyle, value?.length > 0 && styles.titleHasValue]}>{title}</Text>
            <View style={[styles.innerContainer, innerContainerStyle]}>
                {LeftChild &&
                    LeftChild
                }
                <TextInput
                    {...props}
                />
                {RightChild &&
                    RightChild
                }
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>
            }
            {isForget &&
                <Text onPress={onPressForget} style={styles.forgetTxt}>Forget Password?</Text>
            }
        </View>
    )
}
export default FormInput