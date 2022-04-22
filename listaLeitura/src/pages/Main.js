import React from 'react'
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Main = ({navigation}) => {
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
  <View style={styles.container}>
    <View style={styles.toolbox}>
      <Text style={styles.title}>Lista Leitura</Text>
        <TouchableOpacity 
          style={styles.toolBoxButton}
          onPress={() => navigation.navigate('Book')}
        >
            <Icon name="add" size={14} color='#FFF'/>
        </TouchableOpacity>
    </View>
    <FlatList 
        data={data} 
        keyExtractor={item => item.id}
        renderItem={({item})=> (
            <TouchableOpacity style={styles.itemButton}>
                <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
        )} 
    />
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
    },
    toolbox:{
        flexDirection: 'row',
        marginBottom:5,
    },
    title:{
        fontSize: 16,
        flex:1,
        color:'#3498db',
    },
    toolBoxButton:{
        backgroundColor:"#3498db",
        width: 22,
        height: 22,
        borderRadius:20,
        justifyContent:"center",
        alignItems:'center',
    },
    itemButton:{},
    itemText:{
        fontSize:16,
    },

})
export default Main;
