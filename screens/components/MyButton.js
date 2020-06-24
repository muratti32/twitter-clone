import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const MyButton = ({children}) => {
    return (
        <View>
            <TouchableOpacity>
                {children}
            </TouchableOpacity>
            
        </View>
    )
}

export default MyButton

const styles = StyleSheet.create({})
