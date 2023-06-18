import FormInput from '../formInput'
import styles from './styles'
import colors from '../../../theme/color'

const GenericFormInput = (props) => {
    return (
        <FormInput
            style={styles.style}
            containerStyle = {styles.containerStyle}
            placeholderTextColor = {colors.placeholderColor}
            {...props}
        />
    )
}
export default GenericFormInput