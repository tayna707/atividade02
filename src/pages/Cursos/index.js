import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cursos() {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={[styles.container]}>
            <View>
            <Text style={{color: 'blue'}}>Analista de dados - Você irá aprender a coletar, organizar, analisar e interpretar grandes conjuntos de dados para fornecer insights valiosos e apoiar a tomada de decisões estratégicas nas organizações. </Text>
        
            <Text style={{color: 'green'}}>Inglês - Você irá aprender a desenvolver diálogos, a autoconfiança para falar inglês, impulsionando o aprendizado e trazendo a efetividade no aprendizado.</Text>
            
            <Text style={{color: 'black'}}>Gastronomia - Voce irá proporcionar uma experiência prática intensiva, onde os alunos aprendem a criar pratos sofisticados, explorar ingredientes diversos e compreender as nuances da apresentação culinária. </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})