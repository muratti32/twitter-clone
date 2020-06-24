import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import {Button,Avatar,Title,Caption,Card, Paragraph} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MyButton from './MyButton'

//name,alias,message,avatar,image,navigation
const Tweet = (props) => {
    const image = props.image
    const name = props.name
    const alias = props.alias
    const navigation = props.navigation
    const avatar = props.avatar
    const message = props.message


    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("detail",{
                                                                                    name:name,
                                                                                    image:image,
                                                                                    alias:alias,
                                                                                    avatar:avatar,
                                                                                    message:message
                                                                                })}>
            <View style={styles.container} >
              <Avatar.Image
                    size={50}
                    source={{uri : avatar}}
                />
               
                <View style={styles.icerik}>
                <View style={styles.ust}>
                    <View style={styles.kullanici_bilgiler}>
                        <Title style={{fontSize:13}}>{name}</Title>
                        <Caption style={{marginLeft:5}}>{alias}</Caption>
                        <Caption style={{alignSelf:"baseline", marginLeft:5,marginBottom:3}}>.</Caption>
                        <Caption style={{alignSelf:"center",}}>2h</Caption>
                    </View>
                    <MyButton>
                        <Icon size={24} name="chevron-down" color="#999" />
                    </MyButton>
                    
                </View>
                <Paragraph style={{fontSize:15}}>{message}</Paragraph>

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
        </TouchableWithoutFeedback>
    )
}

export default Tweet

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