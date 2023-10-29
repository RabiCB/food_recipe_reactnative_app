import { View, Text, FlatList, Image, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Itemcard from './Itemcard';
import {useQuery} from "@tanstack/react-query"
import Feedskeleton from './feed/Feedskeleton';
const api="https://www.themealdb.com/api/json/v1/1/filter.php?a=indian"
export default function Allitem() {

   

  
const getData=async()=>{
    const res = await fetch(api);
    
    return res?.json()
    
}
const {data,isLoading}=useQuery({queryKey:['getData'],queryFn:getData})






  const renderItem = ({ item }:any) => (

    <Itemcard id={item?.idMeal} imgsrc={item?.strMealThumb} mealname={item?.strMeal}/>
    
  );

  const colorScheme=useColorScheme()

  const renderFooter =()=>(
    <>
    {
      isLoading &&<View style={{
        flexDirection:'row',
        gap:18
      }}>
        <Feedskeleton/>
      <Feedskeleton/>
      <Feedskeleton/>
      <Feedskeleton/>
      <Feedskeleton/>
      </View>
    }
      

    </>
  )

  return (
    <View style={{
        marginTop:12,
        paddingHorizontal:8,
       
        paddingVertical:6
        
      }} >
  
        <Text style={{
          marginBottom:6,
          fontWeight:'600',
          fontSize:14,
          color:colorScheme==="dark"?'#fff':'#000'
        
        }}>Filter By Area</Text>
        
  
       {
        isLoading &&<View><Text>isLoading</Text></View>
       }
            <FlatList style={{
              backgroundColor:'none',
           
            }} data={data?.meals} ListFooterComponent={renderFooter}  ItemSeparatorComponent={() => <View style={{width:16}} />}  renderItem={renderItem}   horizontal={true} showsHorizontalScrollIndicator={false} />
            
              
           
         
      </View>
  )
}