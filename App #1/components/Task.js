import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Task({key,task,index,completeTask,deleteTask}) {
  return (
    <View style={styles.task}>
      <Text style={task.completed ?styles.completed:styles.text}>{task.text}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => completeTask(index)}>
          <Icon name='check' size={20} color='green'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(index)}>
        <Icon name='trash' size={20} color='red'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    task:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#f9f9f9',
        padding:10,
        marginVertical:5,
        borderRadius:5,
    },
    completed:{
        fontSize:16,
        textDecorationLine:'line-through',
        color:'gray',
    },
    text:{
        fontSize:16,
    },
    buttons:{
        flexDirection:'row',
        gap:10,
    },
  });
