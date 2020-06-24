import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator }  from '@react-navigation/stack'

import StackHeader from "./components/Header"

import Feeds from './Feeds'
import Detail from './Details'


const FeedsHome = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Feed" headerMode="screen"
                screenOptions={{header: ({scene,previous,navigation}) => 
                (<StackHeader scene={scene} previous={previous} navigation={navigation}/>)}}>
            <Stack.Screen
                name="feed"
                component={Feeds}
                options={{ headerTitle:"Twitter"}}
            />
            {/* <Stack.Screen 
                name="detail"
                component={Detail}
                options={{ headerTitle:"Tweet"}}
            /> */}
        </Stack.Navigator>
    )
}

export default FeedsHome

const styles = StyleSheet.create({})
