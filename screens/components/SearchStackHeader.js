/*
Stack screen default animasyonlarını react-native-paper ile değiştirmek
için bunu kullanıyoruz.
*/
import React,{useState} from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import {Avatar,Appbar,Searchbar} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

const Header = ({scene,previous,navigation}) => {

    const [value, onChangeText] = useState('sadf');

    const {options} = scene.descriptor

    const title = options.headerTitle !== undefined ? 
    options.headerTitle : 
    options.title !== undefined ?
    options.title : scene.route.name

    const Input = () => {
        return (
            <View style={{flex: 1,padding: 10}}> 
                <Searchbar
                style={{ elevation: 1,height:40, backgroundColor:"transparent",borderRadius:20}}
                placeholder="Search"
                onChangeText={() => {}}
                />
            </View>
        )
    }
    

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
                <Input />
                <TouchableOpacity
                    onPress={() => {navigation.toggleDrawer()}}>
                    <Icon size={24} name="settings" />
                </TouchableOpacity>
                
        </Appbar.Header>
    )
}

export default Header
