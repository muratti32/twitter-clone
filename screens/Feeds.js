import React from 'react'
import { StyleSheet,View, Text } from 'react-native'
import {Button} from 'react-native-paper'

import Tweet from './components/Tweet'
import { ScrollView } from 'react-native-gesture-handler'


const Feeds = ({navigation,route}) => {

    
    return (
        <ScrollView style={styles.container}>
            <Tweet 
                navigation={navigation}
                name="Haci Rauschmayer"
                alias="@laynn"
                avatar="https://pbs.twimg.com/profile_images/1143226230663274497/9yYkmbTG_400x400.jpg"
                message="New policy. Anyone who complains about the content I create for free gets an immediate and full refund. No questions asked."
                image="https://picsum.photos/700"
            />

            <Tweet
                navigation={navigation}
                name="Ahmet Kaya"
                alias="@laynn"
                avatar="https://picsum.photos/444"
                message="New policy. Anyone who complains about the content I create for free gets an immediate and full refund. No questions asked."
            />

            <Tweet
                navigation={navigation}
                name="Mike Rauschmayer"
                alias="@laynn"
                avatar="https://picsum.photos/222"
                message="New policy. Anyone who complains about the content I create for free gets an immediate and full refund. No questions asked."
            />

            <Tweet
                navigation={navigation}
                name="Haci Rauschmayer"
                alias="@laynn"
                avatar="https://picsum.photos/111"
                message="New policy. Anyone who complains about the content I create for free gets an immediate and full refund. No questions asked."
                image="https://picsum.photos/710"
            />

        </ScrollView>
    )
}

export default Feeds

const styles = StyleSheet.create({
    container:{
    },
})