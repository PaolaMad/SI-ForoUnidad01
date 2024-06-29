import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5fa7bd',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 20,
        padding: 10,
        alignItems: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#ffffff',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#474545',
        borderWidth: 0.5,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        color: 'black',
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    passwordContainer: {
        marginTop: 30,
        alignItems: 'center',
        width: '100%',
    },
    passwordText: {
        fontSize: 16,
        marginBottom: 15,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
        textAlign: 'center',
        color: 'black',
    },
    copyButton: {
        backgroundColor: '#34C759',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
});
