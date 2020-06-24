import React from 'react'
import { StyleSheet, View,FlatList } from 'react-native'
import {Title, Caption,Divider,Card, Paragraph} from 'react-native-paper'

import {createStackNavigator} from '@react-navigation/stack'
import StackHeader from './components/SearchStackHeader'

const aramaList = [
    {id:1,text:"Lorem ipsum dolor sit amet",count:Math.round(Math.random()*1000)},
    {id:2,text:"Laccumsan non ligula",count:Math.round(Math.random()*1000)},
    {id:3,text:"Lorem ipsum dolor sit amet",count:Math.round(Math.random()*1000)},
    {id:4,text:"ullamcorper leo non",count:Math.round(Math.random()*1000)},
    {id:5,text:"accumsan non ligula",count:Math.round(Math.random()*1000)},
    {id:6,text:"ullamcorper leo non",count:Math.round(Math.random()*1000)},
    {id:7,text:"accumsan non ligula",count:Math.round(Math.random()*1000)},
    {id:8,text:"accumsan non ligula",count:Math.round(Math.random()*1000)},
    {id:9,text:"Vestibulum scelerisque ",count: Math.round(Math.random()*1000)},
    {id:10,text:"accumsan non ligula",count:Math.round( Math.random()*1000)},
]

const ListHeader = () => {
    return (
       <Card>
            <Card.Cover source={{uri: 'https://picsum.photos/167'}}/>

            <Card.Content style={{position:"absolute", left:0,bottom:0}}>
                <Title style={{color:"white"}}>Recent Developments</Title>
            </Card.Content>
       </Card>
    )
}

const Item = ({item}) => {
    return (
        <Card>
            <Card.Content>
                <Title>{item.text}</Title>
                <Paragraph>{item.count} Tweet</Paragraph>
            </Card.Content>
        </Card>
    )
}


const Search = () => {
    return (
        <View style={{ justifyContent: 'center'}}>
             <FlatList
                data={aramaList}
                renderItem={({ item }) => <Item item={item} />}
                ListHeaderComponent = {() => (<ListHeader />)}
                ItemSeparatorComponent = {() => (<Divider />)}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


const Stack = createStackNavigator ();

const SearchStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: ({scene,previous,navigation}) => (
                    <StackHeader scene={scene} previous={previous} navigation={navigation}/>
                )
            }}
        >
            <Stack.Screen 
                name = "search"
                component = { Search}
            />
        </Stack.Navigator>
    )
}

export default SearchStack

const styles = StyleSheet.create({
    item:{
        flex:1,
    }
})
