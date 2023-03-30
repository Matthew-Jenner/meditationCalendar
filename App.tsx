import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function App() {
  const [showModal, setShowModal] = useState({})
  return (
    <View >
      <TouchableOpacity onPress= {()=> setShowModal(true)} style={{backgroundColor:'black', borderRadius:10, margin:40, width:200, alignItems:'center'}}>
        <Text style= {{color:'white', fontSize: 22}}>Show Calendar</Text>
        </TouchableOpacity>
      <Modal visible={showModal} animationType="fade">
        <Calendar style={{borderRadius:10, elevation: 4, margin: 40}} onDayPress={date => {
          console.log(date)
           setShowModal(false)}}
           initialDate={'2023-03-01'}
           minDate={'2023-01-01'}
           maxDate={'2025-01-01'}
           hideExtraDays={true}
           markingType={'multi-dot'}
           markedDates={{
            '2023-03-10' : {dots: [{color:'red'}, {color:'green'}], 
          selected:true, selectedColor: 'lightblue', selectedTextColor: 'black'},
          '2023-03-12' : {dots: [{color:'red'}, {color:'green'}], 
          selected:true, selectedColor: 'lightblue', selectedTextColor: 'black'},
          
           }}
           />
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
});