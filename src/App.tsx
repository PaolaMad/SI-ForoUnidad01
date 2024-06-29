import { SafeAreaView } from 'react-native';
import { PasswordGenerator } from './presentation/screens/PasswordGenerate';
import { styles } from './presentation/theme/app-theme';

export const App = () => {
    return (

        <SafeAreaView style={styles.container}>
            <PasswordGenerator />
        </SafeAreaView>

    );
};
