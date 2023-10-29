import { View, Text, useColorScheme, Image } from 'react-native'
import React from 'react'
interface Iprops{
    area?:string|null
    ing1?:string|null
    ing2?:string|null
    ing3?:string|null
    ing4?:string|null
    ing5?:string|null
    ing6?:string|null
    ing7?:string|null
    category?:string|null
    strMealthumb?:string
    strInstruction?:string|null
    name:string

}


const Detailpage = ({name,area,category,ing1,ing2,ing3,ing4,ing5,ing6,ing7,strMealthumb,strInstruction}:Iprops) => {
    const colorScheme=useColorScheme()
  return (
    <View style={{
      marginTop:12,
      paddingHorizontal:6
      
    }}>
      <Image source={{
        uri:strMealthumb
      }} style={{
        height:300,
        
        
        width:'100%',
        borderRadius:6,
        objectFit:'cover'
        
      }}/>
      <Text style={{
        color:colorScheme==="dark"?"white":"#000",
        fontSize:18,
        fontWeight:'500',
        marginTop:4
      }}>{name}</Text>
      {area &&<Text style={{
        color:colorScheme==="dark"?"white":"#000",
      }}>cusine: {area}</Text>}

      <View style={{
        gap:4
      }}>
        <Text style={{
        color:colorScheme==="dark"?"white":"#000",
        fontSize:16,
        fontWeight:'500',
        marginTop:4,
        textAlign:'justify',
        
        
      }}>Ingredients</Text>
       <Text style={{
        color:colorScheme==="dark"?"white":"#000",
        
        fontWeight:'400',
        marginTop:4,
        textAlign:'justify',
        
        
      }}>
       {
          ing1
        }, {
          ing2
        }, {
          ing3
        }, {
          ing4
        },
        {
          ing5
        },{
          ing7
        }
        </Text> 
      </View>
      <View style={{
        gap:4
      }}>
        <Text style={{
        color:colorScheme==="dark"?"white":"#000",
        fontSize:16,
        fontWeight:'500',
        marginTop:4,
        
        
        
      }}>Instructions</Text>

      <Text style={{
        color:colorScheme==="dark"?"white":"#000",
        fontSize:14,
        textAlign:'justify',
        marginTop:4
      }}>{strInstruction}</Text>

      </View>
   
        
     
    </View>
  )
}

export default Detailpage