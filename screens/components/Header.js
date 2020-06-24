/*
Stack screen default animasyonlarını react-native-paper ile değiştirmek
için bunu kullanıyoruz.
*/
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Avatar,Appbar} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({scene,previous,navigation}) => {
    const {options} = scene.descriptor

    const title = options.headerTitle !== undefined ? 
    options.headerTitle : 
    options.title !== undefined ?
    options.title : scene.route.name


    return (
        // <Appbar.Header theme={{color : {primary : theme.colors.surface }}}>
        <Appbar.Header>
            { previous ? (
                    <Appbar.BackAction
                        onPress={() => navigation.goBack()}
                        //color={theme.colors.primary}
                    />
                ):(
                    <TouchableOpacity
                    onPress={() => {navigation.toggleDrawer()}}>
                        <Avatar.Image 
                        size={40}
                        source={{ uri:"https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg"}}/>
                    </TouchableOpacity>
                )}
                <Appbar.Content
                    titleStyle={{alignSelf:"center"}}
                    title ={previous ? title : <Icon size={40} name="twitter"/>}
                />
        </Appbar.Header>
    )
}

export default Header
