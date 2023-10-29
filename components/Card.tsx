import { View, Text, FlatList, Image, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Itemcard from './Itemcard';
import Feedskeleton from './feed/Feedskeleton';
import {useQuery} from "@tanstack/react-query"
const api="https://www.themealdb.com/api/json/v1/1/search.php?s="
export default function Card() {

   

    const [Foods,setFoods] = useState([]);


    const getTrendingdata=async()=>{
      const res = await fetch(api);
      
      return res?.json()
      
  }
  const {data,isLoading}=useQuery({queryKey:['getTrendingdata'],queryFn:getTrendingdata})

  const renderItem = ({ item }:any) => (

    <Itemcard id={item?.idMeal} imgsrc={item?.strMealThumb} mealname={item?.strMeal}/>
    
  );

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

  const colorScheme=useColorScheme()

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
        
        }}>Our Trending Recipes</Text>
        
  
       
            <FlatList style={{
              backgroundColor:'none',
           
            }} data={data?.meals} ListFooterComponent={renderFooter} ItemSeparatorComponent={() => <View style={{width:16}} />}  renderItem={renderItem}   horizontal={true} showsHorizontalScrollIndicator={false} />
            
              
  
         
      </View>
  )
}