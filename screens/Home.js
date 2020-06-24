import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator }  from '@react-navigation/stack'

import StackHeader from "./components/Header"

import BottomTabs from './BottomTabs'
import Detail from './Details'


const Home = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Feed" headerMode="screen"
                screenOptions={{header: ({scene,previous,navigation}) => 
                (<StackHeader scene={scene} previous={previous} navigation={navigation}/>)}}>
            <Stack.Screen
                name="bottom_tabs"
                component={BottomTabs}
                options={{ headerTitle:"Twitter"}}
            />
            <Stack.Screen 
                name="detail"
                component={Detail}
                options={{ headerTitle:"Tweet"}}
            />
        </Stack.Navigator>
    )
}

export default Home

const styles = StyleSheet.create({})
