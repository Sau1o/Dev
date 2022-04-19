import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Main = () => {
  return(
  <View>
    <Text>Lista Leitura</Text>
    <TouchableOpacity>
        <Icon name="add" size={60} color='#000'/>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({

})
export default Main;
