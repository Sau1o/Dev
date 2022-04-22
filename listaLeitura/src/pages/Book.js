import React from 'react'
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Book = () => {
    return (
        <View styles={styles.container}>
            <Text>Book</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red'
    }
})

export default Book;