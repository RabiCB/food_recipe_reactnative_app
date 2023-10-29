import { View, Text, Image, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import { memo } from 'react'
import { useRouter } from 'expo-router'

interface Iprops{
imgsrc?:string
mealname:string
id:string


}

 function Itemcard({mealname,imgsrc,id}:Iprops) {

    const colorScheme=useColorScheme()

    const router=useRouter()
  return (
    <View style={{
        height:140,
        width:120,
        
      }}>
        <TouchableOpacity activeOpacity={1} onPress={()=>{router.push(`/fooditem/${id}`)}}>
        <Image source={{
          uri:imgsrc
        }} height={120} width={120}  borderRadius={8}/>
        <Text style={{
            color:colorScheme=="dark"?'#fff':'#000'
        }}>{mealname}</Text>

        </TouchableOpacity>
        
       
      </View>
  )
}

export default memo(Itemcard)