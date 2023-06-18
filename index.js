/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";
import App from './App';
import { name as appName } from './app.json';

export default function Main() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main); 