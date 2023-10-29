import { View, Text, useColorScheme, Image, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

interface Iprops{
    name:string,
    image:string|null
    ing1:string,
    ing2:string,
    id:string
}
const Searchcard = ({ing1,ing2,name,image,id}:Iprops) => {

    const colorScheme=useColorScheme()

    const router=useRouter()
  return (
    <View style={{
        width:'100%',
        marginVertical:6

    }}>
        <Pressable onPress={()=>{
            router.push(`/fooditem/${id}`)

        }}>
        <Image   source={{
            uri:image??''
        }} style={{
            height:200,
            width:'100%',
            borderRadius:4
            
            
            
        }}/>
      <Text style={{
        color:colorScheme=="dark"?'#fff':"#000",
        fontWeight:'500'
      }}>{name}</Text>

      <Text style={{
        color:colorScheme=="dark"?'#fff':"#000",
      }}>{ing1}{ing2 &&`,`} {ing2} {ing2 &&`...`}</Text>

        </Pressable>
       
    </View>
  )
}

export default Searchcard