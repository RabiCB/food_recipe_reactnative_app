import { View, Text, useColorScheme, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
import Itemcard from './Itemcard';
import {useQuery} from "@tanstack/react-query"
import Feedskeleton from './feed/Feedskeleton';
const api="https://www.themealdb.com/api/json/v1/1//categories.php"
export default function Catogories() {

    const colorScheme=useColorScheme()

    const [categories,setCategories] = useState([]);


    const getCategories=async()=>{
      const res = await fetch(api);
      
      return res?.json()
      
  }
  const {data,isLoading}=useQuery({queryKey:['getCategories'],queryFn:getCategories})

    const renderItem=({item}:any)=>(

        <Itemcard id={item?.idMeal} mealname={item?.strCategory} imgsrc={item?.strCategoryThumb} />

    )

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
        
        }}>Categories</Text>
        

       <FlatList style={{
              backgroundColor:'none',
           
            }} data={data?.categories} ListFooterComponent={renderFooter} ItemSeparatorComponent={()=><View style={{width:16}}></View>}  renderItem={renderItem}   horizontal={true} showsHorizontalScrollIndicator={false} />
  
       
            
              
  
         
      </View>
  )
}