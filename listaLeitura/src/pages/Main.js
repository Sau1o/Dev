import React from 'react'
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Main = () => {
    const data = [
        {
            id:"1",
            title:"Código Limpo",
            anotations:"qq coisa1",
            isRead: false,
            photo: null,
        },
        {
            id:"2",
            title:"C Completo e total",
            anotations:"qq coisa2",
            isRead: false,
            photo: null,
        },
        {
            id:"3",
            title:"A biblia do PHP",
            anotations:"qq coisa3",
            isRead: false,
            photo: null,
        },
    ]
  return(
  <View>
    <Text>Lista Leitura</Text>
    <TouchableOpacity>
        <Icon name="add" size={60} color='#000'/>
    </TouchableOpacity>
    <FlatList 
        data={data} 
        keyExtractor={item => item.id}
        renderItem={({item})=> <Text>{item.title}</Text>} 
    />
  </View>
  );
}

const styles = StyleSheet.create({

})
export default Main;
