import DropDown from '../dropDown'
import styles from './styles'

const GenericDropDown = (props) => {
    return (
        <DropDown
            style={styles.style}
            containerStyle={styles.containerStyle}
            {...props}
        />
    )
}
export default GenericDropDown