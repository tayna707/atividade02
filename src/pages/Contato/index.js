import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, TextInput, Alert, View,StyleSheet} from 'react-native'

export default function Inicio() {
    return (
        <SafeAreaView style={[styles.container]}>
            <Text style={{color: 'red'}}>Cadastro</Text>

            <TextInput style={{ borderColor: 'green', borderWidth: 2, width: 150, }} value="Nome"></TextInput>
            <TextInput style={{ borderColor: 'green', borderWidth: 2, width: 150, }} value="E-mail" ></TextInput>
            <TextInput style={{ borderColor: 'green', borderWidth: 2, width: 150, }} value="CPF"></TextInput>
            <View style={{width:100}}>
                <Button title="Enviar" color={'blue'}
                    onPress={() => Alert.alert('Cadastro realizado com sucesso!')}></Button>
            </View>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    }
})