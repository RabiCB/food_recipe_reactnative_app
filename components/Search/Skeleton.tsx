import { View, Text } from 'react-native'
import React from 'react'
import {Skeleton} from "@rneui/themed"
const Skeletonsearch = () => {
  return (
    <View style={{
        backgroundColor:'white',
        padding:8,
        marginTop:8,
        borderRadius:6,
        width:'100%',
        gap:6
    }}>
     <Skeleton style={{
        width:'100%',
        backgroundColor: "#f2f2f2",
      }} height={160} skeletonStyle={{
      
            backgroundColor: "#f2f2f2",
          
      }} />
      <Skeleton style={{
        width:'100%',
        backgroundColor: "#f2f2f2",
      }} height={20} skeletonStyle={{
      
        backgroundColor: "#f2f2f2",
      
  }} />
      <Skeleton style={{
        width:'100%',
        backgroundColor: "#f2f2f2",
      }} height={20} skeletonStyle={{
      
        backgroundColor: "#f2f2f2",
      
  }} />

      
      
    </View>
  )
}

export default Skeletonsearch