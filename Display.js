import React from 'react';
import { ImagePropTypes, StyleSheet, Text, View } from 'react-native';
import{Card, Paragraph, Title} from "react-native-paper"

export default function Display(){
    return(
        <View>
            <Card>
            <Card.Content>

            <Card.Title title="Results" />
            <Title>Percentage</Title>
            <Text>56%</Text>
            <Title>Message</Title>
            <Text>All the best</Text>
            </Card.Content>
            </Card>
        </View>
    )
}