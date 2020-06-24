import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {FAB,Portal} from 'react-native-paper'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import {useIsFocused} from '@react-navigation/native'

import FeedsHome from './FeedsHome'
import Message from './Message'
import Notifications from './Notifications'
import SearchStack from './SearchStack'

const Tab = createMaterialBottomTabNavigator();

const Home = ({route}) => {
    const tabName = route?.state !== undefined ? 
    route?.state?.routeNames[route?.state?.index] : 
    "feeds"

    const isFocused = useIsFocused();

    let icon ="feather"

    console.log(tabName)
    switch(tabName){
        case "message" :
            icon = 'email-plus-outline';
            break;
        default :
            icon = "feather"
        
    }
    console.log(isFocused)
    return (
        <React.Fragment>
            <Tab.Navigator
            initialRouteName="homescreen"
            shifting={true}
            screenAnimationEnabled={true}
            labeled={false}>
            <Tab.Screen 
                name="homescreen"
                component={FeedsHome}
                options={{
                    tabBarIcon: 'home-account'
                }}
            />
            <Tab.Screen 
                name="search"
                component={SearchStack}
                options={{
                    tabBarIcon: 'magnify'
                }}
            />
            <Tab.Screen 
                name="notifications"
                component={Notifications}
                options={{
                    tabBarIcon: 'bell-outline'
                }}
            />
            <Tab.Screen 
                name="message"
                component={Message}
                options={{
                    tabBarIcon: 'message-text-outline'
                }}
            />
        
            </Tab.Navigator>
            <Portal>
                <FAB 
                icon={icon}
                visible={isFocused}
                color="white"
                style={{
                    position: 'absolute',
                    bottom:100,
                    right:16
                }}
                onPress={() => {}}
                />
                    
                
            </Portal>
        </React.Fragment>
    )
}

export default Home

const styles = StyleSheet.create({})
