import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

import {Button,Avatar,Title,Caption,Card,Paragraph} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MyButton from './components/MyButton'

const Details = ({route,navigation}) => {

    const {image} = route.params
    const {name} = route.params
    const {alias} = route.params
    const {avatar} = route.params
    const {message} = route.params

    return (
            <View style={styles.container} >
            <Avatar.Image
                size={55}
                source={{uri : avatar}}
            />
            
            <View style={styles.icerik}>
            <View style={styles.ust}>
                <View style={styles.kullanici_bilgiler}>
                    <Title style={{fontSize:15}}>{name}</Title>
                    <Caption style={{fontSize:13,marginLeft:5}}>{alias}</Caption>
                    <Caption style={{fontSize:13,alignSelf:"baseline", marginLeft:5,marginBottom:3}}>.</Caption>
                    <Caption style={{fontSize:13,alignSelf:"center",}}>2h</Caption>
                </View>
                <MyButton>
                    <Icon size={27} name="chevron-down" color="#999" />
                </MyButton>
                
            </View>
            <Paragraph style={{fontSize:19}}>{message}</Paragraph>

            {
                image && (
                    <Card style={styles.card}>
                        <Card.Cover source={{ uri: image }} />
                    </Card>
                )
            }
            <View style={styles.alt}>
                <Button mode="Text" compact={true} style={styles.button} onPress={() =>{}}>
                    <Icon size={15} name="comment-outline" /> 
                </Button>
                <Button mode="Text" compact={true} style={styles.button} onPress={() =>{}}>
                    <Icon size={18} name="twitter-retweet" />
                </Button>
                <Button mode="Text" compact={true} style={styles.button} onPress={() =>{}}>
                    <Icon size={15} name="heart-outline" />
                </Button>
                <Button mode="Text" compact={true} style={styles.button} onPress={() =>{}}>
                    <Icon size={15} name="share-variant" />
                </Button>
                
            </View>

            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:11,
        paddingVertical:7,
        flexDirection: 'row',
        width:"100%",
        alignItems:"flex-start",
    },
    ust:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    kullanici_bilgiler:{
        flexDirection:"row",
        alignItems:"center",
    },
    icerik:{
        marginLeft:5,
        flex:1,
    },
    alt:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:3,
    },
    button:{
        padding:0,
        borderRadius:24,
        alignItems:"flex-start",
        marginLeft:-7
    },
    card:{
        marginVertical:5,
    }
})